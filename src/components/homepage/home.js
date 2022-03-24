/*
This file is responsible for displaying the home UI page and 
generating a shortened url if the specified long url by the user is valid. 
If successful, the generated shortened url along with the button to copy to clipboard 
and another button to display the QR code are displayed.

The generated shortened url along with the original url specified by the user are
stored in the firebase database.
*/

import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, addDoc } from 'firebase/firestore'
import "./home.css";
import shortid from "shortid";
import CopyToClipboard from "react-copy-to-clipboard";
import QRCode from "react-qr-code";
import Popup from 'reactjs-popup';
import isURL from 'validator/lib/isURL';

function Home() {

  // create and initialize the states

  // state for urls
  const [{ url, setUrl, displayShortUrl }, setState] = useState({
    url: "",
    setUrl: "",
    displayShortUrl: false,
  });

  // state for opening/closing QR code
  const [isOpen, setIsOpen] = useState(false);

  // state for copying shortened url
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  // state for loading 
  // so that UI will show the loading message while generating short url 
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <div><h3>Loading...</h3></div>
  }

  // store the hostname
  const host = "https://url-shortener-react-72986.web.app/";

  // invoked after user has specified the long url
  // creates the shortened url and saves them to the database
  const handleSubmit = async (e) => {

    // first, check whether specified url is valid
    if (!url.startsWith("https://") || !isURL(url)) {
      alert("Sorry. Please ensure you enter a valid URL that starts with 'https://'!")
      return
    }

    // set the loading message
    setLoading(true);

    // to prevent reloading
    e.preventDefault()

    // to generate short url
    let short_url_code = shortid.generate();

    // save to the firebase datastore
    await addDoc(collection(db, "urls"), {
      original_url: url,
      short_url_code: short_url_code,
    }).then(() => {
      setState((_) => ({
        ..._,
        setUrl: short_url_code,
        displayShortUrl: true
      }));
    });

    // revert back to original UI
    setLoading(false);
  };

  return (
    <div>
      <div className="home_center">
        <h1>URL Shortener Application</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="home_container">
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setState((_) => ({ ..._, url: e.target.value }));
            }}
            placeholder="Enter the URL here..."
          />
          <button type="submit">Shorten URL</button>
        </div>
      </form>

      {displayShortUrl ? (
        <div>
          <div className="result_title">
            <h3>Click on the link below or generate a QR code...</h3>
          </div>
          <div className="result_url">
            <p>
              <a href={host + "v/" + setUrl}>{host + "v/" + setUrl}</a>
            </p>
            <CopyToClipboard
              text={host + "v/" + setUrl}
              onCopy={() => setCopied(true)}
            >
              <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
            </CopyToClipboard>

            <div>
              <Popup
                trigger={<button> Generate QR code </button>}
                position="below center"
                open={isOpen}
                onOpen={() => setIsOpen(!isOpen)}
              >
                <div>
                  <QRCode
                    value={host + "v/" + setUrl}
                  />
                </div>
                <div>
                  <button className="button" onClick={() => {
                    setIsOpen(!isOpen)
                  }}
                  >
                    Close
                  </button>
                </div>
              </Popup>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Home;
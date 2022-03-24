/*
This file is responsible for redirecting users to the correct original url
when they key in the generated shortened url
*/

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

function Redirector() {
  const { code } = useParams();
  const [url, setUrl] = useState("");

  // query the database to obtain the original url
  const redirect_url = async () => {
    onSnapshot(
      query(
        collection(db, "urls"),
        where("short_url_code", "==", code),
      ),
      (snapshot) => {
        // redirect to the original url
        setUrl(snapshot.docs[0].data().original_url);
        window.location.replace(url);
      }
    )
  }

  redirect_url()

  // display redirect message while querying and obtaining the original url
  return (
    <div>
      <h3>Redirecting...</h3>
    </div>
  );
}

export default Redirector;
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResponsiveIframeContainer from "../components/ResponsiveIframeContainer";
import { dbRef } from "../utils/firebase";
import { child, get } from "firebase/database";
import { useState, useEffect } from "react";

function CertificateVerificationPage() {
  const queryParameters = new URLSearchParams(window.location.search);
  const code = queryParameters.get("code");

  const [driveID, setDriveID] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `certificates/${code}`));
        if (snapshot.exists()) {
          setDriveID(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [code]);

  return (
    <>
      <Header />
      <ResponsiveIframeContainer title="Certificate" driveID={driveID} />
      <Footer />
    </>
  );
}

export default CertificateVerificationPage;

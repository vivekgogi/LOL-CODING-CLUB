import { dbRef } from "../utils/firebase";
import { child, get } from "firebase/database";
import { useState, useEffect } from "react";
import AlumniTable from "./AlumniTable";

function AlumniConnect() {
  const [alumni21, setAlumni21] = useState([]);
  const [alumni22, setAlumni22] = useState([]);
  const [alumni23, setAlumni23] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var snapshot = await get(child(dbRef, "alumni21"));
        if (snapshot.exists()) {
          setAlumni21(snapshot.val());
        } else {
          console.log("No data available");
        }

        snapshot = await get(child(dbRef, "alumni22"));
        if (snapshot.exists()) {
          setAlumni22(snapshot.val());
        } else {
          console.log("No data available");
        }
        
        snapshot = await get(child(dbRef, "alumni23"));
        if (snapshot.exists()) {
          setAlumni23(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="alumni-connect">
      <AlumniTable key={2023} year={2023} data={alumni21} />
      <AlumniTable key={2022} year={2022} data={alumni22} />
      <AlumniTable key={2021} year={2021} data={alumni23} />
    </div>
  );
}

export default AlumniConnect;

import { useState, useEffect } from "react";
import { child, get } from "firebase/database";
import { dbRef } from "../../utils/firebase";
import AlumniTable from "./AlumniTable";
import "./AlumniConnect.css";

function AlumniConnect() {
  const [alumni19, setAlumni19] = useState([]);
  const [alumni21, setAlumni21] = useState([]);
  const [alumni22, setAlumni22] = useState([]);
  const [alumni23, setAlumni23] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var snapshot = await get(child(dbRef, "alumni19"));
        if (snapshot.exists()) {
          setAlumni19(snapshot.val());
        } else {
          console.log("No data available");
        }

        snapshot = await get(child(dbRef, "alumni21"));
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
      <div className="add-alum" data-cursor-text="Join Us!">
        <a
          href="https://forms.gle/dQo5U4ZtBwKiF4G88"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add yourself!
        </a>
      </div>
      <AlumniTable key={2023} year={2023} data={alumni23} />
      <AlumniTable key={2022} year={2022} data={alumni22} />
      <AlumniTable key={2021} year={2021} data={alumni21} />
      <AlumniTable key={2019} year={2019} data={alumni19} />
    </div>
  );
}

export default AlumniConnect;

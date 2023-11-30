import { dbRef } from "../utils/firebase";
import { child, get } from "firebase/database";
import { useState, useEffect } from "react";
import AlumniTable from "./AlumniTable";

function AlumniConnect() {
  const [alumni, setAlumni] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        var snapshot = await get(child(dbRef, "alumniconnect"));
        if (snapshot.exists()) {
          setAlumni(snapshot.val());
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

      {Object.entries(alumni)
        .reverse()
        .map(([key, value]) => (
          <AlumniTable key={key} year={key} data={value} />
        ))}
    </div>
  );
}

export default AlumniConnect;

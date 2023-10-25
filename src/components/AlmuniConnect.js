import { data23 } from "../data/alumni23";
import AlumniTable from "./AlumniTable";

function AlumniConnect() {
  return (
    <div className="alumni-connect">
      <AlumniTable key={2023} year={2023} data={data23} />
    </div>
  );
}

export default AlumniConnect;

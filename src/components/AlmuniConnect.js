import { data23 } from "../data/alumni23";
import { data22 } from "../data/alumni22";
import { data21 } from "../data/alumni21";
import AlumniTable from "./AlumniTable";

function AlumniConnect() {
  return (
    <div className="alumni-connect">
      <AlumniTable key={2023} year={2023} data={data23} />
      <AlumniTable key={2022} year={2022} data={data22} />
      <AlumniTable key={2021} year={2021} data={data21} />
    </div>
  );
}

export default AlumniConnect;

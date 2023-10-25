import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function AlumniTable({ year, data }) {
  return (
    <div className="alumni-table">
      <h1>Batch of {year}</h1>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>LinkedIn</Th>
            <Th>Portfolio/Website</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((element) => {
            return (
              <Tr key={element.email}>
                <Td>{element.name}</Td>
                <Td>
                  <a
                    href={"mailto:" + element.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {element.email}
                  </a>
                </Td>
                <Td>
                  <a
                    href={"mail:to" + element.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {element.linkedin}
                  </a>
                </Td>
                <Td>
                  <a
                    href={element.other}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {element.other}
                  </a>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}

export default AlumniTable;

import { type } from "os";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
type tableComponentProps = {
  tableData: any[];
};
const TableComponent = (props: tableComponentProps) => {
  useEffect(() => {
    console.log("tableData: ", props?.tableData);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {props?.tableData.length == 0 ? (
        <h1>No Data Available</h1>
      ) : (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Image Url</th>
            </tr>
          </thead>
          <tbody>
            {props?.tableData.map((data) => (
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.address}</td>
                <td>
                  <img src={data.imageUrl} alt="NA" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TableComponent;

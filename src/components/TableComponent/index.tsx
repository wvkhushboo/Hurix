import { useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

// type tableComponentProps={
//   id:number,
//   name: string
// }
const TableComponent = (props: any) => {
  // All declarations
  useEffect(() => {
    console.log("tableData: ", props.columns);
  }, [props.tableData]);
  return (
    <div style={{ textAlign: "center" }}>
      {props?.tableData.length == 0 ? (
        <h1>No Data Available</h1>
      ) : (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {props?.columns.map((data: any) => (
                <th>{data}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props?.tableData.map((data: any) =>
              // data.name != "" ||
              // undefined &&
              !data.hasOwnProperty("email") ? (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Button variant="primary">Permissions</Button>{" "}
                      <Button variant="primary">Clone</Button>{" "}
                    </div>
                  </td>
                </tr>
              ) : (
                <tr key={data.id}>
                  <td className="team-table-data">
                    {data?.name != "" && <Row> {data.name}</Row>}
                    {data?.email != "" && <Row> {data.email}</Row>}
                  </td>
                  <td className="team-table-data">
                    {data.roles.map((role: any) => (
                      <Row> {role.role_name}</Row>
                    ))}
                  </td>
                  <td className="team-table-data">
                    {data.status == 1 ? "Joined" : "Invite Pending"}
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                        {data.status!=1?(<Button variant="primary">Resend</Button>):"-"}
                        {data.status!=1?(<Button variant="primary">Cancel</Button>):"-"}
                        {data.status!=1?(<Button variant="primary">Remove</Button>):"-"}
                      </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};
// user.hasOwnProperty('name'); // Returns true
export default TableComponent;

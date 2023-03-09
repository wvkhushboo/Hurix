import { useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import uuid from "react-uuid";
import React from "react";
import { IPROPS } from "../../modals/ITable";


const TableComponent:React.FC<IPROPS> = ({tableData, columns, parentFunction}) => {
  // All declarations
  useEffect(() => {
    // console.log("props.tableData: ", props.tableData);
  }, [tableData]);
  return (
    <div style={{ textAlign: "center" }}>
      {tableData?.length == 0 ? (
        <h1>No Data Available</h1>
      ) : (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr key={uuid()}>
              {columns?.map((data: any) => (
                <th>{data}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data: any) => (
              <tr key={data?.id}>
                <td className="team-table-data">
                  {data?.name != "" && <Row> {data.name}</Row>}
                  {data?.email != "" && <Row> {data.email}</Row>}
                </td>
                {data?.roles && (
                  <td className="team-table-data">
                    {data?.roles?.map((role: any) => (
                      <Row> {role?.role_name}</Row>
                    ))}
                  </td>
                )}
                {data?.status && (
                  <td className="team-table-data">
                    {data?.status == 1 ? "Joined" : "Invite Pending"}
                  </td>
                )}
                <td>
                  <div className="d-flex gap-2">
                    {Object.values(data?.buttons).map((button: any) => (
                      <Button onClick={parentFunction}>{button}</Button>
                    ))}
                  </div>
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

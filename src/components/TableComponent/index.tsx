import { useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TableComponent = (props: any) => {
  // All declarations
  useEffect(() => {
    // console.log("props.tableData: ", props.tableData);
  }, [props?.tableData]);
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
            {props?.tableData?.map((data: any) => (
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
                    {data?.buttons?.remove ? (
                      <Button onClick={props.parentFunction}>{data?.buttons?.remove}</Button>
                    ) : (
                      ""
                    )}
                    {data?.buttons?.cancel ? (
                      <Button onClick={props.parentFunction}>{data?.buttons?.cancel}</Button>
                    ) : (
                      ""
                    )}
                    {data?.buttons?.resend ? (
                      <Button onClick={props.parentFunction}>{data?.buttons?.resend}</Button>
                    ) : (
                      ""
                    )}
                    {data?.buttons?.permissions ? (
                      <Button onClick={props.parentFunction}>{data?.buttons?.permissions}</Button>
                    ) : (
                      ""
                    )}
                    {data?.buttons?.clone ? (
                      <Button onClick={props.parentFunction}>{data?.buttons?.clone}</Button>
                    ) : (
                      ""
                    )}
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

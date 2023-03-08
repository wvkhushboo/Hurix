import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../TableComponent";

const Roles = () => {
  // All declarations
  // type tableComponentProps={
  //   id:number,
  //   name: string
  // }
  const [roleData, setRoleData] = useState<any>([]);
  const columns: string[] = ["Default Roles", "Actions"];

  useEffect(() => {
    getRolesAndPermission();
  }, []);

  useEffect(() => {
    // console.log("roleData useEffect: ", roleData);
  }, [roleData]);

  // All functions
  const getRolesAndPermission = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}roles`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        const apiRes = res.data;
        if (res.status === 200) {
          apiRes.default.map((res: any) => {
            res.buttons = { permissions: "Permissions", clone: "Clone" };
          });
          apiRes.user_created.map((res: any) => {
            res.buttons = { permissions: "Permissions", clone: "Clone" };
          });
        }
        setRoleData(apiRes);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const parentFunction = () => {
    alert("parentFunction - roles");
  };
  return (
    <div style={{ paddingLeft: "160px" }}>
      <h1 className="text-center">Manage Roles</h1>
      {roleData?.length == 0 ? (
        <h1 style={{ textAlign: "center" }}>No Roles to display</h1>
      ) : (
        <TableComponent tableData={roleData?.default} columns={columns} parentFunction={parentFunction}/>
      )}
      <h1 className="text-center">Roles Created by You</h1>
      {roleData?.length == 0 ? (
        <h1 style={{ textAlign: "center" }}>
          You have not created any roles yet.
        </h1>
      ) : (
        <TableComponent
          tableData={roleData?.user_created}
          columns={columns}
          parentFunction={parentFunction}
        />
      )}
    </div>
  );
};

export default Roles;

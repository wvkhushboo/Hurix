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
const columns:string[]=["Default Roles", "Actions"]

  useEffect(() => {
    // console.log("process.env.REACT_APP_API_URL:", process.env.REACT_APP_API_URL, process.env.REACT_APP_TOKEN);
    getRolesAndPermission();
  }, []);

  useEffect(() => {
    console.log("roleData useEffect: ", roleData);
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
        // console.log("res: ", res);
        res.status === 200 && setRoleData(res.data);
        console.log("roleData: ", roleData);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <div style={{ paddingLeft:"160px" }}>
      <h1 className="text-center">Manage Roles</h1>
      {roleData.length==0?(<h1 style={{ textAlign: "center" }}>No Roles to display</h1>): (<TableComponent tableData={roleData?.default} columns={columns}/>)}
      <h1 className="text-center">Roles Created by You</h1>
      {roleData.length==0?(<h1 style={{ textAlign: "center" }}>You have not created any roles yet.</h1>): (<TableComponent tableData={roleData?.user_created} columns={columns}/>)}
    </div>
  );
};

export default Roles;

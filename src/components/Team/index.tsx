import { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import axios from "axios";
import React from 'react';
import { ITEAM } from "../../modals/ITable";
const Team:React.FC = () => {
  // All declarations
  const [teamData, setTeamData] = useState<ITEAM[]>([]);
  const columns: string[] = ["Member", "Role", "Status", "Invite Actions"];
  useEffect(() => {
    getTeam();
  }, []);

  useEffect(() => {
    console.log("teamData useEffect: ", teamData);
  }, [teamData]);

  // All functions
  const getTeam = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}team-members`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const apiRes = res.data.data;
          apiRes?.map((data: any) => {
            let role_id = data?.roles?.map((role: any) => {
              return role.role_id;
            });
            if (data.status == 1 && role_id.includes(1)) {
              data.buttons = { remove: "-", cancel: "-", resend: "-" };
            } else if (data.status == 1 && !role_id.includes(1)) {
              data.buttons = { remove: "Remove" };
            } else {
              data.buttons = {
                remove: "Remove",
                cancel: "Cancel",
                resend: "Resend",
              };
            }
          });
          setTeamData(apiRes);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const parentFunction=()=>{
    alert("parentFunction - team");
  }
  return (
    <div className="team-container">
      <h1 className="text-center"> Manage Your Team</h1>
      <TableComponent tableData={teamData} columns={columns} parentFunction={parentFunction}/>
    </div>
  );
};

export default Team;

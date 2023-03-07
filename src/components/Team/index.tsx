import { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import axios from "axios";

const Team = () => {
  // All declarations
  const [teamData, setTeamData] = useState<any>([]);
  const columns: string[] = ["Member", "Role", "Status", "Invite Actions"];
  useEffect(() => {
    // console.log("process.env.REACT_APP_API_URL:", process.env.REACT_APP_API_URL, process.env.REACT_APP_TOKEN);
    getTeam();
  }, []);

  useEffect(() => {
    console.log("roleData useEffect: ", teamData);
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
        console.log("res: ", res);
        res.status === 200 && setTeamData(res.data.data);
        console.log("roleData: ", teamData);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <div className="team-container">
      <h1 className="text-center"> Manage Your Team</h1>
      <TableComponent tableData={teamData} columns={columns} />
    </div>
  );
};

export default Team;

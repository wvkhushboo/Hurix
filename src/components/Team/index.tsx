import { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import apiRes from "./apiRes";

const Team = () => {
  const [icons, setIcons] = useState<{ [key: string]: any }>([]);
  if (Object.keys(apiRes).includes("icons")) {
    console.log("inside:",apiRes.icons);
    
    <TableComponent tableData={apiRes.icons} />;
  }

  return <div>Team</div>;
};

export default Team;

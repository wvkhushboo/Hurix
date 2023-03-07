import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../TableComponent";
const Roles = () => {
  const token:string =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjMyMmJhMGVmYTEwNTFmZDg1NmNhNGFkY2M1ZmJhMDUwZjBiYmQ4YjU1NzAxOGU2MjA5NmU5ZTU3ZjRkMTQ1NDkxZGQ1YzQzZDI2ZjU3ZjQiLCJpYXQiOjE2NzgxMzIxOTUuNzMwMjc1LCJuYmYiOjE2NzgxMzIxOTUuNzMwMjgzLCJleHAiOjE3MDk3NTQ1OTUuNzE1NCwic3ViIjoiMTY0Iiwic2NvcGVzIjpbXX0.aVYoMNQxc8H-W7SnTz2xW3vUEZjR-MLc4XQbYVC5X9of8EE_YdeVZPCel2HrPBa_13cOGTujUnTt6t2zZhXW31JYA6tEh-FQ-7TkGfIdybv6RnVXqhuIH7LslUkTMBEePxbkWUpcVAx493HI5hPb6raE051FYECdGdN6woHi0_JTEd3Vh9d5zYsNsPP_Wnen2I8GVQUGca_29sO73okhCQ_Jlw1tfezbMGdzHltVgEzVIJ6AiToeqsjBXOVj5CVsme6VnLLMFvjzo7bKPOtBk9x_Vez2S49TlBgjs2ldu_TZb01AmPnmWobv_lpycPZfY09i0Dx1-uz_tb4OpRJ9DO0P0LejENihbcOZxJXKjVeRzUGlkNp_5ae3nmcVn168CyVd_-rAJvvEMVHV5ePxcjeuRMo7nFEL53I_vVGRqWDmLM1SYrGDkckVaLNkd39l2eFeR4i6EIdrL6RBp7bsqTnlLukxWnSe3UzA5_pkIK9eUl8amTihjmLAoge0tsPQeHGcZkwsZs6-R0bz4-ALf8m-5yUizaR80KZVPf-vfUnqEi-5oxk81smatWdVD2gjZNmAZT3V3Q9bLL-8L6IsnB3H7Y7eRm-gXwypJq06elT9dFE5RMhiSyk0nUdkQVQILc6OPSTCqEiBTNeZ4hLZyAXZ48z2L1_GOhj40eUDtLE";

  const [roleData, setRoleData] = useState([]);
  useEffect(() => {
    // console.log("process.env.REACT_APP_API_URL:", process.env.token);
    getRolesAndPermission();
  }, []);

  useEffect(() => {
    console.log("roleData useEffect: ", roleData);
  }, [roleData]);

  const getRolesAndPermission = async () => {
    // const response = await axios
    //   .get(`${process.env.REACT_APP_API_URL}/roles`, {
    //     headers: {
    //       Authorization: `Bearer ${process.env.token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log("res: ", res);
    //   })
    //   .catch((error) => {
    //     console.log("error: ", error);
    //   });

    // const response = await axios
    //   .get("https://dictapi.msvgo.com/v1/roles", {
    //     headers: {
    //       Authorization: `Bearer ${process.env.token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log("res: ", res);
    //   })
    //   .catch((error) => {
    //     console.log("error: ", error);
    //   });

    await axios
      .get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then((res) => {
        console.log("res: ", res);
        res.status === 200 && setRoleData(res.data);
        console.log("roleData: ", roleData);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Roles</h1>
      {roleData.length==0?(<h1 style={{ textAlign: "center" }}>No Roles and Permissions to display</h1>): <TableComponent tableData={roleData}/>}
     
    </div>
  );
};

export default Roles;

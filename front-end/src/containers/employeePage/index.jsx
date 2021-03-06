import React from "react";
import styled from "styled-components";
import NewEmployeeForm from "../../components/newEmployeeForm";
import EmployeeTable from "../../components/newEmployeeTable";
import BackgroundImg from "../../assets/pictures/contact-us-background.jpg";
import NewEmployeePage from "../NewEmployeeAdd";
import { Navbar } from "../../components/navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import BackgroundImg2 from "../../assets/pictures/teal.png"

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
  background-size: cover;
`;

const BackgroundFilter2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-image: url(${BackgroundImg2});
`;

export function EmployeePage(props) {
  return (
    <PageContainer>
      <BackgroundFilter2>
        <Sidebar />
        {/* <Navbar /> */}
        <NewEmployeePage />
        <EmployeeTable />
      </BackgroundFilter2>

    </PageContainer>
  );
}

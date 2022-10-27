import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import Header from "./Header";

function Layout({ children }) {
  return (
    <LayoutTop>
      <Header />
      <Layouts>{children}</Layouts>
    </LayoutTop>
  );
}

export default Layout;

export const LayoutTop = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Layouts = styled.div`
  box-sizing: border-box;
  border: 2px solid #000;
  padding: 20px;
  border-radius: 10px;
  background-color: wheat;
  height: 90px;
`;

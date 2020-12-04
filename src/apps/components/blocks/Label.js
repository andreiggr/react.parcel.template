import React from "react";
import styled from "styled-components";

const Label = styled.div`
  height: ${(props) => (props.small ? "18px" : "25px")};
  width: ${(props) => (props.small ? "18px" : "25px")};;
  font-size: ${(props) => (props.small ? "8px" : "10px")};;

  display: flex;

  justify-content: center;

  align-items: center;
  border-radius: 30px;
  color: white;

  background-color: ${(props) => props.themeColor};

  margin: ${(props) => props.margin};

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  color: ${(props) => props.color};
  font-weight: 700;
`;
export default Label;

"use client";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 96%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const MenuStyle = styled.div`
	width: 60px;
	height: 60px;
	background-color: aqua;
`

export default function Header() {
  return (
    <HeaderStyle>
      <div>logo</div>
      <MenuStyle>menu</MenuStyle>
    </HeaderStyle>
  );
}

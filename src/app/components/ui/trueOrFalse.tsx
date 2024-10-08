import styled from "styled-components";

const BoxStyle = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
  border-radius: 38px;
  border: 12px solid #2ddf7b;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrueMark = styled.div`
  width: 9rem;
  height: 9rem;
  background-color: #ffffff;
  border-radius: 40rem;
  border: 40px solid #2ddf7b;
`;

export default function TrueOrFalse() {
  return (
    <BoxStyle>
      <TrueMark></TrueMark>
    </BoxStyle>
  );
}

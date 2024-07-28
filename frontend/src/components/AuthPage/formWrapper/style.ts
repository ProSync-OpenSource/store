import styled from "styled-components";

export const WrapperForm = styled.div`
  position: relative;
  background-color: #F7F0F6;
  margin: -60px auto 50px;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  max-width: 500px;
  padding: 30px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  color: #101010;
  @media screen and (width >= 1024px) {
    margin: auto;
  }
`;
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 200px;
  margin-left: 8px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  
  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #58A6FF;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;

export const WrapperImageGithub = styled.img`
  display: flex;
  max-width: 400px;
  margin: 40px 100px;
`;

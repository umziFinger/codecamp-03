import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: black; */
  width: 300px;
  margin-bottom: 100px;
`;

export const MenuWrapper = styled.div`
  position: sticky;
  top: 500px;
`;

export const Menu = styled.div`
  width: 320px;
  height: 80px;
  padding-top: 15px;
  background-color: #ffd600;
  margin: 15px 10px 10px 0px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  border-radius: 0px 20px 5px 0px;
  cursor: pointer;
  :hover {
    background-color: orange;
  }
`;

export const SubMenu = styled.div`
  width: 200px;
  height: 60px;
  padding-top: 15px;
  background-color: red;
  color: white;
  margin: 15px 0px 10px 0px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 0px 10px 20px 0px;
  cursor: pointer;
  :hover {
    background-color: orange;
  }
`;

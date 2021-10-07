import styled from "@emotion/styled";

export const StickyWrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 150px;
  background-color: black;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

export const Logo = styled.div`
  font-size: 50px;
  color: white;
  cursor: pointer;
`;

export const RightTop = styled.div`
  display: flex;
  color: white;
  font-size: 20px;
  align-items: center;
`;

export const Login = styled.span`
  color: white;
  font-size: 20px;
  margin: 20px;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 40px;
  margin: 5px;
`;

export const ProfileName = styled.div`
  margin: 15px;
`;

export const Logout = styled.img`
  color: none;
  width: 30px;
  cursor: pointer;
`;

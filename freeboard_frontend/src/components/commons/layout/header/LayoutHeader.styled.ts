import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const StickyWrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 150px;
  background-color: black;
  z-index: 1;

  @media ${breakPoints.mobile} {
    height: 80px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  @media ${breakPoints.mobile} {
    height: 80px;
    padding: 20px;
  }
`;

export const Logo = styled.div`
  font-size: 50px;
  color: white;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
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

  @media ${breakPoints.mobile} {
    font-size: 10px;
    margin: 10px;
  }
`;

export const ProfileImg = styled.img`
  width: 40px;
  margin: 5px;

  @media ${breakPoints.mobile} {
    width: 20px;
  }
`;

export const ProfileName = styled.div`
  margin: 15px;

  @media ${breakPoints.mobile} {
    font-size: 10px;
    margin: 5px;
  }
`;

export const Logout = styled.img`
  color: none;
  width: 30px;
  cursor: pointer;
`;

export const Point = styled.div`
  font-size: 20px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

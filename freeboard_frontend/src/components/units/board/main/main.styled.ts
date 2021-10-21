import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  ::before {
    content: "";
    background-image: url("/images/main.png");
    background-size: 100%;
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 20px;
  }
`;

export const GoToHomePage = styled.div`
  width: 500px;
  height: 100px;
  background-color: #ffd600;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 300px;
  position: relative;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }

  @media ${breakPoints.tablet} {
    width: 400px;
    height: 80px;
    font-size: 20px;
    margin-top: 200px;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
    height: 50px;
    font-size: 20px;
    margin-top: 100px;
  }
`;

export const IntroduceWrapper = styled.div`
  display: flex;
  position: relative;

  @media ${breakPoints.mobile} {
    margin-top: 100px;
  }
`;

export const IntroduceCircle1 = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f44336;
  border-radius: 100%;
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  :hover {
    width: 310px;
    height: 310px;
  }

  @media ${breakPoints.tablet} {
    width: 150px;
    height: 150px;
    margin-top: 200px;
    :hover {
      width: 170px;
      height: 170px;
    }
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    margin-top: 100px;
    :hover {
      width: 110px;
      height: 110px;
    }
  }
`;

export const IntroduceCircle2 = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f44336;
  border-radius: 100%;
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 200px;
  :hover {
    width: 310px;
    height: 310px;
  }

  @media ${breakPoints.tablet} {
    width: 150px;
    height: 150px;
    margin: 100px;
    :hover {
      width: 170px;
      height: 170px;
    }
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    margin: 30px;
    :hover {
      width: 110px;
      height: 110px;
    }
  }
`;

export const IntroduceCircle3 = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f44336;
  border-radius: 100%;
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    width: 310px;
    height: 310px;
  }

  @media ${breakPoints.tablet} {
    width: 150px;
    height: 150px;
    margin-top: 200px;
    :hover {
      width: 170px;
      height: 170px;
    }
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    margin-top: 100px;
    :hover {
      width: 110px;
      height: 110px;
    }
  }
`;

export const Introduce1 = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ffab00;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;

  @media ${breakPoints.tablet} {
    width: 130px;
    height: 130px;
    font-size: 16px;
  }

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 80px;
    font-size: 10px;
  }
`;

export const Introduce2 = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ffab00;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;

  @media ${breakPoints.tablet} {
    width: 130px;
    height: 130px;
    font-size: 16px;
  }

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 80px;
    font-size: 10px;
  }
`;

export const Introduce3 = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ffab00;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;

  @media ${breakPoints.tablet} {
    width: 130px;
    height: 130px;
    font-size: 16px;
  }

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 80px;
    font-size: 10px;
  }
`;

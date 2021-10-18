import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 100px;
`;

export const MainWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 200px;
  justify-content: center;
`;

export const BestRow = styled.div`
  width: 282px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const BestImage = styled.img`
  width: 242px;
  height: 242px;
  margin-bottom: 20px;
`;

export const BestImageNone = styled.div`
  width: 242px;
  height: 242px;
  background-color: #bdbdbd;
  margin-bottom: 20px;
`;

export const BestName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const BestRemarks = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
`;

export const NoneImage = styled.div`
  width: 160px;
  height: 160px;
  background-color: #bdbdbd;
`;

export const Contents = styled.div`
  padding: 10px;
  width: 1030px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;

export const ContentsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 24px;
`;

export const ProfileIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Heart = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ContentsLeftBottom = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const TodayView = styled.div`
  position: sticky;
  top: 500px;
  margin-left: 100px;
  width: 196px;
  border: 1px solid #bdbdbd;
  padding: 15px;
`;

export const TodayViewProduct = styled.div`
  width: 156px;
  height: 200px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
  justify-content: space-around;
  padding: 20px;
`;

export const TodayViewImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const EmptyImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #bdbdbd;
`;

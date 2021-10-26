import styled from "@emotion/styled";

interface IMyUseditem {
  isMyUseditem: Boolean;
}

interface IColorChange {
  colorChange: Boolean;
}

export const Wrapper1 = styled.div`
  width: 100%;
  display: flex;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  width: 1200px;
`;

export const MyUseditem = styled.div<IMyUseditem>`
  border-bottom: ${(props: any) =>
    props.isMyUseditem ? "5px solid orange" : "default"};
  color: ${(props: any) => (props.isMyUseditem ? "default" : "#bdbdbd")};
  cursor: pointer;
`;

export const MyPickeditem = styled.div<IMyUseditem>`
  color: ${(props: any) => (props.isMyUseditem ? "#bdbdbd" : "default")};
  border-bottom: ${(props: any) =>
    props.isMyUseditem ? "default" : "5px solid orange"};
  margin-left: 20px;
  cursor: pointer;
`;

export const MyItems = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 50px;
`;

export const Row = styled.div`
  width: 1200px;
  display: flex;
  height: 50px;
  :hover {
    background-color: #ffd600;
  }
  cursor: pointer;
`;

export const Index = styled.div`
  width: 10%;
  justify-content: center;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  align-items: center;
`;

export const Name = styled.div`
  width: 20%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
`;

export const Remarks = styled.div`
  width: 30%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
`;

export const Price = styled.div`
  width: 20%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
`;

export const SoldOut = styled.div`
  width: 20%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  color: red;
  font-weight: bold;
`;

export const Date = styled.div`
  width: 20%;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: center;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #4f4f4f;
  display: flex;
  align-items: center;
`;

export const IndexTitle = styled.div`
  width: 10%;
  justify-content: center;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #bdbdbd;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const NameTitle = styled.div`
  width: 20%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const RemarksTitle = styled.div`
  width: 30%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const PriceTitle = styled.div`
  width: 20%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const DateTitle = styled.div`
  width: 20%;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  width: 300px;
  height: 500px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 40px;
  margin-right: 50px;
  background-color: #ffd600;
`;

export const ProfileName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  margin-top: 50px;
`;

export const ProfilePoint = styled.div`
  margin-top: 30px;
  font-size: 16px;
  font-weight: bold;
`;

export const MyProfile = styled.div`
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
`;

export const PageWrapper = styled.div`
  margin-top: 20px;
`;

export const Page = styled.span<IColorChange>`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  color: ${(props: any) => (props.colorChange ? "red" : "default")};
`;

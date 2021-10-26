import styled from "@emotion/styled";

interface IStatus {
  status: String;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
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

export const Date = styled.div`
  width: 25%;
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  align-items: center;
  padding-left: 40px;
  font-weight: bold;
`;

export const Contents = styled.div<IStatus>`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: ${(props: any) =>
    props.status === "구매"
      ? "red"
      : props.status === "판매"
      ? "blue"
      : "yellow"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Amount = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Balance = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const DateTitle = styled.div`
  width: 25%;
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

export const ContentsTitle = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AmountTitle = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BalanceTitle = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileWrapper = styled.div`
  width: 300px;
  height: 500px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 40px;
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
  margin-left: 20px;
`;

export const ProfilePoint = styled.div`
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
`;

export const MyProfile = styled.div`
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
`;

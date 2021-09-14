import styled from "@emotion/styled";

export const Wrapper1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* padding-top: 717px; */
  padding-bottom: 280px;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 1200px;
  /* height: 1847px; */
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 102px;
  padding-right: 102px;
  padding-top: 60px;
  padding-bottom: 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;
export const NamePw = styled.div`
  width: 996px;
  height: 92px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
`;
export const Star = styled.span`
  color: #ffd600;
  font-size: 16px;
  font-weight: 500;
  margin-left: 5px;
`;

export const Name = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #c4c4c4;
  padding-left: 16px;
  margin-top: 16px;
`;
export const TitleContents = styled.div`
  width: 996px;
  height: 652px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Title2 = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #c4c4c4;
  margin-top: 16px;
`;
export const Neyoung = styled.div`
  margin-top: 40px;
`;

export const Content = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding-top: 16px;
  border: 1px solid #c4c4c4;
`;
export const Adress = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const AdressSearchBox = styled.div`
  display: flex;
`;

export const AdressNumber = styled.div`
  width: 77px;
  height: 52px;
  border: 1px solid #c4c4c4;
  margin-top: 16px;
`;
export const AdressButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  margin-left: 16px;
  margin-top: 16px;
`;
export const DetailAdress1 = styled.div`
  width: 996px;
  height: 52px;
  border: 1px solid #c4c4c4;
  margin-top: 16px;
`;
export const DetailAdress2 = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #c4c4c4;
  margin-top: 16px;
`;
export const Youtube = styled.div`
  margin-top: 37px;
`;

export const YoutubeLink = styled.input`
  width: 996px;
  height: 45.78px;
  padding-left: 16px;
  border: 1px solid #c4c4c4;
  margin-top: 15px;
  margin-bottom: 40px;
`;
export const GetPhoto = styled.div`
  width: 282px;
  height: 78px;
  display: flex;
  justify-content: space-between;
  margin-right: 715px;
  margin-top: 16px;
`;

export const Photo = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #bdbdbd;
`;
export const MainSetting = styled.div`
  width: 159px;
  height: 64px;
  margin-right: 840px;
  margin-top: 40px;
`;
export const Confirm = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  cursor: ${(props) => (props.buttonColor ? "pointer" : "default")};
  background-color: ${(props) =>
    props.buttonColor === true ? "#FFD600" : "grey"};
`;
export const Option = styled.div`
  width: 159px;
  height: 24px;
  margin-top: 16px;
`;

export const ErrorMessage = styled.div`
  margin-top: 10px;
  color: red;
`;

export const Cancle = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background-color: grey;
  margin-right: 24px;
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 80px;
`;

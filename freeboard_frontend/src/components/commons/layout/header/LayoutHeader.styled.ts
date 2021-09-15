import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  background-color: red;
  height: 400px;
  width: 1920px;
  /* font-family: "myfont"; //글로벌스타일에서 적용한 폰트 */
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
`;

export const ImageWrapper = styled(Slider)`
  .slick-list {
    width: 1000px;
  }
`;

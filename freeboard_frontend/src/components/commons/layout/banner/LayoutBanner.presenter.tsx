import { Image, Wrapper } from "./LayoutBanner.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
};

export default function LayoutBannerUI() {
  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          <div>
            <Image src="/images/spring.png" />
          </div>
          <div>
            <Image src="/images/summer.png" />
          </div>
          <div>
            <Image src="/images/fall.png" />
          </div>
          <div>
            <Image src="/images/winter.png" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}

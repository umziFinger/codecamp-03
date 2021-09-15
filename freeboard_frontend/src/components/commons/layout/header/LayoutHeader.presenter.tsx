import { Image, ImageWrapper, Wrapper } from "./LayoutHeader.styled";
import Slider from "react-slick";
// import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutHeaderUI() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          <div>
            <ImageWrapper>
              <Image src="/images/풀때기.png" />
            </ImageWrapper>
          </div>
          <div>
            <h3>
              <Image src="/images/핸드폰.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Image src="/images/화로.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Image src="/images/발표.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Image src="/images/풀때기.png" />
            </h3>
          </div>
          <div>
            <h3>
              <Image src="/images/풀때기.png" />
            </h3>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}

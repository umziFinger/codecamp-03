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
            <Image src="https://www.rihgaroyalgran-okinawa.co.jp/kr/dining/img/bar/ph_01.jpg" />
          </div>
          <div>
            <Image src="https://menu.mt.co.kr/moneyweek/thumb/2021/07/19/06/2021071914588074820_1.jpg" />
          </div>
          <div>
            <Image src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002070/img/ko/a0002070_parts_5ad9770e2e171.jpg?20201222154846&q=80&rw=686&rh=490" />
          </div>
          <div>
            <Image src="https://mongqiza.com/data/file/budongsan_06_toji/thumb-978202226_lBSPg3jf_dc4d963463a47b2245a09f93cc95cf45195ed73b_600x354.png" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}

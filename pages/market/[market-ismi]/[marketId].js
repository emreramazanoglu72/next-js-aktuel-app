import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Header from "../../../components/Header";
import { getProductDetail } from "../../../Service";

const MarketId = ({ image, title, market }) => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",

    slidesToShow: 2,
    arrows: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
return (
    <div>
      <Header title={`${market} - ${title}`} />
      <Slider {...settings}>
        {image?.map((item) => (
          <Image src={item} width={1000} height={1500} />
        ))}
      </Slider>
    </div>
  );
};

MarketId.getInitialProps = async (ctx) => {
  const { marketId } = ctx.query;
  return await getProductDetail(marketId);
};

export default MarketId;

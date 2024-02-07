import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

function CarouselBanner() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img src={banner1} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={banner2} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;

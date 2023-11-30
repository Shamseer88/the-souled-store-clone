import { slideImages } from "../../../assets/MenSlides/MenSlides.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./MenSlide.css";

export default function MenSlide() {
  return (
    <div className="carousal-div">
      <Carousel showThumbs={false} showStatus={false}>
        {slideImages.map((slide) => (
          <img key={slide.id} src={slide.img} />
        ))}
      </Carousel>
    </div>
  );
}

import { slideImages } from "../../../assets/WomenSlides/WomenSlides.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../MenSlide/MenSlide.css";

export default function WomenSlide() {
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

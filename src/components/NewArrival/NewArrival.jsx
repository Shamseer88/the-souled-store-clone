import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./NewArrival.css";
import ProducrCard from "../ProductCard/ProducrCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1880 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1880, min: 1400 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1400, min: 1000 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 1000, min: 750 },
    items: 3,
  },
  mobileSmall: {
    breakpoint: { max: 750, min: 0 },
    items: 2,
  },
};
export default function NewArrival({ newArrivalProducts }) {
  return (
    <div className="new-arrival">
      <h3>NEW ARRIVAL</h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={2000}
      >
        {newArrivalProducts.map((product) => (
          <ProducrCard key={product._id} product={product} />
        ))}
      </Carousel>
    </div>
  );
}

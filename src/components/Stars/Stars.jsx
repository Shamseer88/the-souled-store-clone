import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Stars.css";

export default function Stars({ stars }) {
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;
    return (
      <span key={index} className="star-span">
        {stars >= index + 1 ? (
          <FaStar color="#117a7a" />
        ) : stars >= number ? (
          <FaStarHalfAlt color="#117a7a" />
        ) : (
          <AiOutlineStar color="#117a7a" />
        )}
      </span>
    );
  });
  return <>{ratingStar}</>;
}

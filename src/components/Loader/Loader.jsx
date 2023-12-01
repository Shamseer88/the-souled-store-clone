import "./Loader.css";
import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e11b23", "#ed2d2f", "#58595b", "#282c3f", "#117a7a"]}
      />
    </div>
  );
}

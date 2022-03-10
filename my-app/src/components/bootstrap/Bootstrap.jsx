import Accordion from "./Accordion";
import { accordionData, carouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";

const Bootstrap = () => {
  return (
    <div>
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={[{ title: "HIhi", content: "ASDFasdfdf" }]} />
      <Dropdown />
      <Carousel data={carouselData} />
    </div>
  );
};

export default Bootstrap;

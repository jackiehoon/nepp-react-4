import Accordion from "./Accordion";
import { accordionData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";

const Bootstrap = () => {
  return (
    <div>
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={[{ title: "HIhi", content: "ASDFasdfdf" }]} />
      <Dropdown />
    </div>
  );
};

export default Bootstrap;

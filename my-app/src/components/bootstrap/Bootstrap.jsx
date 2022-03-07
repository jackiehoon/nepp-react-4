import Accordion from "./Accordion";
import { accordionData } from "../../datas/bootstrap";

const Bootstrap = () => {
  return (
    <div>
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={[{ title: "HIhi", content: "ASDFasdfdf" }]} />
    </div>
  );
};

export default Bootstrap;

import { useState } from "react";
import Accordion from "./Accordion";
import { accordionData, carouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import Modal from "./Modal";
import ModalNickName from "./ModalNickName";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalNickName, setShowModalNickName] = useState(false);
  const [name, setName] = useState("홍길동");
  const [nickName, setNickName] = useState("별명");

  const onClose = () => {
    setShowModal(false);
  };
  const onChange = (text) => {
    setName(text);
  };

  return (
    <div>
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={[{ title: "HIhi", content: "ASDFasdfdf" }]} />
      <Dropdown />
      <Carousel data={carouselData} />

      <h2>
        이름 : {name}
        <button onClick={() => setShowModal(true)}>이름 바꾸기</button>
      </h2>

      <h2>
        닉네임 : {nickName}
        <button onClick={() => setShowModalNickName(true)}>
          닉네임 바꾸기
        </button>
      </h2>

      {showModal && <Modal name={name} onClose={onClose} onChange={onChange} />}
      {showModalNickName && (
        <ModalNickName
          nickName={nickName}
          onClose={() => setShowModalNickName(false)}
          onChange={(text) => setNickName(text)}
        />
      )}
    </div>
  );
};

export default Bootstrap;

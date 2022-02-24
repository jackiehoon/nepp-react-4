import { useState, useEffect } from "react";
const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("마운트 될 때만 실행됩니다.");
    return () => {
      console.log("컴포넌트 제거됨");
    };
  }, []);

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({
      name,
      nickname,
    });
    return () => {
      console.log("clean up");
      console.log(nickname);
    };
  }, [nickname]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  return (
    <>
      <input value={name} onChange={handleChangeName} />
      <input value={nickname} onChange={handleChangeNickName} />
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickname}</h1>
    </>
  );
};

export default Info;

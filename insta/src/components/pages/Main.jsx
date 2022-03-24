import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/user";

const Main = () => {
  const { isLogin } = useContext(UserContext);

  return (
    <h1>
      {isLogin ? "로그인 됨!" : "로그인 안됨"}
      <Link to="/login">로그인</Link>
      <Link to="/logout">로그아웃</Link>
    </h1>
  );
};

export default Main;

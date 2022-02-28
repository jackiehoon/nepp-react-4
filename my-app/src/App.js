import { useState } from "react";
import Info from "./components/StyledComponent";
import "./App.scss";
import styles from "./index.module.css";

function App() {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <>
      <div className={styles.big}>
        큰 글자
        <button onClick={() => setShowInfo(true)}>Info 나오기</button>
        <button onClick={() => setShowInfo(false)}>Info 제거하기</button>
      </div>
      {showInfo && <Info />}
    </>
  );
}

export default App;

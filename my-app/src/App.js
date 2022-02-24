import { useState } from "react";
import Info from "./components/Info";

function App() {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setShowInfo(true)}>Info 나오기</button>
        <button onClick={() => setShowInfo(false)}>Info 제거하기</button>
      </div>
      {showInfo && <Info />}
    </>
  );
}

export default App;

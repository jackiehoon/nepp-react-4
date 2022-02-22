function App() {
  const name = "리액트";
  // if (name === "리액트") {
  //   return (<h1>리액트입니다.</h1>)
  // }else{
  //   return <h2>리액트가 아닙니다</h2>
  // }

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>

      {name === "리액트~" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다</h2>}
      {name === "리액트~" && <h1>리액트 입니다.</h1>}
      {name || <h1>name 값이 없습니다</h1>}

      <div style={style} className="name">
        {name}
      </div>
      <br />
      <input />
    </>
  );
}

export default App;

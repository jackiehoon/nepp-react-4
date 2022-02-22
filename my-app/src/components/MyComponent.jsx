const MyComponent = ({ name2, name, children }) => {
  //   const { name2, name, children } = props;
  return (
    <div>
      {name2}안녕하세요, 제 이름은 {name}
      <div>{children}</div>
    </div>
  );
};

export default MyComponent;

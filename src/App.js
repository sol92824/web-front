import Select from "./Components/Select";

const select1 = [
  { val: 1, content: "내용1" },
  { val: 2, content: "내용2" },
];
function App() {
  return (
    <>
      <Select content={select1} />
    </>
  );
}

export default App;

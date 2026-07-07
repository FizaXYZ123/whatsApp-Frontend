import Left from "./components/left/Left";
import Right from "./components/right/Right";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Left />
      <Right />
    </div>
  );
}

export default App;
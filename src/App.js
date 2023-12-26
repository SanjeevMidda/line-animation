import "./index.css";
import Line from "./components/Line";

function App() {
  return (
    <div className="App">
      {/* <div className="circle"></div> */}
      <h1>LINES</h1>
      <Line color="blue" index={100} />
      <Line color="pink" delay={2} direction="reverse" index={9} />
      <Line
        color="green"
        delay={3}
        direction="reverse"
        duration={2}
        index={8}
      />
      <Line color="purple" delay={5} duration={2} index={7} />
      <Line
        color="silver"
        delay={6}
        direction="reverse"
        duration={3}
        index={6}
      />
    </div>
  );
}

export default App;

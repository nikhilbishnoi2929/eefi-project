import "./App.css";
import Amplify from "./components/Amplify";
import Building from "./components/Building";
import BottomToTop from "./components/common/BottomToTop";
import Roadmap from "./components/Roadmap";
import Theory from "./components/Theory";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      <Building />
      <Amplify />
      <Roadmap />
      <Theory />
      <BottomToTop />
    </div>
  );
}
export default App;

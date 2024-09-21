import "./App.css";
import Amplify from "./components/Amplify";
import Building from "./components/Building";
import BottomToTop from "./components/BottomToTop";
import Roadmap from "./components/Roadmap";
import Theory from "./components/Theory";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      <Building />
      <Amplify />
      <Roadmap />
      <Theory />
      <BottomToTop />
      <PreLoader />
    </div>
  );
}
export default App;

import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
AOS.init();

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
export default App;

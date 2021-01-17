import Header from "./Header";
import Footer from "./Footer";
import Branches from "../containers/Branches";

import "../css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Branches />
      <Footer />
    </div>
  );
}

export default App;

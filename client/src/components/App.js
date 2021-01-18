import Header from "./Header";
import Footer from "./Footer";
import Branches from "../containers/Branches";
import AddBranch from "./AddBranch";

import "../css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Branches />
      <AddBranch />
      <Footer />
    </div>
  );
}

export default App;

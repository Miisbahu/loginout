import { BrowserRouter } from "react-router-dom";
import Pages from "./routes/routes";
import Header from "./component/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Pages />
    </BrowserRouter>
  );
}

export default App;

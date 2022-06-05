import { BrowserRouter as Router } from "react-router-dom";
import RoutePages from "./components/RoutePages/routePages";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
function App() {
  return (
    <Router>
      <RoutePages />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;

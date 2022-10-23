import {Routes, Route} from "react-router-dom";
// import {Switch} from "react";
import Home from "./components/Home/Home";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import NotFound from "./components/NotFound/NotFound";
import List from "./components/List/List";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />

          {/* <Route path="/list" element={<List />} /> */}
          <Route path="/list/:listId" element={<List />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;

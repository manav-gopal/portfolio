import * as React from "react";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import AnimateCursor from "./components/AnimatedCursor/AnimatedCursor";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <div className="App">
      <AnimateCursor />
      <ChakraBaseProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </Router>
      </ChakraBaseProvider>
    </div>
  );
}

export default App;

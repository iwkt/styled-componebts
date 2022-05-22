import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import React from "react";
import StyledButton from "./components/Button/Button";
import {
  FancyButton,
  SubmitButton,
  DarkButton,
} from "./components/Button/Button";
import { AnimatedLogo } from "./components/Button/Button.styles";
import { Teste } from "./components/test";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="log" /> */}
        <AnimatedLogo src={logo} />
        {/* <button>Button</button> */}
        <dir>
          <br />
        </dir>
        <StyledButton>Style Button</StyledButton>
        <dir>
          <br />
        </dir>
        <StyledButton variant="outline">Style Button</StyledButton>
        <dir>
          <br />
        </dir>
        <FancyButton>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>DarkButton</DarkButton>
        <div>
          <br />
        </div>
        <Teste color="red" size="5rem">
          push
        </Teste>
      </div>
    </ThemeProvider>
  );
}

export default App;

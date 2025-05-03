import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./utils/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeContext } from "@emotion/react";
const Root = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <App />
    </StyledThemeProvider>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

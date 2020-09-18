import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
.App {
  min-height: 100vh;
}

body {
  box-shadow: ${({ theme }) => theme.shader};
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;
  font-family: Montserrat;
  font-size: 18px;
  letter-spacing: 0.12ch;
  line-height: 2.8ch;
  margin: 0px;
  padding: 0px;
}

h1 {
  font-family: Nunito;
  font-weight: 600;
  letter-spacing: 0.25ch;
  font-size: 48px;
  line-height: 90%;
}

button {
  background-color: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.body};
  border-radius: 8px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.25ch;
  width: 80%;
  min-width: 300px;
  height: 64px;
  border: none;
}

button:hover {
  cursor: pointer;
}

h4 {
  color: #b6b6b6;
}
a {
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
}
li > a {
  font-family: Nunito;
  letter-spacing: 0.4ch;
  font-weight: 400;
  font-size: 14px;
}

ul {
  list-style: none;
}

li{
  list-style: none;
}

.layout-container {
  padding-top: 32px;
  max-width: 1600px;
  margin: auto;
}

@media (max-width: 768px) {
  .layout-container {
    width: 95%;
    box-sizing: border-box;
  }

  h1 {
    font-size: 32px;
    text-align: center;
  }

  button {
    width: 80%;
  }

  body {
    text-align: center;
  }
}

  `;

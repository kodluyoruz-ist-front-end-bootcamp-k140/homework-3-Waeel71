import "./App.css";
import { RenderBody } from "./Todo";
import { Postlar } from "./Post/post";
import React, { useContext, useEffect, useState } from "react";
import { themes } from "./theme";

function App() {
  const [themeState, setThemeState] = useState(themes.light);
  const [context, setContext] = useState(React.createContext(themes.light));
  const theme = useContext(context);
  const DarkTheme = () => {
    setContext(React.createContext(themes.dark));
    setThemeState(themes.dark);
  };
  const LightTheme = () => {
    setContext(React.createContext(themes.light));
    setThemeState(themes.light);
  };
  useEffect(() => {
    <context.Provider value={themeState}>
      {(document.body.style.backgroundColor = theme.background)}
      {document.querySelector("#postTable").style.color = theme.foreground}
      {document.querySelector("#todoTable").style.color = theme.foreground}
    </context.Provider>;
  });
  return (
    <div className="container">
      <button onClick={todoYukle} className="btn btn-primary button">
        Todo Yükle
      </button>
      <button onClick={postYukle} className="btn btn-info button">
        Post Yükle
      </button>

      <button onClick={LightTheme} className="btn btn-light button">
        light theme
      </button>

      <button onClick={DarkTheme} className="btn btn-dark button">
        dark theme
      </button>
      <RenderBody url="https://jsonplaceholder.typicode.com/todos" />
      <Postlar url="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
}
// todo yukle
function todoYukle() {
  document.querySelector("#todoTable").hidden = false;
  document.querySelector("#postTable").hidden = true;
} // todo yukle sonu

//post yukle
function postYukle() {
  document.querySelector("#todoTable").hidden = true;
  document.querySelector("#postTable").hidden = false;
} // post yukle sonu
export default App;

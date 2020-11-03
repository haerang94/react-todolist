import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "components/TodoTemplate";
import TodoHead from "components/TodoHead";
import TodoList from "components/TodoList";
import TodoCreate from "components/TodoCreate";
import { TodoProvider } from "TodoContext";
const GlobalStyle = createGlobalStyle`
body{
  background:#eee;
}
`;

const App = () => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
};

export default App;

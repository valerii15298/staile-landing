import type { Component } from "solid-js";
import logo from "./assets/favicon.svg";

const App: Component = () => {
  return (
    <>
      <header class="m-5 flex items-center gap-2 text-staile text-3xl font-bold">
        <img src={logo} alt="STAILE logo" class="max-w-20" />
        STAILE
      </header>
    </>
  );
};

export default App;

import type { Component } from "solid-js";
import logo from "./assets/favicon.svg";
import { MainList } from "./MainList";

const App: Component = () => {
  return (
    <>
      <header class="m-10 flex items-center gap-2 text-staile text-3xl font-bold">
        <img src={logo} alt="STAILE logo" class="max-w-20" />
        STAILE
      </header>
      <main class="my-auto md:max-w-[75%] text-balance">
        <section class="md:ml-28 mx-10">
          <h2 class="my-5 font-inter text-6xl font-extrabold text-staile">
            Знайди свій ідеальний образ за декілька кліків!
          </h2>
          <p class="font-mulish my-5 text-2xl">
            Твій онлайн-помічник, який враховує те, що ти хочеш, для зручного
            пошуку одягу
          </p>
          <button class="my-5 bg-white rounded-3xl p-4 font-extrabold text-2xl">
            Завантажити додаток
          </button>
          <MainList />
        </section>
      </main>
    </>
  );
};

export default App;

import type { Component } from "solid-js";
import logo from "./assets/favicon.svg";
import iphone13Icon from "./assets/iphone13.png";
import looperIcon from "./assets/looper.svg";
import { MainList } from "./MainList";

const App: Component = () => {
  return (
    <>
      <div class="flex flex-col h-full w-fit z-30">
        <header class="m-10 flex items-center gap-2 text-staile text-3xl font-bold">
          <img src={logo} alt="STAILE logo" class="max-w-20" />
          STAILE
        </header>
        <main class="my-auto text-balance">
          <section class="xl:ml-28 mx-10">
            <h2 class="my-5 font-inter text-6xl font-extrabold text-staile">
              Знайди свій ідеальний образ за декілька кліків!
            </h2>
            <p class="font-mulish my-5 text-2xl">
              Твій онлайн-помічник, який враховує те, що ти хочеш, для зручного
              пошуку одягу
            </p>
            <button class="my-5 bg-white md:bg-blue-700 lg:bg-red-800 xl:bg-orange-500 2xl:bg-lime-600 rounded-3xl p-4 font-extrabold text-2xl">
              Завантажити додаток
            </button>
            <MainList />
          </section>
        </main>
      </div>

      <div class="w-0 my-auto">
        <img class="min-w-[800px] -ml-96" src={looperIcon} />
      </div>
      <img
        class="-mr-52 xl:-mr-30 2xl:-mr-0 mt-10 max-h-[800px] min-w-fit -ml-12 lg:my-auto z-20"
        src={iphone13Icon}
      />
    </>
  );
};

export default App;

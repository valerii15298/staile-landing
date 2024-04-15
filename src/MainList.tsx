import searchIcon from "./assets/search.png";
import heartIcon from "./assets/heart.png";
import cartIcon from "./assets/cart.png";

export function MainList() {
  return (
    <section class="my-5 font-philosopher -lg:w-0">
      <div class="-md:w-[calc(100vw-5rem)] -lg:w-[calc(50vw)] my-5 text-2xl flex items-center gap-3">
        <img src={searchIcon} class="max-w-10" />
        <div>Знайдемо одяг, який відповідає твоїм побажанням</div>
      </div>
      <div class="-lg:w-[calc(100vw-5rem)] my-5 text-2xl flex items-center gap-3">
        <img src={cartIcon} class="max-w-10" />
        <div>Порівняємо ціни та запропонуємо найвигідніші пропозиції</div>
      </div>
      <div class="-lg:w-[calc(100vw-5rem)] my-5 text-2xl flex items-center gap-3">
        <img src={heartIcon} class="max-w-10" />
        <div>Збережемо твої улюблені речі та історію пошуку</div>
      </div>
    </section>
  );
}

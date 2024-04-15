import searchIcon from "./assets/search.png";
import heartIcon from "./assets/heart.png";
import cartIcon from "./assets/cart.png";

const mainListContent = [
  { icon: searchIcon, text: "Знайдемо одяг, який відповідає твоїм побажанням" },
  {
    icon: cartIcon,
    text: "Порівняємо ціни та запропонуємо найвигідніші пропозиції",
  },
  { icon: heartIcon, text: "Збережемо твої улюблені речі та історію пошуку" },
];

export function MainList() {
  return (
    <section class="my-5 font-philosopher">
      {mainListContent.map(({ icon, text }) => (
        <div class="my-5 text-2xl flex items-center gap-3">
          <img src={icon} class="max-w-10" />
          <div>{text}</div>
        </div>
      ))}
    </section>
  );
}

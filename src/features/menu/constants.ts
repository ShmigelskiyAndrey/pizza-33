import { Product } from "@/shared/types/types";

export const MENU: Product[] = [
  {
    id: 1,
    category: "pizza",
    ispizza: true,
    title: "С ананасом",
    description:
      "Томатный соус, ананас, грецкие орехи, брокколи, ветчина, томаты черри, моцарелла",
    size: "33 см",
    price: 500,
    photo: "pizzaPinapple.png",
  },

  {
    id: 2,
    category: "pizza",
    ispizza: true,
    title: "С тыквой",
    description:
      "Томатный соус, тыква, томаты черри, красный лук, мясной фарш, моцарелла",
    size: "33 см",
    price: 500,
    photo: "pizzaPumpkin.png",
  },

  {
    id: 3,
    category: "pizza",
    ispizza: true,
    title: "С пармской ветчиной",
    description:
      "Сливочный соус, пармская ветчина, томаты черри, груша, руккола, моцарелла",
    size: "33 см",
    price: 500,
    photo: "pizzaHam.png",
  },

  {
    id: 4,
    category: "pizza",
    ispizza: true,
    title: "Морская",
    description:
      "Томатный соус, креветки, мидии, грецкие орехи, морские водоросли, моцарелла",
    size: "33 см",
    price: 500,
    photo: "pizzaSea.png",
  },

  {
    id: 5,
    category: "pizza",
    ispizza: true,
    title: "Пепперони",
    description: "Томатный соус, салями, красный перец чилли, моцарелла",
    size: "33 см",
    price: 500,
    photo: "pizzaPeperoni.png",
  },

  {
    id: 6,
    category: "pizza",
    ispizza: true,
    title: "4 сыра",
    description:
      "Томатный соус, маасдам, моцарелла, пармезан, дорблю с голубой плесенью",
    size: "33 см",
    price: 500,
    photo: "pizzCheese.png",
  },

  {
    id: 7,
    category: "drink",
    ispizza: false,
    title: "Лимонад Вишня",
    size: "250 мл",
    price: 100,
    photo: "bottleCherry.png",
  },

  {
    id: 8,
    category: "drink",
    ispizza: false,
    title: "Лимонад Цитрус/Пихта",
    size: "250 мл",
    price: 100,
    photo: "bottleOrange.png",
  },

  {
    id: 9,
    category: "drink",
    ispizza: false,
    title: "Лимонад Эстрагон",
    size: "250 мл",
    price: 100,
    photo: "bottleEstragon.png",
  },
];

interface Filter {
  title: string;
  filter: string;
}

export const FILTERS: Filter[] = [
  { title: "Все товары", filter: "" },
  {
    title: "Пиццы",
    filter: "pizza",
  },
  {
    title: "Напитки",
    filter: "drink",
  },
];

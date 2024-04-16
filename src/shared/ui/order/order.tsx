import styles from "./order.module.scss";
import { Ordercard } from "../ordercard/ordercard";
import Image from "next/image";
import { Shantell_Sans } from "next/font/google";
import { cn } from "@/shared/lib/classNames";
import { useAppSelector, useAppDispatch } from "@/shared/lib/redux";
import {
  selectOrderedProducts,
  selectTotalPrice,
} from "@/features/menu/model/selectors";
import { increment, decrement, kick } from "@/features/menu/model/orderSlice";
import { useState } from "react";
import Link from "next/link";
import { LineIcon } from "../icons/LineIcon";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const deliveryPrice = 100;

const Order = () => {
  const titleClass = cn(shantellSans.className, styles.title);
  const data = useAppSelector(selectOrderedProducts);
  const totalPrice = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();
  const [deliveryOption, setDeliveryOption] = useState(true);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={titleClass}>Корзина</div>

          <button className={styles.backbtn}>
            <Link href="/">Вернуться на главную</Link>
          </button>

          <Image
            className={styles.closeicon}
            src="/icons/closebutton.svg"
            width={26}
            height={26}
            alt="close button"
          />
        </div>
        <div className={styles.lineBlock}>
          <LineIcon className={styles.line}></LineIcon>
        </div>

        <div className={styles.content}>
          <div className={styles.products}>
            {data.map((item) => (
              <Ordercard
                key={item.id}
                photo={item.photo}
                title={item.title}
                description={item.description}
                size={item.size}
                price={item.price}
                count={item.count}
                onIncrement={() => {
                  dispatch(increment(item.id));
                }}
                onDecrement={() => {
                  dispatch(decrement(item.id));
                }}
                onKick={() => {
                  dispatch(kick(item.id));
                }}
              />
            ))}
          </div>
          <div className={styles.delivery}>
            <div className={styles.subtitle}>Доставка</div>
            <fieldset className={styles.options}>
              <div
                className={styles.firstradio}
                onClick={() => setDeliveryOption(false)}
              >
                <label htmlFor="pickup" className={styles.label}>
                  Самовывоз
                </label>
                <input
                  type="radio"
                  id="pickup"
                  name="deliverymethod"
                  value="pickup"
                  className={styles.radiobtn}
                />
              </div>
              <div
                className={styles.secondradio}
                onClick={() => setDeliveryOption(true)}
              >
                <label htmlFor="delivery" className={styles.label}>
                  Доставка на дом
                </label>
                <input
                  type="radio"
                  id="delivery"
                  name="deliverymethod"
                  value="delivery"
                  className={styles.radiobtn}
                  defaultChecked
                />
              </div>
            </fieldset>
            <div className={styles.fields}>
              <input
                id="name"
                name="name"
                placeholder="Имя"
                className={styles.input}
              ></input>
              <input
                id="phonenumber"
                name="phonenumber"
                placeholder="Номер телефона"
                className={styles.input}
              ></input>
              <input
                id="address"
                name="address"
                placeholder="Улица, дом, квартира"
                className={styles.input}
              ></input>
              <textarea
                id="comment"
                name="comment"
                placeholder="Коментарий"
                className={styles.textarea}
              ></textarea>
            </div>
            <div className={styles.order}>
              <button className={styles.orderbtn}>Заказать</button>
              <div className={styles.orderdetails}>
                <div className={styles.totalprice}>
                  <div className={styles.totaltitle}>К оплате: </div>
                  <div className={styles.totalsum}>
                    {deliveryOption ? totalPrice + deliveryPrice : totalPrice}{" "}
                    руб
                  </div>
                </div>
                <div className={styles.productsprice}>
                  Заказ: {totalPrice} руб
                </div>
                <div className={styles.deliveryprice}>
                  Доставка: {deliveryOption ? deliveryPrice : "0"} руб
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Order };

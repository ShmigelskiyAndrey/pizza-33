import styles from "./order.module.scss";
import { Ordercard } from "../ordercard/ordercard";
import Image from "next/image";
import { Shantell_Sans } from "next/font/google";
import { cn } from "@/shared/lib/classNames";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Order = () => {
  const titleClass = cn(shantellSans.className, styles.title);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={titleClass}>Корзина</div>
          <button className={styles.backbtn}>Вернуться на главную</button>
          <Image
            className={styles.closeicon}
            src="/icons/closebutton.svg"
            width={26}
            height={26}
            alt="close button"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.products}>
            <Ordercard></Ordercard>
            <Ordercard></Ordercard>
          </div>
          <div className={styles.delivery}>
            <div className={styles.subtitle}>Доставка</div>
            <fieldset className={styles.options}>
              <div className={styles.firstradio}>
                <label htmlFor="pickup" className={styles.label}>
                  Самовывоз
                </label>
                <input
                  type="radio"
                  id="pickup"
                  name="deliverymethod"
                  value="pickup"
                  className={styles.radiobtn}
                  defaultChecked
                />
              </div>
              <div className={styles.secondradio}>
                <label htmlFor="delivery" className={styles.label}>
                  Доставка на дом
                </label>
                <input
                  type="radio"
                  id="delivery"
                  name="deliverymethod"
                  value="delivery"
                  className={styles.radiobtn}
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
                  <div className={styles.totalsum}>500 руб</div>
                </div>
                <div className={styles.productsprice}>Заказ: 400 руб</div>
                <div className={styles.deliveryprice}>Доставка: 100 руб</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Order };

import styles from "./order.module.scss";
import { Ordercard } from "../ordercard/ordercard";

const Order = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.title}>Корзина</div>
          <button className={styles.backbtn}>Вернуться на главную</button>
        </div>
        <div className={styles.content}>
          <div className={styles.products}>
            <Ordercard></Ordercard>
            <Ordercard></Ordercard>
          </div>
          <div className={styles.delivery}>
            <div className={styles.subtitle}>Доставка</div>
            <div className={styles.options}>
              <div>
                <input
                  type="radio"
                  id="pickup"
                  name="deliverymethod"
                  value="pickup"
                />
                <label htmlFor="take">take</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="delivery"
                  name="deliverymethod"
                  value="delivery"
                />
                <label htmlFor="delivery">delivery</label>
              </div>
            </div>
            <div className={styles.textarea}>
              <textarea id="name" name="name" placeholder="Имя"></textarea>
              <textarea
                id="phonenumber"
                name="phonenumber"
                placeholder="Номер телефона"
              ></textarea>
              <textarea
                id="address"
                name="address"
                placeholder="Улица, дом, квартира"
              ></textarea>
              <textarea
                id="comment"
                name="comment"
                placeholder="Коментарий"
              ></textarea>
            </div>
            <div className={styles.order}>
              <button className={styles.orderbtn}>Заказать</button>
              <div className={styles.orderdetails}>
                <div className={styles.totalprice}>К оплате: 500 руб</div>
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

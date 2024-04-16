import styles from "./product.module.scss";
import { Header } from "../header/header";
import Image from "next/image";
import { cn } from "@/shared/lib/classNames";
import { Shantell_Sans } from "next/font/google";
import { TomatoIcon } from "../icons/TomatoIcon";
import { OnionIcon } from "../icons/OnionIcon";
import { CarrotIcon } from "../icons/CarrotIcon";
import { selectChosenProduct } from "@/features/menu/model/selectors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { useParams } from "next/navigation";
import { add } from "@/features/menu/model/orderSlice";
import Link from "next/link";
import { CurvedLineIcon } from "../icons/CurvedLine";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Product = () => {
  const titleClass = cn(shantellSans.className, styles.title);
  const { id } = useParams<{ id: string }>();
  const selectedItem = useAppSelector(selectChosenProduct(Number(id)));
  const dispatch = useAppDispatch();
  return (
    <>
      <Header ismainpage={false} isMainPageSelected={true}></Header>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={titleClass}>{selectedItem?.title}</div>
          <CurvedLineIcon className={styles.line}></CurvedLineIcon>
          <Image
            className={styles.image}
            src={`/photo/${selectedItem?.photo}`}
            width={568}
            height={568}
            alt="photo of pizza"
          />
        </div>
        <div className={styles.description}>
          <div className={styles.composition}>{selectedItem?.description}</div>
          <div className={styles.feature}>
            <div className={styles.weight}>
              {selectedItem?.ispizza ? "Вес: 425 г" : ""}
            </div>
            <div className={styles.bju}>
              {selectedItem?.ispizza ? "КБЖУ на 100 г: 160/8/5.5/19" : ""}
            </div>
            <div className={styles.size}>
              {selectedItem?.ispizza
                ? selectedItem?.size
                : `объем: ${selectedItem?.size}`}
            </div>
          </div>
          <div className={styles.price}>{selectedItem?.price} руб</div>
          <Link href="/#menu">
            <button
              className={styles.button}
              onClick={() => {
                if (selectedItem?.id) dispatch(add(selectedItem));
              }}
            >
              В корзину
            </button>
          </Link>
        </div>
        <div className={styles.backgroungImages}>
          <TomatoIcon className={styles.tomato}></TomatoIcon>
          <OnionIcon className={styles.onion}></OnionIcon>
          <CarrotIcon className={styles.carrot}></CarrotIcon>
          <CarrotIcon className={styles.carrot2}></CarrotIcon>
        </div>
      </div>
    </>
  );
};

export { Product };

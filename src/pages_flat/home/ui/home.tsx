import { cn } from "@/shared/lib/classNames";
import styles from "./home.module.scss";

const Home = () => {
    const classNames = cn(styles.container);

    return <div className={classNames}>Home Page</div>
}

export {Home}
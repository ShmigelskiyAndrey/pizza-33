import { Firstblock } from "../../../shared/ui/firstblock/firstblock";
import { Footer } from "../../../shared/ui/footer/footer";
import { Menu } from "../../../features/menu/menu";
import { Promo } from "../../../shared/ui/promo/promo";

const Home = () => {
  return (
    <div className="container">
      <Firstblock></Firstblock>
      <Menu></Menu>
      <Promo></Promo>
      <Footer></Footer>
    </div>
  );
};

export { Home };

// 300-800
// 800-1200
// 1200+

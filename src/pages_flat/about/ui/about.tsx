import { Aboutfirstblock } from "@/shared/ui/aboutfirstblock/aboutfirstblock";
import { Aboutsecondblock } from "@/shared/ui/aboutsecondblock/aboutsecondblock";
import { Footer } from "@/shared/ui/footer/footer";

const About = () => {
  return (
    <div className="container">
      <Aboutfirstblock></Aboutfirstblock>
      <Aboutsecondblock></Aboutsecondblock>
      <Footer></Footer>
    </div>
  );
};

export { About };

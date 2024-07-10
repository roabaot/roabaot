import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
  Portfolio,
} from "./components";
import Langs from "./components/Langs";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.flexStart} h-[calc(100vh-80px)] md:py-20 py-0`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Langs />
          <Portfolio />
          {/* <Stats /> */}
          {/* <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

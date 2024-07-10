import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-full h-full relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-5">
        <div className="relative cursor-pointer">
          <img
            src={apple}
            alt="apple"
            className="w-[128px] h-[42px] z-[5] object-contain"
          />
          <div className="absolute left-0 top-0 h-full z-0 w-full shadow-[0_0_75px_1px_#ffffff40] animate-pulse" />
        </div>
        <div className="relative cursor-pointer">
          <img
            src={google}
            alt="google"
            className="w-[128px] h-[42px] z-[5] object-contain"
          />
          <div className="absolute left-0 top-0 h-full z-0 w-full shadow-[0_0_75px_1px_#ffffff40] animate-pulse" />
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
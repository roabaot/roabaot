import styles from "../style";
import { man } from "../assets";
import GetStarted from "./GetStarted";
import { linkedin, github } from "../assets/index";

const Hero = () => (
  <section
    id="home"
    className={`flex lg:flex-row md:flex-col-reverse sm:flex-row flex-col-reverse gap-6 ${styles.paddingLanding}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For {" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div> */}

      <div className="w-full">
        <h1 className="flex-1 font-poppins font-semibold lg:text-[52px] ss:text-[28px] text-[32px] text-white">
          Hi, My Name is <br className="sm:block" />
          <span className="text-gradient">Ahmed Alakbari</span>{" "}
        </h1>

        {/* <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div> */}
      </div>

      {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I’m a frontend developer with 5 years of experience using React, Vue and
        Nuxt. with building responsive and optimized sites
      </p>
      <div className="flex gap-3 item-center mt-3">
        <button className="bg-sky-800 text-white rounded-lg px-3 py-1 flex items-center gap-1.5 hover:scale-105 active:scale-110 transition duration-500 ease-in-out">
          <img src={linkedin} alt="linkedin" />
          <span>LinkedIn</span>
        </button>
        <button className="bg-gray-800 text-white rounded-lg px-3 py-1 flex items-center gap-1.5 hover:scale-105 active:scale-110 transition duration-500 ease-in-out">
          <img src={github} alt="github" height="26px" width="26px" />
          <span>Githup</span>
        </button>
      </div>
    </div>

    <div className={`relative flex flex-1 ${styles.flexCenter}`}>
      <img
        src={man}
        alt="robot"
        className="w-[100%] lg:h-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient animate-pulse"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient animate-pulse"></div>
    </div>

    {/* <div className={`ss:hidden ${styles.flexStart}`}>
      <GetStarted />
    </div> */}
  </section>
);

export default Hero;

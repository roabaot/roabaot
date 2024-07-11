import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} sm:pt-16 sm:pb-8 py-6 flex-col`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2024 Ahmed Al-Akbari. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;

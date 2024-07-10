const LangCard = ({ title, img }) => (
  <div className="flex justify-between items-center flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={img}
      alt="double_quotes"
      className="w-[124px] h-[124px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white mt-10">
      {title}
    </p>
  </div>
);

export default LangCard;

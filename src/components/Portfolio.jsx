import { projects } from "../constants";
import styles from "../style";

const Portfolio = () => {
  return (
    <section className={`${styles.marginY}`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>Portfolio</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need it Here! <br /> you will find delivered projects
            and completed templates.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 ss:gap-8 gap-4 bg-black-gradient-2 rounded-[20px] box-shadow p-8">
        {projects.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            className="card-project p-4 cursor-pointer hover:scale-105 active:scale-110 transition ease-in-out duration-500"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[300px]"
              />
            </div>
            <div>
              <h1 className="mt-4 text-white font-semibold font-sans text-[20px]">
                {card.title}
              </h1>
              <p className="my-4 text-white font-sans line-clamp-2">
                {card.desc}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {card.tags.map((tag, j) => (
                  <div
                    key={j}
                    className="bg-gray-900 shadow-md text-white py-1.5 px-2 rounded-lg"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

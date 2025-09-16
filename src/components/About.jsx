import { aboutCards } from "../utils/Constants.js";

const About = () => {
  return (
    <section id={`about`} className={`py-16 md:py-20 bg-gray-100`}>
      <div
        className={`w-[90vw] max-w-[1110px] mx-auto text-center lg:text-left flex flex-col items-center lg:items-start gap-12 md:gap-18`}
      >
        <article className={`space-y-4 md:space-y-8 w-full lg:max-w-[58%]`}>
          <h1 className={`text-3 md:text-1 text-blue-950 `}>
            Why choose Digitalbank?
          </h1>
          <p className={`text-body`}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </article>
        <div className={`section-grid`}>
          {aboutCards.map(({ id, icon, title, text }) => (
            <div
              key={id}
              className={`flex flex-col items-center gap-10 md:items-start`}
            >
              <img src={icon} alt={title} />
              <div className={`space-y-6`}>
                <h2 className={`text-4 text-blue-950 capitalize`}>{title}</h2>
                <p className={`text-body`}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;

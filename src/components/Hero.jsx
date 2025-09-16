import { imgMockups } from "../assets/index.js";
import Button from "./Button.jsx";

const Hero = () => {
  return (
    <section
      id={`home`}
      className={`pb-14 lg:pl-40 md:pb-18 lg:pb-0  flex flex-col lg:flex-row-reverse lg:items-center lg:gap-8`}
    >
      <div className={` w-screen lg:max-w-200 hero-bg`}>
        <img
          src={imgMockups}
          alt="mockups"
          className={`-mt-13.5 w-[90vw] max-w-full mx-auto`}
        />
      </div>
      <article
        className={`flex flex-col items-center gap-6 w-82 md:w-112 mx-auto text-center lg:text-left lg:items-start`}
      >
        <h1 className={`text-2 md:text-1 text-blue-950`}>
          Next generation digital banking
        </h1>
        <p className={`text-7-regular md:text-5 text-gray-600`}>
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <Button />
      </article>
    </section>
  );
};
export default Hero;

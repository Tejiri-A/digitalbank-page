import { articleCards } from "../utils/Constants.js";

const LatestArticles = () => {
  return (
    <section className={`py-16 md:py-20`}>
      <div
        className={`w-[90vw] max-w-[1110px] mx-auto space-y-12 md:space-y-16 lg:space-y-14`}
      >
        <h2 className={`text-3 md:text-2`}>Latest Articles</h2>
        <div className={`grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4`}>
          {articleCards.map(({ id, img, author, topic, text }) => (
            <article
              key={id}
              className={`h-100  grid grid-rows-2 bg-white  rounded-md shadow-sm transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-2`}
            >
              <div className={`rounded-t-md overflow-hidden `}>
                <img
                  src={img}
                  alt={topic}
                  className={`size-full object-cover`}
                />
              </div>
              <div className={`py-6 px-8 md:px-10 space-y-4`}>
                <p className={`text-8 text-gray-600`}>By {author}</p>
                <div className={`space-y-2`}>
                  <h3
                    className={`text-6 text-blue-950 cursor-pointer transition-colors duration-500 ease-out hover:text-green-400`}
                  >
                    {topic}
                  </h3>
                  <p className={`text-7-regular text-gray-600`}>{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LatestArticles;

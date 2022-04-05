import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="mx-24">
      <div className="my-8">
        <h1 className="font-mono text-2xl font-semibold text-red-600">
          What is context API?
        </h1>
        <p>
          Context API is a way to create global variables and pass around the
          application. It is the alternative solution of prop driling. React
          16.03 intrduce context API. Context is primarily used when some data
          need to accessible by many component at different nesting level. If we
          want to passing props in many different level then context API is the
          simpler solution.
        </p>
      </div>
      <div>
        <h1 className="font-mono text-2xl font-semibold text-red-600">
          What is sementic tag?
        </h1>
        <p>
          A sementic elment is the clearly describe both browser and developer.
          One of the most inportant features of HTML5 is its sementic element.
          It makes web pages more informative and allowing browser and search
          engines to better interpret content.
        </p>
      </div>
      <div className="my-8">
        <h1 className="font-mono text-2xl font-semibold text-red-600">
          What block/inline/inlineblock
        </h1>
        <p>
          Block element occupy full width and always start in the new line.
          Inline element don't start a new line. Inline element allow other
          inline elelment to sit behind. On the other hand inline-block formates
          just like inline element where it doesent start on a new line, but set
          width and hight values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

import {
  chunk,
  compact,
  difference,
  differenceBy,
  drop,
  dropRight,
  fill,
} from "lodash";

const component = () => {
  // Bunch of lodash examples
  chunk(["a", "b", "c", "d"], 2);
  compact([0, 1, false, 2, "", 3]);
  difference([2, 1], [2, 3]);
  differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
  drop([1, 2, 3], 2);
  dropRight([1, 2, 3], 2);
  fill(["a", "b", "c"], "x");

  const element = document.createElement("div");

  element.innerHTML = `Build size analyze - Lodash commonJS destructuring import - <a href="./report.html"> Analyze </a>`;

  return element;
};

document.body.appendChild(component());

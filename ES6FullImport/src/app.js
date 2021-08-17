import lodash from "lodash-es";

const component = () => {
  // Bunch of lodash examples
  lodash.chunk(["a", "b", "c", "d"], 2);
  lodash.compact([0, 1, false, 2, "", 3]);
  lodash.difference([2, 1], [2, 3]);
  lodash.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
  lodash.drop([1, 2, 3], 2);
  lodash.dropRight([1, 2, 3], 2);
  lodash.fill(["a", "b", "c"], "x");

  const element = document.createElement("div");

  element.innerHTML = `Build size analyze - Lodash ES6 import - <a href="./report.html"> Analyze </a>`;

  return element;
};

document.body.appendChild(component());

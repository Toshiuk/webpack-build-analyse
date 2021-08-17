import chunk from "lodash-es/chunk";
import compact from "lodash-es/compact";
import difference from "lodash-es/difference";
import differenceBy from "lodash-es/differenceBy";
import drop from "lodash-es/drop";
import dropRight from "lodash-es/dropRight";
import fill from "lodash-es/fill";

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

  element.innerHTML = `Build size analyse - Lodash ES6 separated import - <a href="./report.html"> Analyse </a>`;

  return element;
};

document.body.appendChild(component());

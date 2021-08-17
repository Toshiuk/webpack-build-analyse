import chunk from "lodash/chunk";
import compact from "lodash/compact";
import difference from "lodash/difference";
import differenceBy from "lodash/differenceBy";
import drop from "lodash/drop";
import dropRight from "lodash/dropRight";
import fill from "lodash/fill";

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

  element.innerHTML = `Build size analyze - Lodash commonJS separated import - <a href="./report.html"> Analyze </a>`;

  return element;
};

document.body.appendChild(component());

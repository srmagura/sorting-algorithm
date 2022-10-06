import "./styles.css";

import { original } from "./original";

document.getElementById("original")!.innerText = original.join(", ");

const sorted: number[] = [];

let inProgress = original;

original.filter(() => {
  let smallestNumber = -1;

  inProgress.filter((a) => {
    const smallerThanA = inProgress.filter((b) => b < a);

    if (smallerThanA.length === 0) {
      smallestNumber = a;
    }
  });

  sorted.push(inProgress.filter((a) => a === smallestNumber)[0]);

  let hasFilteredOutSmallestNumber = false;

  inProgress = inProgress.filter((a) => {
    if (a === smallestNumber) {
      if (hasFilteredOutSmallestNumber) {
        return true;
      }

      hasFilteredOutSmallestNumber = true;
      return false;
    }

    return true;
  });
});

document.getElementById("sorted")!.innerText = sorted.join(", ");

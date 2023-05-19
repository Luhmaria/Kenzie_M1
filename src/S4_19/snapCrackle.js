function snapCrackle(maxValue) {
  let result = "";
  for (let position = 1; position <= maxValue; position++) {
    if (position < maxValue) {
      if (position % 5 == 0 && position % 2 != 0) {
        result += "SnapCrackle, ";
      } else if (position % 2 != 0) {
        result += "Snap, ";
      } else if (position % 5 == 0) {
        result += "Crackle, ";
      } else {
        result += `${position}, `;
      }
    } else {
      if (position % 5 == 0 && position % 2 != 0) {
        result += "SnapCrackle";
      } else if (position % 2 != 0) {
        result += "Snap";
      } else if (position % 5 == 0) {
        result += "Crackle";
      } else {
        result += `${position}`;
      }
    }
  }
  return result;
}
console.log(snapCrackle(15));

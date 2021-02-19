// You live in the city of Cartesian where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.

// The city provides its citizens with a Walk Generating App on their phones -- every time you press the button
// it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).

// You always walk only a single block in a direction and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

function walking(arr) {
  if (arr.length != 10) return false;

  //x and y coord-s
  let coordinates = {};

  for (let i = 0; i < arr.length; i++) {
    const direction = arr[i];
    if (direction == "n" || direction == "s") {
      if (coordinates["y"]) {
        coordinates["y"] =
          direction == "n" ? coordinates["y"] + 1 : coordinates["y"] - 1;
      } else {
        coordinates["y"] = direction == "n" ? 1 : -1;
      }
    }

    if (direction == "w" || direction == "e") {
      if (coordinates["x"]) {
        coordinates["x"] =
          direction == "e" ? coordinates["x"] + 1 : coordinates["x"] - 1;
      } else {
        coordinates["x"] = direction == "e" ? 1 : -1;
      }
    }
  }

  return coordinates["x"] + coordinates["y"] === 0 ? true : false;
}

console.log(walking(["n", "n", "e", "w", "s", "s", "e", "w", "n", "s"]));

const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0,
};

/**
 * Takes a single result string and (one of 'w', 'l', or 'd')
 * and returns the point value
 *
 * @param {string} result
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  const replacedResult = result.replace(/w|d|l/gim, (letter) => {
    return RESULT_VALUES[letter];
  });
  const separatetheString = replacedResult.split("");
  console.log(separatetheString);
};

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won
const getTotalPoints = (result) => {
  const replacedResult = result.replace(/w|d|l/gim, (letter) => {
    return RESULT_VALUES[letter];
  });
  const separatetheString = replacedResult.split("");
  const totalPoints = separatetheString.map(function (str) {
    return parseFloat(str);
  });
  const sum = totalPoints.reduce(
    (accumlate, currentValue) => accumlate + currentValue,
    0
  );
  return sum;

  console.log(sum);
};

// Check getTotalPoints
console.log(getTotalPoints("wwdl")); // should equal 7

// create orderTeams function that accepts as many team objects as desired,
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"
const orderTeams = (...teams) => {
  teams.forEach((team) => {
    const { name, results } = team;
    const points = getTotalPoints(results);
    console.log(`${name}: ${points} points`);
  });
};

// Check orderTeams
orderTeams(
  { name: "Sounders", results: "wwdl" },
  { name: "Galaxy", results: "wlld" }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4

/**
 * Takes string hh:mm and outputs time in words.
 *
 * 06:18 --> six ten am
 *
 * @param {String} str A two digit hour (00-23) and two digit minute (00-59).
 * @return str translated to words
 */

function timeWord(str) {
  // Input type validation

  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  // Try to split "ab:cd" and parse resulting array
  const time = str.split(":");

  const hour = parseInt(time[0]);
  const minute = parseInt(time[1]);

  // If the string format is valid but the hours or minutes out of range
  if (hour > 23 || minute > 59 || hour < 0 || minute < 0)
    throw new Error("Invalid time");

  // Dict to translate hours and single digit minutes
  const timeDict = {
    0: "twelve",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "one",
    14: "two",
    15: "three",
    16: "four",
    17: "five",
    18: "six",
    19: "seven",
    20: "eight",
    21: "nine",
    22: "ten",
    23: "eleven",
  };

  // Output used to return result. Concatenate based on string
  let output = "";
  output += timeDict[hour];

  // Append to end of output
  const amOrPm = hour <= 11 ? " am" : " pm";

  // If minute is 0, just return [hr] am
  // If hr is 0 or 12 however, return midnight or noon
  if (minute == 0) {
    if (hour == 0) return "midnight";
    else if (hour == 12) return "noon";
    else return output + " o'clock" + amOrPm;
  }

  // If minute is between 0 and 10, append "oh"
  else if (minute > 0 && minute < 10) {
    output += " oh " + timeDict[minute] + amOrPm;
    return output;
  }

  // Else, output is [hr] + [minute] + [am/pm]
  else {
    // Split minute into two digits
    const arrMinute = (minute + "").split("");

    // For cases like [ab:20] or [ab:30]. These are edge cases -- "ab twenty" or "ab thirty"
    const firstDigitMinute = {
      2: "twenty",
      3: "thirty",
      4: "fourty",
      5: "fifty",
      6: "sixty",
    };

    // Cases for :10, :20, :30, etc.
    if (arrMinute[0] == "1") {
      switch (arrMinute[1]) {
        case "1":
          output += " eleven";
          break;
        case "2":
          output += " twelve";
          break;
        case "3":
          output += " thirteen";
          break;
        case "4":
          output += " fourteen";
          break;
        case "5":
          output += " fifteen";
          break;
        case "6":
          output += " sixteen";
          break;
        case "7":
          output += " seventeen";
          break;
        case "8":
          output += " eighteen";
          break;
        case "9":
          output += " nineteen";
          break;
      }
      return output + amOrPm;
    }
    // Else, concatenate as usual
    else {
      output += " " + firstDigitMinute[arrMinute[0]];
      if (arrMinute[1] == 0) {
        return output + amOrPm;
      } else {
        output += " " + timeDict[arrMinute[1]] + amOrPm;
      }
    }
  }

  return output;
}

module.exports = timeWord;

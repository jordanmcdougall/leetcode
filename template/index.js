const fs = require("fs-extra");
const problemNumber = process.argv[2];

if (!problemNumber || isNaN(Number(problemNumber))) {
  console.error("error: challenge number not supplied or invalid.");
  return;
}

const copyFiles = (problemNumber) => {
  try {
    // copy the template directory
    fs.copySync(`./template/contents`, `./problems/${problemNumber}`);
  } catch (err) {
    console.error(err);
    return;
  }
};

copyFiles(problemNumber);

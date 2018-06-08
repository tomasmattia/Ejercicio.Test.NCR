// tyrion/proj/src/index.js

const colors = require('colors');

const repeat = (str, n) => Array(n).join(str);
const indent = n => repeat('    ', n);
const indentLines = (str, n) => indent(n) + str.replace(/\n/g, `\n${indent(n)}`);

const summary = { success: 0, fail: 0, disabled: 0 };
let indentLevel = 0;

const group = (title, cb) => {
  indentLevel++;
  console.log(`\n${indent(indentLevel)}⇨ ${title}`.yellow);
  cb();
  indentLevel--;
};

const check = (title, cb) => {
  try{
    cb();
    console.log(`${indent(indentLevel + 1)}${' OK '.bgGreen.black} ${title.green}`);
    summary.success++;
  } catch(e) {
    console.log(`${indent(indentLevel + 1)}${' FAIL '.bgRed.black} ${title.red}`);
    console.log(indentLines(e.stack.red, indentLevel + 1));
    summary.fail++;
  }
};

const xcheck = (title, cb) => {
  console.log(`${indent(indentLevel + 1)}${' DISABLED '.bgWhite.black} ${title.gray}`);
  summary.disabled++;
};

const guarantee = (val,res) => {
  if (val===res) return true;
  else return false;
  //throw new Error('Assertion failed.');
};

const end = () => {
  console.log(`\n${repeat('.', 60)}\n`);
  console.log('Test summary:\n');
  console.log(`  Success: ${summary.success}`.green);
  console.log(`  Fail: ${summary.fail}`.red);
  console.log(`  Disabled: ${summary.disabled}\n\n`.gray);

  if (summary.fail > 0) process.exit(1);
  process.exit(0);
};

module.exports = { guarantee, check, xcheck, end, group };
//const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Employee CMS" }).render();

  console.log(logoText);

  //loadMainPrompts();
}
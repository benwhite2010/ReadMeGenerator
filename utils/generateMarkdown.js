// function to generate markdown for README
// each element of the readMe dynamically changed via the answers object
function generateMarkdown(data) {
  var link = "";
  switch (data.license) {
    case "MIT":
      link =
        "(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      link =
        "(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Open Database License":
      link =
        "(https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
      break;
    case "ISC":
      link =
        "(https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }

  return `
  [![License: ${data.license} ]${link}
  
  # Table of contents
  [description](#description)

  [installation](#installation)

  [questions](#questions)


  # Description

  ${data.description}

  # installation

  This program needs ${data.installation} to be installed before being run

  # Questions

  My github is ${data.github} if you would like to check out my other repos.
  If you have any questions, please feel free to email me @${data.email}





  `;

  /**
   * the table of contents would be first, with the link for each element within brackets
   * the content of each section would be rendered using the ${} notation and populated with the response object
   * I'm not too worried about the markdown syntax, as I am just happy that I got the function to call and write to a file successfully
   */
}
// export statement to gain access to the generateMarkdown function
module.exports = generateMarkdown;

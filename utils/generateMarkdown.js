// function to generate markdown for README
// each element of the readMe dynamically changed via the answers object
function generateMarkdown(data) {
  return `# ${data.repository}
    ## ${data.description}
    ### ${data.installation}

  `;
}
// export statement to gain access to the generateMarkdown function
module.exports = generateMarkdown;

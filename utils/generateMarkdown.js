// function to generate markdown for README

function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
[![License](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](https://opensource.org/licenses/${data.license})
  
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about this project, please reach out to [${data.username}](https://github.com/${data.username}) at ${data.email}.
`;
}

module.exports = generateMarkdown;

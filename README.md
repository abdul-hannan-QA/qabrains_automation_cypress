QA Brains Cypress Automation

This project contains automated test scripts for QA Brains Practice Website
 using Cypress with the Page Object Model (POM) design pattern.

🚀 Features Covered

User Authentication

Login with valid and invalid credentials

Error handling and success validation

Navigation to Registration and Forgot Password pages

Password masking and autocomplete checks

Registration Module

Fill and submit registration form

Positive & negative test cases

Dropdown handling (Country, Account Type)

Field validations

Form Submission

Locate and fill all required fields

Submit form with valid/invalid data

Assert success & error messages

Label & accessibility validation

Feedback Section

Submit feedback form

Verify submitted feedback in the list

🏗 Project Structure
qabrains-cypress/
│── cypress/
│   ├── fixtures/          # Test data (JSON)
│   ├── integration/
│   │   ├── tests/         # Test cases
│   │   ├── Pages/         # Page Object Models
│   ├── support/           # Custom commands & reusable functions
│── package.json           # Project dependencies
│── README.md              # Project documentation

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/qabrains-cypress.git
cd qabrains-cypress


Install dependencies:

npm install


Open Cypress Test Runner:

npx cypress open


Run tests in headless mode:

npx cypress run

📂 Test Data

Test data is stored in the cypress/fixtures/example.json file.
Example:

{
  "users": {
    "valid": {
      "email": "qa_testers@qabrains.com",
      "password": "Password123"
    },
    "invalid": {
      "email": "wrong@test.com",
      "password": "WrongPass!"
    }
  },
  "feedback": {
    "name": "Cypress Tester",
    "message": "Automated feedback from Cypress"
  }
}

🧪 How to Run Specific Tests

Run only Authentication Tests

npx cypress run --spec "cypress/integration/tests/auth.spec.js"


Run only Registration Tests

npx cypress run --spec "cypress/integration/tests/registration.spec.js"

📜 Tech Stack

Cypress for UI automation

JavaScript (ES6)

Mocha & Chai (built-in with Cypress)

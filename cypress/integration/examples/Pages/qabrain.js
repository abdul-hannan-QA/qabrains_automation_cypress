import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import FeedbackPage from "./FeedbackPage";
import FormPage from "./FormPage";
import 'cypress-file-upload';


let testData;  // ✅ declare the variable first (notice capitalization)

describe("Authentication Tests for qabrains", function() {

  // Load test data before running tests
  before(function () {
    cy.fixture('example').then(function (data) {
      testData = data;  // ✅ assign fixture to declared variable
    });
  });

  it("Login with valid credentials", function () {
    LoginPage.visit();
    LoginPage.login(testData.users.valid.email, testData.users.valid.password);
    LoginPage.loginSuccess();
  });

  it("Login with invalid credentials", function () {
    LoginPage.visit();
    LoginPage.login(testData.users.invalid.email, testData.users.invalid.password);
    LoginPage.loginFailed();
  });


// REGISTRATION TESTS 
  it("Navigate to Registration, fill form and validate fields", function () {
    LoginPage.visit();
    LoginPage.goToRegistration();

    RegistrationPage.verifyLabels();
    //RegistrationPage.verifyPasswordMasking();
   

  // 
  const dynamicEmail = `tester${Date.now()}@example.com`; //conver email dynamic 
const registrationData = { ...testData.registration.valid }; // By using { ...testData.registration.valid }:You create a new object You can safely override email without touching the original fixture
registrationData.email = dynamicEmail;                        // override only email

console.log(registrationData);


    // Fill text fields from JSON
    //RegistrationPage.fillForm(testData.registration.valid);//omit this coz we use dynamic email 
    // Fill form
    RegistrationPage.fillForm(registrationData);

    // Select dropdowns explicitly
    RegistrationPage.selectCountry("Bangladesh");
    RegistrationPage.selectAccountType("Engineer");

    // Submit form
    RegistrationPage.submit();
    RegistrationPage.verifySuccess();

    
  });

//FROMPAGE TEST 

it("should fill and submit the form successfully", function () {
    // Fill form with fixture data

FormPage.visit();
FormPage.fillForm(testData.form);
FormPage.ColorInput().click();
FormPage.MenuInput().click();
FormPage.selectCountry("Bangladesh");
FormPage.fileInput().click();


cy.wait(2000); // Pauses the test for 2 seconds
 // Submit form
    FormPage.submitButton().click();



});



});

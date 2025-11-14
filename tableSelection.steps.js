const { Given, When, Then } = require('@cucumber/cucumber');
const { TableSelectionPage } = require('../../pageobjects/TableSelectionPage');

let tableSelectionPage;

Given('the user is on the JD Wetherspoon page', async function () {
  tableSelectionPage = new TableSelectionPage(this.page);
  await tableSelectionPage.loadPage();
});

Given('the user agrees to the terms and conditions', async function () {
  await tableSelectionPage.checkTermsAndConditionBox();
});

Given('the user agrees to the privacy policy', async function () {
  await tableSelectionPage.checkPrivacyPolicyBox();
});

When('the user clicks on the "Proceed" button', async function () {
  await tableSelectionPage.clickProceedButton();
});

Then('the user should be navigated to the table selection page', async function () {
  await tableSelectionPage.verifyNumberSelectionPage();
});

When('the user enters a valid table number {string}', async function (tableNumber) {
  await tableSelectionPage.enterTableNumber(tableNumber);
});

When('the user clicks on the "Continue" button', async function () {
  await tableSelectionPage.clickContinueButton();
});

Then('the user should be redirected to the main menu page', async function () {
  await tableSelectionPage.verifyMainMenuPageDisplay();
});

When('the user enters an invalid table number {string}', async function (tableNumber) {
  await tableSelectionPage.enterTableNumber(tableNumber);
});

Then('an error message "Please check your table number and try again" should be displayed', async function () {
  await tableSelectionPage.verifyInvalidTableNumberErrorMessage();
});

Then('the user should remain on the table selection page', async function () {
  await tableSelectionPage.verifyNumberSelectionPage();
});

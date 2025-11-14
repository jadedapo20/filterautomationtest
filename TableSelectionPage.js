const { expect } = require('@playwright/test');

class TableSelectionPage {
    /**
    * @param {Page} page
    */
    constructor(page) {
        this.page = page;
        this.tableNumberField = page.getByRole("textbox", { name: "Table Number" });
        this.continueButton = page.getByRole("button", { name: "Continue" });
        this.termsAndConditionCheckBox = page.getByRole("checkbox", { name: "Terms & conditions checkbox" });
        this.privacyPolicyCheckBox = page.getByRole("checkbox", { name: "Privacy policy checkbox" });
        this.proceedButton = page.getByRole("button", { name: "Proceed" });
        this.enableLocationButton = page.getByRole("button", { name: "Enable Location" });
        this.invalidTableNumberErrormessage = page.getByText("Please check your table number and try again");
    }
    async loadPage() {
        const baseUrl = process.env.BASE_URL || "https://order.jdwetherspoon.com";
        await this.page.goto(`${baseUrl}/venue/pubs/95/tables`);

    }
    async checkTermsAndConditionBox() {
        await this.termsAndConditionCheckBox.click();
    }
    async checkPrivacyPolicyBox() {
        await this.privacyPolicyCheckBox.click();
    }
    async clickProceedButton() {
        await this.proceedButton.click();
    }
    async verifyNumberSelectionPage() {
        await expect(this.page).toHaveURL(/\/venue\/pubs\/95\/tables$/);
    }
    async enterTableNumber(tableNumber) {
        if (typeof tableNumber !== 'string') {
            tableNumber = String(tableNumber);
        }
        await this.tableNumberField.fill(tableNumber);
    }
    async clickContinueButton() {
        await this.continueButton.click();
    }
    async verifyMainMenuPageDisplay() {
        await expect(this.page).toHaveURL(/.*\/venue\/pubs\/95\/tables\/\d+\/menus/);
    }
    async verifyInvalidTableNumberErrorMessage() {
        await expect(this.invalidTableNumberErrormessage).toBeVisible();
    }
}
module.exports = { TableSelectionPage };
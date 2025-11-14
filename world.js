const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

class CustomWorld extends World {
  async openBrowser() {
    this.browser = await chromium.launch({
      headless: true, // set to false for debugging
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);

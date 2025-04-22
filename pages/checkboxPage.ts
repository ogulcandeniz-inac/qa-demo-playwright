import { Page, expect } from '@playwright/test';

export class CheckboxPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demoqa.com/checkbox');
    await this.page.waitForSelector('.rct-checkbox'); // checkbox yüklenmesini bekle
  }

  async expandAll() {
    await this.page.click('.rct-option-expand-all');
  }

  async checkNotes() {
    await this.page.click('label[for="tree-node-notes"] span.rct-checkbox');
  }

  async verifyResult(expected: string) {
    const result = await this.page.locator('#result').textContent();
    expect(result).toContain(expected);
  }
}

import { Page, expect } from '@playwright/test';

export class CheckboxPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demoqa.com/checkbox');
  }

  async expandAll() {
    const expandButton = this.page.locator('button[title="Expand all"]');
    await expandButton.click();
  }

  async toggleDesktopCheckbox() {
    const desktopCheckbox = this.page.locator('label[for="tree-node-desktop"] span.rct-checkbox');
    await desktopCheckbox.click();
  }

  async expectResultToContain(text: string) {
    const result = this.page.locator('#result');
    await expect(result).toContainText(text);
  }

  async expectResultNotToContain(text: string) {
    const result = this.page.locator('#result');
    const isVisible = await result.isVisible();
  
    if (isVisible) {
      await expect(result).not.toContainText(text);
    } else {
      // Hiçbir sonuç yoksa da bu bizim için "başarılı" sayılır
      console.log('Result elementi görünmüyor, test geçerli sayıldı.');
    }
  }
  
}

import { Page, expect } from 'playwright/test';
export class LoginPage{ 
    constructor (private page:Page) {}
    
    async goto(){ 
        await this.page.goto('https://demoqa.com/login');
        await this.page.waitForSelector('#userName'); // sayfa yüklenmesini bekler
    }

    async login(username: string, password: string) {
        await this.page.fill('#userName', username);
        await this.page.fill('#password', password);
        await this.page.click('#login');
      }
    
      async assertSuccessfulLogin() {
        await expect(this.page).toHaveURL('https://demoqa.com/profile');
      }
    
      async assertLoginErrorMessage() {
        await expect(this.page.locator('#name')).toHaveText('Invalid username or password!');
      }

      async logout() {
        await this.page.click('#submit'); // DemoQA'da logout butonunun ID’si submit
      }
    
    }
    
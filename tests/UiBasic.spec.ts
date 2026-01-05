import { test, expect } from '@playwright/test';

test('UI validations',async({page})=>{
test.slow();
 await page.goto('https://testautomationpractice.blogspot.com/')
 //select radio button and check box.
 //check() only enable the check box when check box is already checked it will not perform any action, checkbox remains same as checked.
 await page.getByLabel('Male',{ exact: true }).check();
 await expect(page.getByLabel('Male',{ exact: true })).toBeChecked();
 await page.getByText('Tuesday',{ exact: true}).check();
 await expect(page.getByText('Tuesday',{ exact: true})).toBeChecked();
 //drop down selection
 await page.locator('#country').selectOption('india');
 await expect(page.locator('#country')).toHaveValue('india')
 await page.locator('#colors').selectOption('blue');
 await page.locator('#animals').selectOption(['lion','cheetah','elephant'])
 //we can also write [{lable:'value'},{value:'name'},{index:number}] like this
 await expect(page.locator('#colors')).toHaveValue('blue')

 await page.goto('https://demoqa.com/select-menu');
 await page.locator('#cars').selectOption(['volvo','audi']);
 await expect(page.locator('#cars')).toHaveValues(['volvo',"audi"]);
 await page.locator('#cars').selectOption(['saab','opel']);
 await page.locator('div.css-1hwfws3').first().click();
 await page.locator('div.css-1hwfws3').last().click();


})

require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('http://localhost:3000/');

        // Click on "Start"
        await driver.findElement(By.css('button')).click();

        // Click on answer 1 for all the questions
        for ( let i = 0; i < 10; i++ ) {
          await driver.findElement(By.id('answer-0')).click();
        }

        const resultText = await driver.findElement(By.css('.ResultBlock')).getText();
        
        resultText.includes('%');

        
    }
    finally{
        driver.quit();
    }
})();
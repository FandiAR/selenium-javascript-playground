require('chromedriver');
const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');
const should = require('chai').should();

const example = async () => {
    // launch the browser
    const driver = await new Builder().forBrowser('chrome').build();

    // navigate to our application
    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    // add a todos
    const textField = driver.findElement(By.id('sampletodotext'));
    const addButton = driver.findElement(By.id('addbutton'));
    await textField.sendKeys('Learn Selenium 1');
    await addButton.click();
    await textField.sendKeys('Learn Selenium 2');
    await addButton.click();
    await textField.sendKeys('Learn Selenium 3');
    await addButton.click();
    await textField.sendKeys('Learn Selenium 4');
    await addButton.click();
    await textField.sendKeys('Learn Selenium 5');
    await addButton.click();
    await textField.sendKeys('Learn Selenium 6');
    await addButton.click();
    await textField.sendKeys('Learn Selenium 7');
    await addButton.click();
    await textField.sendKeys('Learn Selenium 8');
    await addButton.click();
    await textField.sendKeys('Learn Selenium 9');
    await addButton.click();
    await textField.sendKeys('Learn Selenium 10');
    await addButton.click();

    const todoText = await driver.findElement(By.xpath('//li[last()]')).getText()
        .then((value) => value);
    // assertion using nodejs assertion example
    assert.strictEqual(todoText, 'Learn Javascript');
    // assertion using chai should example
    todoText.should.equal('Learn Javascript');

    // close the browser
    await driver.quit();
};

// call the run function
example();
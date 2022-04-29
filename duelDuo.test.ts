import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button displays choices', async () => {
    await driver.findElement(By.xpath('//*[@id="draw"]')).click();
    await driver.sleep(1000)

    const choices = await driver.findElement(By.xpath('//*[@id="choices"]'))
    const displayed = await choices.isDisplayed();
    
    expect(displayed).toBe(true);
})

test('add to duo', async () => {
    await driver.findElement(By.xpath('//*[@id="draw"]')).click();
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//*[@class="bot-btn"]')).click();
    await driver.sleep(1000)

    const myBot = await driver.findElement(By.xpath('//*[@class="bot-card outline"]'))
    const displayed = await myBot.isDisplayed();
    
    expect(displayed).toBe(true);
})

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  const input = element(by.id('numericInput'));
  const button = element(by.id('multiplyButton'));
  const dismiss = element(by.id('dissmisButton'));
  const scroll = element(by.id('scrollview'))

  it('should have the initial screen', async () => {
    await expect(element(by.id('numericInput'))).toBeVisible();
  });

  it('should type a number', async () => {
    await input.typeText('1000');
  });

  it('should multiply a number', async () => {
    await dismiss.tap();
    await button.tap();
    await expect(element(by.text('5000'))).toBeVisible();
  });

  it('should multiply multiple numbers', async() => {
    for (let i = 0; i < 15; i++) {
      await input.clearText();
      await input.typeText(`${i}`);
      await dismiss.tap();
      await button.tap();
      await waitFor(element(by.text(`${i}`))).toExist().withTimeout(100);
    }
  });

  it('should scroll and show last item', async() => {
   await scroll.scrollTo("bottom");
   await expect(element(by.text('70'))).toBeVisible();
  });

  it('should scroll to top', async() => {
    await scroll.scrollTo("top");
    await expect(element(by.text('0'))).toBeVisible();
   });
});

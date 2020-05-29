import wd from 'wd';
import * as Config from '../platform.config';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const PORT = 4723;

const driver = wd.promiseChainRemote('localhost', PORT);

describe('ios: login', () => {
  beforeAll(async () => {
    await driver.init(Config.ios);
    const Allow = await driver.hasElementByName('Allow');
    const Allow_zh = await driver.hasElementByName('允许');
    if (Allow) {
      await driver.elementByName('Allow').click();
    }
    if (Allow_zh) {
      await driver.elementByName('允许').click();
    }
  });
  afterAll(async () => {
    await driver.sleep(5000)
    await driver.quit()
  });
  // 每个用例执行前，sleep 5 s，防止操作过快，节点获取不到，快速操作需要调整此参数
  beforeEach(async () => {
    await driver.sleep(5000);
  });
  
  it('phone login', async () => {
    expect(await driver.hasElementByAccessibilityId('login_phone_input')).toBe(true)
    expect(await driver.hasElementByAccessibilityId('login_get_code')).toBe(true)
    expect(await driver.hasElementByAccessibilityId('login_auto_set_code')).toBe(true)
    expect(await driver.hasElementByAccessibilityId('login_submit')).toBe(true)
    
    await driver.elementByAccessibilityId('login_phone_input').sendKeys(18225602669)
    await driver.elementByAccessibilityId('login_get_code').click()
    await driver.elementByAccessibilityId('login_auto_set_code').click()
    await driver.elementByAccessibilityId('login_submit').click()
  })
  
  // it('login:visitor login', async () => {
  //   // const hasVisitorLogin = await driver.hasElementByAccessibilityId('visitor_login')
  //   expect(await driver.hasElementByAccessibilityId('visitor_login')).toBe(
  //     true,
  //   );
  //   await driver.elementByAccessibilityId('visitor_login').click().sleep(5000);
  // });

  // it('second', async () => {
  //   expect(await driver.hasElementByAccessibilityId('AskBob')).toBe(true);
  //   await driver.elementByAccessibilityId('AskBob').click().sleep(1000);
  // });
});

import wd from 'wd'
import * as Config from './platform.config'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const PORT = 4723;

const driver = wd.promiseChainRemote('localhost', PORT);

const init_app = async () => {
  await driver.init(Config.ios_debug);
  const Allow = await driver.hasElementByName('Allow');
  const Allow_zh = await driver.hasElementByName('允许');
  if (Allow) {
    await driver.elementByName('Allow').click();
  }
  if (Allow_zh) {
    await driver.elementByName('允许').click();
  }
}

const after_all = async () => {
  // await driver.sleep(5000)
  // await driver.quit()
}

const before_each = async () => {
  await driver.sleep(1000);
}

export {
  driver,
  init_app,
  after_all,
  before_each,
}

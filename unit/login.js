import {
  driver
} from "../config/driver.config";
import {
  phone_number,
  email_number,
  email_password,
} from "../config/user.config";
import wd from "wd";

export const phone_login = async () => {
  const switch_to_phone_login = await driver.hasElementByAccessibilityId('active_email')
  if (switch_to_phone_login) {
    await driver.elementByAccessibilityId('active_email').click()
  }
  await driver.elementByAccessibilityId('login_phone_input').sendKeys(phone_number)
  await driver.elementByAccessibilityId('login_get_code').click()
  await driver.elementByAccessibilityId('login_auto_set_code').click()
  await driver.elementByAccessibilityId('login_submit').click()
}

export const email_login = async () => {
  const switch_to_email_login = await driver.hasElementByAccessibilityId('active_phone')
  if (switch_to_email_login) {
    await driver.elementByAccessibilityId('active_phone').click()
  }
  await driver.elementByAccessibilityId('login_email_input').sendKeys(email_number)
  await driver.elementByAccessibilityId('login_password_input').sendKeys(email_password)
  await driver.elementByAccessibilityId('login_submit').click()
}

export const visitor_login = async () => {
  const visitor_login_btn = await driver.hasElementByAccessibilityId('login_visitor')
  if (visitor_login_btn) {
    driver.elementByAccessibilityId('login_visitor').click()
  }
}

export const logout = async () => {
  await (new wd.TouchAction(driver)).tap({ x: 355, y: 703 }).perform()
  const has_point_pop = await driver.hasElementByAccessibilityId('close_point_pop')
  if (has_point_pop) {
    await driver.elementByAccessibilityId('close_point_pop').click()
  }
  const me_tab_tools = await driver.elementsByAccessibilityId('me_tab_tools')
  const len = me_tab_tools.length
  await me_tab_tools[len - 1].click()
  await driver.elementByName('logout').click()
}

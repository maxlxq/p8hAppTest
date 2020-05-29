const ios = {
  platformName: 'iOS',
  platformVersion: '13.5',
  deviceName: 'iPhone 11 Pro Max',
  // udid: '73156db974d5d9f14336b77c799f5dcffd457dab',
  automationName: 'XCUITest',
  app: '/Users/maxlxq/WebstormProjects/p8hAppTest/app/p8hAppAdHoc.ipa', // 固定路径
};
const ios_debug = {
  platformName: 'iOS',
  platformVersion: '13.2',
  deviceName: 'Pier 88 Health',
  udid: '73156db974d5d9f14336b77c799f5dcffd457dab',
  automationName: 'XCUITest',
  bundleId: 'com.pier88health.app.dev',
  xcodeSigningId: 'IOS Developer',
  noReset: 'true',
  newCommandTimeout: '3600',
};
const android = {
  platformName: 'Android',
  deviceName: 'Pixel 3 API 29',
  automationName: 'UiAutomator2',
  app:
    '/Users/maxlxq/github/test612/apk/MedLinc-qa-v1.5.0-20200507-release.apk',
};
const android_debug = {
  platformName: 'Android',
  deviceName: 'Pixel 3 API 29',
  automationName: 'UiAutomator2',
  "app": "/Users/maxlxq/github/p8hApp/android/app/qaPgyer/release/MedLinc-qa_v1.5.1_20200519_release_62.apk"
};

export {ios, ios_debug, android, android_debug};

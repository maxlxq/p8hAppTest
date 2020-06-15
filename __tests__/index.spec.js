import {
  init_app,
  after_all,
  before_each,
} from '../config/driver.config'
import {
  email_login,
  logout,
  phone_login, visitor_login,
} from '../unit/login'

describe('phone login', () => {
  beforeAll(init_app)
  afterAll(after_all)
  beforeEach(before_each)
  
  it('phone login', phone_login)

  it('logout', logout)
});

describe('email login', () => {
  beforeEach(before_each)

  it('email login', email_login)

  it('logout', logout)
});

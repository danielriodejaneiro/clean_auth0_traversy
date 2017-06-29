import { AuthTestPage } from './app.po';

describe('auth-test App', () => {
  let page: AuthTestPage;

  beforeEach(() => {
    page = new AuthTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

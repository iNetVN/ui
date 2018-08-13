import { AppPage } from './app.po';

describe('HRM App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application name', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('HRM');
  });
});

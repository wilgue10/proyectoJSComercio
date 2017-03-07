import { ComercioAppFPage } from './app.po';

describe('comercio-app-f App', () => {
  let page: ComercioAppFPage;

  beforeEach(() => {
    page = new ComercioAppFPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

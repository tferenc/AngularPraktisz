import { PraktiszPage } from './app.po';

describe('praktisz App', () => {
  let page: PraktiszPage;

  beforeEach(() => {
    page = new PraktiszPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

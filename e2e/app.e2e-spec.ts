import { BrowsifyPage } from './app.po';

describe('browsify App', function() {
  let page: BrowsifyPage;

  beforeEach(() => {
    page = new BrowsifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

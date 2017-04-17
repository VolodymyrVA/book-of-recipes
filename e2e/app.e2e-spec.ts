import { BookOfRecipesPage } from './app.po';

describe('book-of-recipes App', () => {
  let page: BookOfRecipesPage;

  beforeEach(() => {
    page = new BookOfRecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

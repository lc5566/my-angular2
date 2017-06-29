import { MyAngular2Page } from './app.po';

describe('my-angular2 App', () => {
  let page: MyAngular2Page;

  beforeEach(() => {
    page = new MyAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

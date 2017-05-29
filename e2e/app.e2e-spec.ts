import { JesperSCFinalFormPage } from './app.po';

describe('jesper-scfinal-form App', () => {
  let page: JesperSCFinalFormPage;

  beforeEach(() => {
    page = new JesperSCFinalFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

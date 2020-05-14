import { AngularDockerPage } from './app.po';

describe('angular-docker App', () => {
  let page: AngularDockerPage;

  beforeEach(() => {
    page = new AngularDockerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

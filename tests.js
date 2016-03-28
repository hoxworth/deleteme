import { expect } from 'chai';

describe('the app', () => {
  it('works perfectly', () => {
    expect(true).to.equal(true);
  });
});

describe('kenny', () => {
  it('is not happy Eric actually added tests', () => {
    expect("Kenny").to.not.equal("happy");
  });
});

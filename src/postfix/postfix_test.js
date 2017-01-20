const { expect } = require('chai');
const { addPostfix } = require('./postfix');

describe('addPostfix()', () => {
  it('should add postfix to the given text', () => {
    const result = addPostfix('test', 'ly');
    expect(result).to.equal('testly');
  });

  it('should return the text given undefined postfix', () => {
    const result = addPostfix('test');
    expect(result).to.equal('test');
  });
});


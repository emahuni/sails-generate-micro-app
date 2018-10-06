/**
 * @fileOverview Contains tests that can be run as a group given particular params to work with or even none
 *               The idea is to reuse modularised test code in a variadic fashion
 * @name basic.atomics.js
 * @author Emmanuel Mahuni <emahuni@gmail.com>
 * @license MIT
 */

module.exports = async function basicAtomics (argin) {
  let whatever;

  before(`runs before any test case in this file`, async function (){
    whatever = 'blah';
  });

  context(`More context`, async function () {
    it(`can include and do variadic tests cases: ${argin}`, async function (){
      expect(Archive).to.be.an('object');
    });
  });

  it(`can run non-contextualised tests cases`, async function (){
    expect(whatever).to.contain('blah');
  });
}

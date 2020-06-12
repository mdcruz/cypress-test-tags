/// <reference types="cypress" />

import TestFilter from '../support/TestFilter';

TestFilter(['test'], () => {
  describe('Test C', () => {
    it('should run test C successfully', () => {
      expect(1 + 1).to.be.equal(2);
    });
  });
});

/// <reference types="cypress" />

import TestFilter from '../support/TestFilter';

TestFilter(['smoke'], () => {
  describe('Test B', () => {
    it('should run test B successfully', () => {
      expect(1 + 1).to.be.equal(2);
    });
  });
});

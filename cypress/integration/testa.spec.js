/// <reference types="cypress" />

import TestFilter from '../support/TestFilter';

TestFilter(['smoke'], () => {
  describe('Test A', () => {
    it('should run test A successfully', () => {
      expect(1 + 1).to.be.equal(2);
    });
  });
});

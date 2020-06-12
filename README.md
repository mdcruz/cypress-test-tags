# Cypress Tags

Sample project showing how to use a custom cypress test tags feature to run tests based on specific tags (similar to Cucumber tags).

## Running the tests

Run `npm i`

To run the tests without using the tags, just simply run `npm test`.

## Using the tagging feature

On your spec files, you can import the `TestFilter` module and pass it a tag. For example:

```code
TestFilter(['smoke'], () => {
  describe('Test A', () => {
    it('should run test A successfully', () => {
      expect(1 + 1).to.be.equal(2);
    });
  });
});
```

To run the test, simply export the environment variable CYPRESS_TEST_TAGS. For example:
`CYPRESS_TEST_TAGS=smoke npm test`

The spec file testc.spec.js will not be executed because this doesn't contain the smoke tag.

## Limitation

This will only work if your tests are encapsulated with the TestFilter block. Let's say you have two spec files. One with TestFilter and one without, the test without the TestFilter block will still be executed. To bypass this, you can pass an empty array or different tag.

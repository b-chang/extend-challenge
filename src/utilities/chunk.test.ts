import chunk from "./chunk";

test("should chunk an array properly", () => {
  const testData = Array.from(new Array(55)).map(
    (value, index) => `element ${index}`
  );
  const result = chunk(testData, 10);
  expect(result.length).toEqual(6);
  expect(result[0].length).toEqual(10);
  expect(result[5].length).toEqual(5);
});

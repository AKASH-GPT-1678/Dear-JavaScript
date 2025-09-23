const { sum, emptyArray, reverseString } = require("./fucntions/sums.js");

const dataPoints = [
    "React Native basics",
    "Jest testing fundamentals",
    "Async JavaScript patterns",
    "Node.js API development",
    "Database CRUD operations"
];
test('first test', () => {
    expect(sum()).toBe(5)
});

test('empty it', () => {
    expect(emptyArray(dataPoints)).toBe(0);
});

test('reverse string', () => {
    expect(reverseString("hello")).toBe("olleh");
})

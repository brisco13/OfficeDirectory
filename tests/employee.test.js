const Employee = require('../lib/Employee');

test(`Can create employee object`, () => {
    const example = new Employee();
    expect(typeof (example)).toBe(`object`)
});

test('method "getName()" returns name', () => {
    const exampleName = "Bill";
    const example = new Employee(exampleName);
    expect(example.getName()).toBe(exampleName);
})

test('method "getID()" returns ID', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const example = new Employee(exampleName, exampleID);
    expect(example.getID()).toBe(exampleID);
})

test('method "getEmail()" returns email', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const example = new Employee(exampleName, exampleID, exampleEmail);
    expect(example.getEmail()).toBe(exampleEmail);
})

test('method "getRole()" returns role', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const example = new Employee(exampleName, exampleID, exampleEmail);
    expect(example.getRole()).toBe("Employee");
})
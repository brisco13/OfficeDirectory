const Manager = require('../lib/Manager');

test(`Can create Manager object`, () => {
    const example = new Manager();
    expect(typeof (example)).toBe(`object`)
});

test('method "getName()" returns name', () => {
    const exampleName = "Bill";
    const example = new Manager(exampleName);
    expect(example.getName()).toBe(exampleName);
})

test('method "getID()" returns ID', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const example = new Manager(exampleName, exampleID);
    expect(example.getID()).toBe(exampleID);
})

test('method "getEmail()" returns email', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const example = new Manager(exampleName, exampleID, exampleEmail);
    expect(example.getEmail()).toBe(exampleEmail);
})

test('method "getRole()" returns role', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const example = new Manager(exampleName, exampleID, exampleEmail);
    expect(example.getRole()).toBe("Manager");
})

test('method "getOffice()" returns Office', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const exampleOffice = "Room 123"
    const example = new Manager(exampleName, exampleID, exampleEmail,exampleOffice);
    expect(example.getOffice()).toBe(exampleOffice);
})
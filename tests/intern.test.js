const Intern = require('../lib/intern');

test(`Can create Intern object`, () => {
    const example = new Intern();
    expect(typeof (example)).toBe(`object`)
});

test('method "getName()" returns name', () => {
    const exampleName = "Bill";
    const example = new Intern(exampleName);
    expect(example.getName()).toBe(exampleName);
})

test('method "getID()" returns ID', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const example = new Intern(exampleName, exampleID);
    expect(example.getID()).toBe(exampleID);
})

test('method "getEmail()" returns email', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const example = new Intern(exampleName, exampleID, exampleEmail);
    expect(example.getEmail()).toBe(exampleEmail);
})

test('method "getRole()" returns role', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const example = new Intern(exampleName, exampleID, exampleEmail);
    expect(example.getRole()).toBe("Intern");
})

test('method "getSchool()" returns school', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const exampleSchool = "DU"
    const example = new Intern(exampleName, exampleID, exampleEmail,exampleSchool);
    expect(example.getSchool()).toBe(exampleSchool);
})
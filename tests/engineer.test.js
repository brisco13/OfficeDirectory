const Engineer = require('../lib/engineer');

test(`Can create Engineer object`, () => {
    const example = new Engineer();
    expect(typeof (example)).toBe(`object`)
});

test('method "getName()" returns name', () => {
    const exampleName = "Bill";
    const example = new Engineer(exampleName);
    expect(example.getName()).toBe(exampleName);
})

test('method "getID()" returns ID', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const example = new Engineer(exampleName, exampleID);
    expect(example.getID()).toBe(exampleID);
})

test('method "getEmail()" returns email', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const example = new Engineer(exampleName, exampleID, exampleEmail);
    expect(example.getEmail()).toBe(exampleEmail);
})

test('method "getRole()" returns role', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const example = new Engineer(exampleName, exampleID, exampleEmail);
    expect(example.getRole()).toBe("Engineer");
})

test('method "getGit()" returns github username', () => {
    const exampleName = "Bill";
    const exampleID = 1234;
    const exampleEmail = "employee@mail.com";
    const exampleGit = "exampleGit"
    const example = new Engineer(exampleName, exampleID, exampleEmail,exampleGit);
    expect(example.getGit()).toBe(exampleGit);
})
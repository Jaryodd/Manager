const Intern = require('../lib/Intern');

describe('Intern Class', () => {
    it('getName', () => {
        const int = new Intern("Jaben", 5, Email, "jaben@gmail.com", School, "University of Denver")
        expect(int.getName()).toBe("Jaben");
    });
    it('getId', () => {
        const int = new Intern("Jaben", 5, Email, "jaben@gmail.com", School, "University of Denver")
        expect(int.getId()).toBe(5);
    });
    it('getEmail', () => {
        const int = new Intern("Jaben", 5, Email, "jaben@gmail.com", School, "University of Denver")
        expect(int.getEmail()).toBe("jaben@gmail.com");
    });
    it('getRole', () => {
        const int = new Intern("Jaben", 5, Email, "jaben@gmail.com", School, "University of Denver")
        expect(int.getRole()).toBe("Intern");
    });
    it('getSchool', () => {
        const int = new Intern("Jaben", 5, Email, "jaben@gmail.com", School, "University of Denver")
        expect(int.getRole()).toBe("University of Denver");
    });

});
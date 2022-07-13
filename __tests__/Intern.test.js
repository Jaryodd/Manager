const Intern = require('../lib/intern');

describe('Intern Class', () => {
    it('getName', () => {
        const int = new Intern("Jaben", 5, "jaben@gmail.com", "University of Denver")
        expect(int.getName()).toBe("Jaben");
    });
    it('getId', () => {
        const int = new Intern("Jaben", 5, "jaben@gmail.com", "University of Denver")
        expect(int.getId()).toBe(5);
    });
    it('getEmail', () => {
        const int = new Intern("Jaben", 5, "jaben@gmail.com", "University of Denver")
        expect(int.getEmail()).toBe("jaben@gmail.com");
    });
    it('getRole', () => {
        const int = new Intern("Jaben", 5, "jaben@gmail.com", "University of Denver")
        expect(int.getRole()).toBe("Intern");
    });
    it('getSchool', () => {
        const int = new Intern("Jaben", 5, "jaben@gmail.com", "University of Denver")
        expect(int.getSchool()).toBe("University of Denver");
    });

});
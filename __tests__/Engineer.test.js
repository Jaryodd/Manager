const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
    it('getName', () => {
        const eng = new Engineer("Kavion", 4, Email, "Kavion@gmail.com", GitHub, "https://github.com/Jaryodd/Manager")
        expect(eng.getName()).toBe("Kavion");
    });
    it('getId', () => {
        const eng = new Engineer("Kavion", 4, Email, "kavion@gmail.com", GitHub, "https://github.com/Jaryodd/Manager")
        expect(eng.getId()).toBe(4);
    });
    it('getEmail', () => {
        const eng = new Engineer("Kavion", 4, Email, "kavion@gmail.com", GitHub, "https://github.com/Jaryodd/Manager")
        expect(eng.getEmail()).toBe("jaryodd@gmail.com");
    });
    it('getRole', () => {
        const eng = new Engineer("Kavion", 4, Email, "kavion@gmail.com", GitHub, "https://github.com/Jaryodd/Manager")
        expect(eng.getRole()).toBe("Engineer");
    });
    it('getGitHub', () => {
        const eng = new Engineer("Kavion", 4, Email, "kavion@gmail.com", GitHub, "https://github.com/Jaryodd/Manager")
        expect(eng.getRole()).toBe("https://github.com/Jaryodd/Manager");
    });

});
const Engineer = require('../lib/engineer');

describe('Engineer Class', () => {
    it('getName', () => {
        const eng = new Engineer("Kavion", 4, "Kavion@gmail.com", "https://github.com/Jaryodd/Manager")
        expect(eng.getName()).toBe("Kavion");
    });
    it('getId', () => {
        const eng = new Engineer("Kavion", 4,"kavion@gmail.com", "https://github.com/Jaryodd/Manager")
        expect(eng.getId()).toBe(4);
    });
    it('getEmail', () => {
        const eng = new Engineer("Kavion", 4, "kavion@gmail.com", "https://github.com/Jaryodd/Manager")
        expect(eng.getEmail()).toBe("kavion@gmail.com");
    });
    it('getRole', () => {
        const eng = new Engineer("Kavion", 4, "kavion@gmail.com", "https://github.com/Jaryodd/Manager")
        expect(eng.getRole()).toBe("Engineer");
    });
    it('getGitHub', () => {
        const eng = new Engineer("Kavion", 4, "kavion@gmail.com", "https://github.com/Jaryodd/Manager")
        expect(eng.getGitHub()).toBe("https://github.com/Jaryodd/Manager");
    });

});
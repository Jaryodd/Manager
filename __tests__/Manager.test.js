const Manager = require('../lib/manager');

describe('Manager Class', () => {
    it('getName', () => {
        const man = new Manager("Dildred", 6, "dildred@gmail.com", 135 )
        expect(man.getName()).toBe("Dildred");
    });
    it('getId', () => {
        const man = new Manager("Dildred", 6, "dildred@gmail.com",  135)
        expect(man.getId()).toBe(6);
    });
    it('getEmail', () => {
        const man = new Manager("Dildred", 6, "dildred@gmail.com", 135)
        expect(man.getEmail()).toBe("dildred@gmail.com");
    });
    it('getRole', () => {
        const man = new Manager("Dildred", 6, "dildred@gmail.com", 135)
        expect(man.getRole()).toBe("Manager");
    });
    it('getofficeNumber', () => {
        const man = new Manager("Dildred", 6,  "dildred@gmail.com", 135)
        expect(man.getOfficeNumber()).toBe(135);
    });

});
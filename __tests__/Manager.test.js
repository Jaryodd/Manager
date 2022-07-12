const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    it('getName', () => {
        const man = new Manager("Dildred", 6, Email, "dildred@gmail.com", officeNumber, 135 )
        expect(man.getName()).toBe("Dildred");
    });
    it('getId', () => {
        const man = new Manager("Dildred", 6, Email, "dildred@gmail.com", officeNumber, 135)
        expect(man.getId()).toBe(6);
    });
    it('getEmail', () => {
        const man = new Manager("Dildred", 6, Email, "dildred@gmail.com", officeNumber, 135)
        expect(man.getEmail()).toBe("Dildred@gmail.com");
    });
    it('getRole', () => {
        const man = new Manager("Dildred", 6, Email, "dildred@gmail.com", officeNumber, 135)
        expect(man.getRole()).toBe("Manager");
    });
    it('getofficeNumber', () => {
        const man = new Manager("Dildred", 6, Email, "dildred@gmail.com", officeNumber, 135)
        expect(man.officeNumber()).toBe("135");
    });

});
const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    it('getName', () => {
        const emp =new Employee("Jaryodd", 3, Email, "jaryodd@gmail.com")
        expect(emp.getName()).toBe("Jaryodd");
    });
    it('getId',() => {
        const emp =new Employee("Jaryodd", 3, Email, "jaryodd@gmail.com")
        expect(emp.getId()).toBe(3);
    });
    it('getEmail', () => {
        const emp =new Employee("Jaryodd", 3, Email, "jaryodd@gmail.com")
        expect(emp.getEmail()).toBe("jaryodd@gmail.com");
    });
    it('getRole', () => {
        const emp =new Employee("Jaryodd", 3, Email, "jaryodd@gmail.com")
        expect(emp.getRole()).toBe("Employee");
    });

});


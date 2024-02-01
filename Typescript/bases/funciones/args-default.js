"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} , ${lastName || 'no last name'}`.toUpperCase();
        }
        else {
            return `${firstName} , ${lastName || 'no last name'}`;
        }
    };
    const name = fullName('tony', 'stark');
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map
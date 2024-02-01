"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} , ${lastName || 'no last name'} `;
    };
    const name = fullName('tony');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map
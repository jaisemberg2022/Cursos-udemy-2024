"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} , ${lastName}`;
    };
    const name = fullName('tony', 'stark');
    console.log({ name });
})();

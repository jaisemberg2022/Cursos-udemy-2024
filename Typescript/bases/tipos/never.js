"use strict";
(() => {
    const error = (message) => {
        if (false) {
            throw Error(message);
        }
        return 1;
    };
    error('auxilio');
})();

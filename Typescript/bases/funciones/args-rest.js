"use strict";
(() => {
    const fullNmae = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullNmae('clark', 'joseph', 'kent');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map
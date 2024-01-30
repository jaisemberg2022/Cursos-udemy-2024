"use strict";
(() => {
    let avengers = 10;
    const villanos = 20;
    if (avengers < villanos) {
        console.log('estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();

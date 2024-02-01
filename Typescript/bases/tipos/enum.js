"use strict";
(() => {
    let aduioLevel;
    (function (aduioLevel) {
        aduioLevel[aduioLevel["min"] = 0] = "min";
        aduioLevel[aduioLevel["medium"] = 1] = "medium";
        aduioLevel[aduioLevel["max"] = 2] = "max";
    })(aduioLevel || (aduioLevel = {}));
    let currentAudio = aduioLevel.max;
    console.log(currentAudio);
    console.log(aduioLevel);
})();
//# sourceMappingURL=enum.js.map
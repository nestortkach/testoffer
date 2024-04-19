const multiply = (a, b, c) => a * b * c;
const add = (a, b, c, d, e) => a + b + c + d + e;

function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

console.log(curry(add)(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5));
console.log(curry(multiply)(1)(2)(3) == multiply(1, 2, 3));

ctx.prototype.__applyObject = function (object) {
    var keys = Object.keys(object), i, key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        this[key] = object[key];
    }
};

ctx.prototype.__applyStyleState = function (styleState) {
    this.__applyObject(styleState);
};

ctx.prototype.__setDefaultStyles = function () {
    var canvasStyles = {};
    var keys = Object.keys(STYLES), i, key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        canvasStyles[key] = STYLES[key].canvas;
    }
    this.__applyObject(canvasStyles);
};

ctx.prototype.__getStyleState = function () {
    var styleState = {}, keys = Object.keys(STYLES), key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        styleState[key] = this[key];
    }
    return styleState;
};

/**
 * @return {Function}
 */
const HelloWorldFunction = function() {
    return function(...args) {
        return 'Hello World!';
    };
}
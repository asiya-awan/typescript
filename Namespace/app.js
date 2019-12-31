var CircleMath;
(function (CircleMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    CircleMath.calculateCircumference = calculateCircumference;
})(CircleMath || (CircleMath = {}));
var RectangleMath;
(function (RectangleMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    RectangleMath.calculateRectangle = calculateRectangle;
})(RectangleMath || (RectangleMath = {}));

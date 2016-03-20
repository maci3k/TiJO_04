describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });

    describe("GetDescendingNumbers function", function() {
        it("should return false when numberTo is greater or equal than numberFrom", function() {
            expect(app.getDescendingNumbers(4,5)).toEqual(false);
            expect(app.getDescendingNumbers(4,4)).toEqual(false);
        });
        it("should return false when numberFrom is not numeric", function() {
            expect(app.getDescendingNumbers("a",5)).toEqual(false);
        });
        it("should return false when numberTo is not numeric", function() {
            expect(app.getDescendingNumbers(4,"5")).toEqual(false);
        });
        it("should return string when numberFrom is numeric, numberTo is numeric, numberFrom > numberTo", function() {
            expect(app.getDescendingNumbers(10, 5)).toEqual('10 9 8 7 6 5');
        });
    });

    describe("AreaOfTrapezoid function", function() {
        it("should return false when a is less than 0", function() {
            expect(app.areaOfTrapezoid(-1, 2, 3)).toEqual(false);
        });
        it("should return false when b is less than 0"), function() {
            expect(app.areaOfTrapezoid(1, -2, 3)).toEqual(false);
        };
        it("should return false when h is less than 0"), function() {
            expect(app.areaOfTrapezoid(1, 2, -3)).toEqual(false);
        };
        it("should return false when a is not numeric", function() {
            expect(app.areaOfTrapezoid("1", 2, 3)).toEqual(false);
        });
        it("should return false when b is not numeric"), function() {
            expect(app.areaOfTrapezoid(1, "2", 3)).toEqual(false);
        };
        it("should return false when h is not numeric"), function() {
            expect(app.areaOfTrapezoid(1, 2, "3")).toEqual(false);
        };
        it("should return area of trapezoid", function() {
            expect(app.areaOfTrapezoid(5, 5, 5)).toEqual(25);
        })
    });

    describe("MaxArray function", function() {
        it("should return max number in array of numbers", function() {
            expect(app.maxArray([1,2,3])).toEqual(3);
            expect(app.maxArray([2,4,4,3])).toEqual(4);
        });
        it("should return false when array isn't numeric", function() {
            expect(app.maxArray([1,"a",3])).toEqual(false);
        });
    });

    describe("SquareOdd function", function() {
        it("should pow() every odd number in array", function() {
            expect(app.squareOdd([1, 3, 5])).toEqual([1, 9, 25]);
            expect(app.squareOdd([2, 4, 6])).toEqual([2, 4, 6]);
            expect(app.squareOdd(["10", 3, "50"])).toEqual(["10", 9, "50"]);
        });
        it("should return false when array element isn't number or string", function() {
            expect(app.squareOdd([[1]])).toEqual(false);
        });
    });
});

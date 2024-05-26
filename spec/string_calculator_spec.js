describe('Electrons Around The Corners', function(){
    it('Is the result 6 of the array [1, 2, 3, 4, 5]?', function(){
        const array = [1, 2, 3, 4, 5];
        expect(calculateSum(array)).toEqual(6);
    });

	it('Is the result 4 of the array [2, 2, 3, 3]?', function(){
        const array = [2, 2, 3, 3];
        expect(calculateSum(array)).toEqual(4);
    });

    it('Is the result 2 of the array [6, 6, 4, 4, 1, 3]?', function() {
        const array = [6, 6, 4, 4, 1, 3];
        expect(calculateSum(array)).toEqual(2);
    });

	it('Is the result 12 of the array [3, 5, 3, 5, 4, 2]?', function() {
        const array = [3, 5, 3, 5, 4, 2];
        expect(calculateSum(array)).toEqual(12);
    });
});
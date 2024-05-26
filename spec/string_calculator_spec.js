describe('Electrons Around The Corners', function(){
    it('Is the result 6 of the array [1, 2, 3, 4, 5]?', function(){
        const array = [1, 2, 3, 4, 5];
        expect(calculateSum(array)).toEqual(6);
    });

	it('Is the result 4 of the array [2, 2, 3, 3]?', function(){
        const array = [2, 2, 3, 3];
        expect(calculateSum(array)).toEqual(4);
    });

    it('If the array is [6, 6, 4, 4, 1, 3] the result should be 4', function() {
        const array = [6, 6, 4, 4, 1, 3];
        expect(calculateSum(array)).toEqual(2);
    });
});
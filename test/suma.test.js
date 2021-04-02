const suma = (a, b)=>{
    if(!a || !b){return undefined}
    
    return a + b
}

describe('suma', () => {
    test('the sum 2 + 5 is equal 7 ', () => {
        expect(suma(2,5)).toBe(7)
    });
    test('if not happen a param',()=>{
        expect(suma(3,)).toBeUndefined()
    })

});

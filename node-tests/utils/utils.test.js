const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two number', () => {
                var res = utils.add(33, 11);
            
                expect(res).toBe(44).toBeA('number');
            });
            
            it('shoud async add two numbers', (done) => {
                utils.asyncAdd(4, 3, (sum) => {
                    expect(sum).toBe(7).toBeA('number');
                    done();
            });
         });
    });
    describe('#square', () => {
        it('shoud async square a number', (done) => {
            utils.asyncSquare(4, (square) => {
                expect(square).toBe(16).toBeA('number');
                done();
            });
        });
        
        it('should square a number', () => {
            var res = utils.square(10);
        
            expect(res).toBe(100).toBeA('number');
        });    
    });
});

// Should verify that first and last names are set
//Asssert it includes firstName and lastName with proper values

it('Should verify that first and last names are set', () => {
    var user = {
        name: 'Jimmy Hughes',
        age:25,
        location: 'Atlanta'
    }

    var res = utils.setName(user, user.name);

    expect(res).toInclude({
        firstName: 'Jimmy',
        lastName: 'Hughes',
    });
});

// it('should expect some value', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Jimmy'}).toNotEqual({name: 'jimmy'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Jimmy',
//         age: 25,
//         location: 'Atlanta'
//     }).toExclude({
//         age: 23
//     })
// });
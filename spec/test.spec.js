const Repository = require('../scripts/index')
const Activity = require('../scripts/index')

describe('Clase Repository',()=>{
    it('Hay una clase Repository',()=>{
        expect(typeof Repository).toBe('function')
    })
})
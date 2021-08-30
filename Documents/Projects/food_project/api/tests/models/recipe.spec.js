const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('title and summary null', () => {
      it('should throw an error if the plate summary is null', async() => {
       try {
         await Recipe.create({title: 'tituloDeprueba'})
       } catch (error) {
         expect(error.message).to.equal('It requires a valid name and a valid summary!')
       }
        
      })
      it('should work when its a valid name and a valid summary', () => {
        Recipe.create({ title: 'Milanesa a la napolitana', summary: 'Best plato ever' });
      });
    });
  });
});

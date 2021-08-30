/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'Milanesa a la napolitana',
  summary: 'prueba'
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
    
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
    
  });

  describe("GET /recipes", () => {
    it("should get 200", () => agent.get("/recipes").expect(200));
    it("should get a json", () =>
      agent.get("/recipes").expect("Content-Type", /json/));
    it("should get all recipes matching the query", () =>
      agent
        .get("/recipes")
        .query({ name: "chicken" })
        .then((res) => {
          expect(res.body).to.have.lengthOf.above(0);
        }));
  });

  describe("GET /recipes/:idReceta", () => {
    it("should get 200", () => agent.get("/recipes/716426").expect(200));
    it("should get one recipe in json", () =>
      agent.get("/recipes/716426").expect("Content-Type", /json/));
    it("should get one recipe", () =>
      agent.get("/recipes/716426").then((res) => {
        expect(res.body).to.not.be.an("array");
      }));
  });

 

 
});

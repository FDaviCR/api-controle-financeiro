let supertest = require('supertest');
let request = supertest('http://localhost:3000');

describe('Testes de aplicação', () => {
    test("Aplicação deve responder na porta 3000", () => {
        request.get("/").then(res => expect(res.statusCode).toEqual(200));
    })
})
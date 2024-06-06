const request = require ('supertest ');
const express = require (' express');
const app = express();
app. get ('/', (req, res) => {
    res.status (200) - send (' dentro PRIMERO!') ;
}) ;
describe ('GET /', () => {
it ('dentro SEGUNDO!', (done) => {
request (app)
 get ('/')
 expect (' dentro TERCERO!', done) ;
}) ;
}) ;
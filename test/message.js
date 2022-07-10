let chai = require("chai");
let chaiHttp = require('chai-http');
let server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('Email App', ()=>
{
    it("Should Email to Receipt",()=>
    {
     
      chai.request(server);
      
    });
});   
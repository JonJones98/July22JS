const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");
const createUser =()=>{
  const userFake={
  firstName:faker.commerce.productName(), 
  lastName:faker.commerce.productName(),
  email:faker.internet.email(),
  password:faker.commerce.password(), 
  phoneNumber:faker.phone.phoneNumber(),
  _id: faker.datatype.uuid()
};
return userFake;
};
const createCompany =()=>{
  const companyFake={
  _id: faker.datatype.uuid(),
  name:faker.commerce.productName(), 
  address:(faker.address.street(),faker.address.city(),faker.address.state(),faker.address.zipCode(),faker.address.country())
};
return companyFake;
};

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  res.json({createUser});
});
app.get("/api/companies/new", (req, res) => {
  res.json({createCompany});
});
app.get("/api/user/company", (req, res) => {
  res.json({createUser,createCompany });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
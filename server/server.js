/* eslint-disable no-console */
const express = require('express');
const bodyPars = require('body-parser');
const db = require('./db');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyPars.json());
app.use(bodyPars.urlencoded({ extended: false }));

app.get('/person/:name', (req, res) => {
  const { name } = req.params;
  if (name === 'name') {
    return res.status(200).send(db.name);
  }
  return res.status(404).send({
    error: 'error',
  });
});

app.get('/facility/:person', (req, res) => {
  const { person } = req.params;
  db.facility.map((val) => {
    if (val.name === person) {
      return res.status(200).send(val.facility);
    }
  });
  return res.status(404).send({
    error: 'error',
  });
});

app.get('/exposure/:facility', (req, res) => {
  const { facility } = req.params;
  db.exposure.map((val) => {
    if (val.facility === facility) {
      return res.status(200).send(val.exposure);
    }
  });
  return res.status(404).send({
    error: 'error',
  });
});


app.listen(8000, () => console.log('app is running'));

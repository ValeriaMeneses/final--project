const Router = require('express').Router;
const fs = require('fs-extra');
const CV = require('../models/CV.js');
const Notes = require('../models/Notes.js');


const apiRouter = Router();

function getCVs(req, res) {
  CV
    .query()
    .then(data => res.json(data));
}

function getCvId(req, res) {
  CV
    .query()
    .findById(req.params.id)
    .then(cv => {
      return res.json(cv).status(200)
    })
    .catch(error => {
      return res.send(error).status(500)
    });
}

function createCV(req, res) {
  CV
    .query()
    .insert(req.body)
    .then(newCv =>{
      return res.json(newCv).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })

}

function getNotes(req, res) {
  Notes
    .query()
    .then(data => res.json(data));
}

function createNote(req, res) {
  Notes
    .query()
    .insert(req.body)
    .then(newNote =>{
      return res.json(newNote).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })

}

apiRouter
  .get('/cvs', getCVs)
  .get('/cvs/:id', getCvId)
  .post('/cvs', createCV);

apiRouter
  .get('/notes', getNotes)
  .post('/notes', createNote);

module.exports = apiRouter;

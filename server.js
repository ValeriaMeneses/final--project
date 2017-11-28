const express = require('express');
const fs = require('fs-extra');
const ejs = require('ejs');
const { Model } = require('objection');

const connectToDb = require('./src/database/dbConnect.js');
const dbConfigObj = require('./knexfile.js');

const app = express();

const appDb = connectToDb(dbConfigObj.development);

Model.knex(appDb);

app.locals.db = appDb;

app.engine('ejs', ejs.renderFile);
app.set('views engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

const pageRouter = require('./src/routes/pageRouter.js');
const apiRouter = require('./src/routes/apiRouter.js');

app.use('/', pageRouter);
app.use('/api', apiRouter);
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  res.render('404.ejs')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
  console.log(`APP LISTENING ON PORT ${PORT}`);
})

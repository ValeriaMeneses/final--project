const Router = require('express').Router;
const fs = require('fs-extra');

const apiRouter = Router();

apiRouter
  .get('/cvs', (req, res) => {
    res.json([
              {
                title: 'SQL Server Administrator - Postgres',
                description: 'Bring to the table win-win survival strategies to ensure proactive domination. User generated content in real-time will have multiple touchpoints for offshoring.',
                location: 'Guadalajara',
                salary: 27000,
                fullTime: true,
                companyId: 1
              }
            ]);
});

module.exports = apiRouter;

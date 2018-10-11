const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));

const fakeData = [
    {
        company: 'Compañía',
        position: 'Puesto',
        level: [],
        laboral_regimen: [],
        username: 'millan',
        colective_pact: '',
        date: '2018/09/04',
        increase_salary: 1000,
        range: '',
        percentage: 70
    },
    {
        company: 'Compañía',
        position: 'Puesto',
        level: [],
        laboral_regimen: [],
        username: 'millan',
        colective_pact: '',
        date: '2018/09/04',
        increase_salary: 1000,
        range: '',
        percentage: 70
    },
    {
        company: 'Compañía',
        position: 'Puesto',
        level: [],
        laboral_regimen: [],
        username: 'millan',
        colective_pact: '',
        date: '2018/09/04',
        increase_salary: 1000,
        range: '',
        percentage: 70
    },
    {
        company: 'Compañía',
        position: 'Puesto',
        level: [],
        laboral_regimen: [],
        username: 'millan',
        colective_pact: '',
        date: '2018/09/04',
        increase_salary: 1000,
        range: '',
        percentage: 70
    }
];

app.get('/', (req, res) => res.json({ data: fakeData }));

app.post('/', (req, res) => {
    fakeData.push(req.body);
    res.json(req.body);
});


app.listen(3001, () => console.log(`Server listening by the 3001 port!`));

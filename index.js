require('dotenv').config();

const app = require('./app');
const dbConnection = require('./src/db/dbConnection');

const {PORT} = process.env || 8080;

const start = async () => {
    try {
        await dbConnection();
        console.log('DB connected.');

        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}.`)
        });
    } catch (error) {
        console.error('Failed');
    };
};

start();

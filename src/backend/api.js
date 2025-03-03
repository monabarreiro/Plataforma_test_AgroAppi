

import express from 'express';
import cors from 'cors';
import functions from 'firebase-functions';

const app = express();
app.use(cors({ origin: true }));


app.get('/Hello', (req, res) => {
    res.send('Hello from Firebase!');
}
);

export const api = functions.https.onRequest(app);








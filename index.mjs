import express from 'express';

const app = express();
app.use(express.json());

const closeDate = Date.now() + 1000 * 60 * 60 * 24 * 7;

app.get('/round/current', (req, res) => {
    res.json({
        round: 1,
        closeDate
    });
});

app.post('/round/current/bet', (req, res) => {
    const { numbers } = req.body;
    if (numbers.length !== 6) {
        res.status(400).json({
            error: 'invalid numbers'
        });
        return;
    }
    res.status(201).json({
        id: 1
    });
});

export default app;
import express from 'express';

const app = express();
app.use(express.json());

const close_at = Date.now() + 1000 * 60 * 60 * 24 * 7;

app.get('/current', (req, res) => {
    res.json({ close_at });
});

app.post('/bet', (req, res) => {
    const { numbers } = req.body;
    if (!numbers || numbers.length !== 6) {
        res.status(400).json({ error: 'invalid numbers' });
        return;
    }
    res.status(201).json({ id: '1234567890' });
});

export default app;
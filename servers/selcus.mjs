import express from 'express';
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Hey I'm selCus!");
});

app.listen(port, () => {
    console.log(`selCus server is spinning at http://localhost:${port}`);
});

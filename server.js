require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (request, response) => {
  const shows = await prisma.shows.findMany();
  response.json(shows);
});

app.get('/shows', () => {});
app.get('/packages/:id', () => {});

app.listen(PORT, () => {
  console.log(`server http://localhost:${PORT} running...`);
});

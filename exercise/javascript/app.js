const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
app.use(bodyParser.json());

let db;

(async () => {
  // Open or create the SQLite database
  db = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });

  // Create the items table if it doesn't exist
  await db.exec('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, quantity INTEGER)');
})();

app.get('/items', async (req, res) => {
  const items = await db.all('SELECT * FROM items');
  res.json(items);
});

app.post('/items', async (req, res) => {
  const { name, quantity } = req.body;
  const result = await db.run('INSERT INTO items (name, quantity) VALUES (?, ?)', [name, quantity]);
  const newItem = await db.get('SELECT * FROM items WHERE id = ?', result.lastID);
  res.json(newItem);
});

app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  await db.run('UPDATE items SET name = ?, quantity = ? WHERE id = ?', [name, quantity, id]);
  const updatedItem = await db.get('SELECT * FROM items WHERE id = ?', id);
  res.json(updatedItem);
});

app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  await db.run('DELETE FROM items WHERE id = ?', id);
  res.json({ message: 'Item deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

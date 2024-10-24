 const express = require('express');
const app = express();
const PORT=3000;
const items = [
  { name: "Country", category: "India" },
  { name: "Book", category: "Physics" },
  { name: "Colour", category: "Red" },
  { name: "Fruit", category: "Orange" },
  {name: "Colour" , category: "Yellow"}
];
app.set('view engine', 'ejs');
app.get('/search', (req, res) => {
  const query = req.query.q;
  let results = [];

  if (query) {
    results = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }

  res.render('search', { query, results });
});

app.listen(3000, () => {
  console.log(listening on port ${PORT});
});
[9:51 am, 24/10/2024] +91 6284 448 162: <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search</title>
</head>
<body>
  <h1>Search Items</h1>
  <form action="/search" method="get">
    <input type="text" name="q" placeholder="Search for items..." value="<%= query %>">
    <button type="submit">Search</button>
  </form>
   <h2>Search Results for "<%= query %>"</h2>
  <% if (!query) { %>
    <p>Please enter a search term.</p>
  <% } else if (results.length === 0) { %>
    <p>No results found for "<%= query %>".</p>
  <% } else { %>
    <ul>
      <% results.forEach(item => { %>
        <li><%= item.name %> - <%= item.category %></li>
      <% }) %>
    </ul>
  <% } %>
</body>
</html>
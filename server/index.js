const express = require("express");

const path = require('path')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false}))
const sqlite3 = require('sqlite3').verbose();

function createDatabase() {
  const newdb = new sqlite3.Database('./db/recipes.db', (err) => {
      if (err) {
          console.log("Getting error " + err);
          exit(1);
      }
      createTables(newdb);
  });
}

function createTables(newdb) {
  newdb.exec(`
  CREATE TABLE recipes(
          recipe_id int primary key,
          title text not null,
          description  text not null,
          ingredients text not null,
          instructions text not null
      );`
  );
}



const db = new sqlite3.Database('./db/recipes.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
      createDatabase();
      return;
      } else if (err) {
          console.log("Getting error " + err);
          exit(1);
    }
    console.log('Connected to the in-memory SQlite database.');
});



// db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });




  // db.run(sql, [2, "my name jeff", "dsdsdsds", "this is tastey"], (err) => {
  //   if (err) {
  //     return console.error(err.message);
  //   }
  //   console.log('A new row has been made')
  // })

const data = []

const getCurrentData = () => db.all(`SELECT * FROM recipes`, [], (err,rows) => {
  if (err) {
    return console.error(err.message);
  }
  rows.forEach((row) => {
    data.push(row)
  });
});

getCurrentData()

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  getCurrentData()
  res.json({data});
});

const addSQL = `INSERT INTO recipes (
  recipe_id,
  title,
  description,
  ingredients,
  instructions
  )
  VALUES(?,?,?,?,?)

`

app.post('/api', (req, res) => {
  const currentDBLength = data.length

   db.run(addSQL, [currentDBLength + 1,req.body.title, req.body.description, req.body.ingredients, req.body.instructions], (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(req.body)
    getCurrentData()
    res.send("Added recipe to list" )
  })
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


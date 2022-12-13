const express = require("express");

const path = require('path')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false}))
const sqlite3 = require('sqlite3').verbose();

// function createDatabase() {
//   const newdb = new sqlite3.Database('recipes.db', (err) => {
//       if (err) {
//           console.log("Getting error " + err);
//           exit(1);
//       }
//       createTables(newdb);
//   });
// }

// function createTables(newdb) {
//   newdb.exec(`
//   create table recipe (
//       recipe_id int primary key not null,
//       title text not null,
//       image text not null,
//       discription text not null
//   );
//   insert into hero (hero_id, hero_name, is_xman, was_snapped)
//       values (1, 'Spiderman', 'N', 'Y'),
//              (2, 'Tony Stark', 'N', 'N'),
//              (3, 'Jean Grey', 'Y', 'N');

//   create table hero_power (
//       hero_id int not null,
//       hero_power text not null
//   );

//   insert into hero_power (hero_id, hero_power)
//       values (1, 'Web Slinging'),
//              (1, 'Super Strength'),
//              (1, 'Total Nerd'),
//              (2, 'Total Nerd'),
//              (3, 'Telepathic Manipulation'),
//              (3, 'Astral Projection');
//       `, ()  => {
//           runQueries(newdb);
//   });
// }

const db = new sqlite3.Database('./db/recipes.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// db.run(`
//   CREATE TABLE recipes(
//           recipe_id int primary key not null,
//           title,
//           image,
//           discription
//       );`
// )

const addSQL = `INSERT INTO recipes (
            recipe_id,
            title,
            image,
            discription)
            VALUES(?,?,?,?)

  `

  // db.run(sql, [2, "my name jeff", "dsdsdsds", "this is tastey"], (err) => {
  //   if (err) {
  //     return console.error(err.message);
  //   }
  //   console.log('A new row has been made')
  // })

const data = []

db.all(`SELECT * FROM recipes`, [], (err,rows) => {
  if (err) {
    return console.error(err.message);
  }
  rows.forEach((row) => {
    data.push(row)
  });
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({data});
});

app.post('/api', (req, res) => {
  let newIndex = data.length + 1

   db.run(addSQL, [newIndex, req.body.title, req.body.image, req.body.discription], (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(req.body)
    res.send("Added recipe to list" )
  })


    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


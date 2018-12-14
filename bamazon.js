var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "123456",
  database: "bamazone_db"

});

connection.connect(function (err) {
  if (err) throw err;
  afterConnection();

});

function afterConnection() {
  connection.query("SELECT * from products", function (err, res) {
      if (err) throw err;
         console.table(res);
          // connection.end();
          start(res);
        });
    

}


function start(itemTable) {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What item ID would you like to buy?",
        validate: function (value
        ) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "unit",
        type: "input",
        message: "How many units of the product you would like to buy?",
        validate: function (value
        ) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
    ])
    .then(function (answer) {
      var itemFound = false;
      itemTable.forEach(function (element) {
        if (element.id == answer.id) {
          itemFound = true;
          if(element.stock_quantity>= answer.unit){
            element.stock_quantity -=answer.unit;
            connection.query('UPDATE products SET stock_quantity = ? WHERE id = ?',
            [element.stock_quantity, element.id],
            function (error, results) {
              if (error) { console.log("Error!!!", error); }
            });
          }
          else
          {
            console.log("\n Not enough Items, 81 !!! \n");
          }
        }
    }) 
    if (itemFound==false)
    {
      console.log("\n Item not found, enter correct item ID!!! \n");
    }
    console.table(itemTable); 
    start(itemTable);
  });

  //this causes an infinate loop
  //start(itemTable);
};
  

package main

import (
	"database/sql"
	"fmt"
	"github.com/recipr/recipr/api"
	"github.com/recipr/recipr/db"
	"log"
)

var dbConnection *sql.DB

func main() {
	dbConnection, _ = db.ConnectToDb()
	err := api.StartAPI(dbConnection)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Listening...")
	}

	defer dbConnection.Close()
}

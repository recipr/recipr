package db

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

func ConnectToDb() (db *sql.DB, err error) {
	connection, err := sql.Open("mysql", "recipr:test1234@/recipr")
	if err != nil {
		return nil, err
	}
	db = connection

	err = db.Ping()
	if err != nil {
		createDatabase()
	}

	return db, err
}

func createDatabase() {
	//Todo
}

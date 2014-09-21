package db

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/recipr/recipr/conf"
	"log"
)

var config conf.Configuration

func ConnectToDb() (db *sql.DB, err error) {
	config = conf.Load()
	connection, err := sql.Open(getDataSourceName())
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

func getDataSourceName() (string, string) {
	conf := config.Database
	return conf.Type, fmt.Sprintf("%s:%s@%s/%s", conf.User, conf.Pass, conf.Host, conf.Name)
}

func createDatabase() {
	//Todo: try to generate database from dump
	log.Fatal("Databse not found")
}

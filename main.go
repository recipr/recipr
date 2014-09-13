package main

import (
	"database/sql"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/recipr/recipr/db"
	"github.com/recipr/recipr/handler"
	"github.com/recipr/recipr/rest"
	"net/http"
)

var dbConnection *sql.DB

func main() {
	dbConnection, _ = db.ConnectToDb()
	startWebServer()

	defer dbConnection.Close()
}

func startWebServer() {
	fmt.Println("Listening...")
	http.Handle("/", getRestRouter())
	http.ListenAndServe(":1337", nil)
}

func getRestRouter() *mux.Router {
	router := mux.NewRouter()
	restRoute := router.PathPrefix("/rest/").Subrouter()

	recipeRoute := restRoute.PathPrefix("/recipes/").Subrouter()
	recipeHandler := new(handler.Recipe)
	recipeHandler.Db = dbConnection
	rest.Router(recipeRoute, recipeHandler)

	userRoute := restRoute.PathPrefix("/users/").Subrouter()
	rest.Router(userRoute, new(handler.User))

	return router
}

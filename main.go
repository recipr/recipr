package main

import (
	"database/sql"
	"fmt"
	"github.com/ant0ine/go-json-rest/rest"
	"github.com/recipr/recipr/api"
	"github.com/recipr/recipr/conf"
	"github.com/recipr/recipr/db"
	"log"
	"net/http"
)

var dbConnection *sql.DB

func main() {
	dbConnection, _ = db.ConnectToDb()
	startAPI()

	defer dbConnection.Close()
}

func startAPI() {

	handler := rest.ResourceHandler{
		EnableRelaxedContentType: true,
	}

	recipeHandler := new(api.Recipe)
	recipeHandler.Db = dbConnection
	err := handler.SetRoutes(
		rest.RouteObjectMethod("GET", "/api/recipes/", recipeHandler, "Get"),
		rest.RouteObjectMethod("POST", "/api/recipes/", recipeHandler, "Post"),
		rest.RouteObjectMethod("GET", "/api/recipes/:id", recipeHandler, "Get"),
		rest.RouteObjectMethod("DELETE", "/api/recipes/:id", recipeHandler, "Delete"),
	)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Listening...")

	conf := conf.Load()
	log.Fatal(http.ListenAndServe(conf.Api.Address, &handler))
}

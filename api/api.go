package api

import (
	"database/sql"
	"github.com/ant0ine/go-json-rest/rest"
	"github.com/recipr/recipr/conf"
	"net/http"
)

func StartAPI(dbConnection *sql.DB) error {

	handler := rest.ResourceHandler{
		EnableRelaxedContentType: true,
	}

	recipeHandler := new(Recipe)
	recipeHandler.Db = dbConnection
	err := handler.SetRoutes(
		rest.RouteObjectMethod("GET", "/api/recipes/", recipeHandler, "Get"),
		rest.RouteObjectMethod("POST", "/api/recipes/", recipeHandler, "Post"),
		rest.RouteObjectMethod("GET", "/api/recipes/:id", recipeHandler, "Get"),
		rest.RouteObjectMethod("DELETE", "/api/recipes/:id", recipeHandler, "Delete"),
	)
	if err != nil {
		return err
	}

	conf := conf.Load()
	return (http.ListenAndServe(conf.Api.Address, &handler))
}

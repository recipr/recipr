package handler

import (
	"database/sql"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/recipr/recipr/model"
	"github.com/recipr/recipr/rest"
	"github.com/recipr/recipr/tools"
	"github.com/recipr/recipr/validate"
	"log"
	"net/http"
	"strconv"
)

type Recipe struct {
	rest.BaseHandler
	Db *sql.DB
}

func (handler *Recipe) Get(writer http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	id, err := strconv.Atoi(params["id"])

	if err != nil {
		id = 0
	}

	var recipes []model.Recipe

	if id != 0 {
		recipes, err = model.GetRecipeById(handler.Db, id)
	} else {
		recipes, err = model.GetAllRecipes(handler.Db)
	}

	if err != nil {
		log.Fatal(err)
	}

	fmt.Fprintln(writer, recipes)
}

func (handler *Recipe) Post(writer http.ResponseWriter, request *http.Request) {
	name := request.FormValue("name")
	intro := request.FormValue("intro")
	slug := request.FormValue("slug")
	if !validate.IsEmptyString(slug) {
		slug = tools.PrettyUrl(name)
	}

	time := tools.GetTimestamp()
	status := 0

	recipe := new(model.Recipe)
	recipe.Name = name
	recipe.Intro = intro
	recipe.Slug = slug
	recipe.DateCreated = time
	recipe.DateModified = time
	recipe.Status = status

	recipe, err := model.AddRecipe(handler.Db, recipe)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Fprintln(writer, recipe)
}

func (handler *Recipe) Delete(writer http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	id, err := strconv.Atoi(params["id"])

	if err != nil {
		id = 0
	}

	if id == 0 {
		return
	}

	count, err := model.DeleteRecipe(handler.Db, id)
	if err != nil {
		log.Fatal(err)
	}

	if count == 0 {
		fmt.Fprintln(writer, "not deleted")
	} else {
		fmt.Fprintln(writer, "deleted")
	}
}

package api

import (
	"database/sql"
	"github.com/ant0ine/go-json-rest/rest"
	"github.com/recipr/recipr/model"
	"github.com/recipr/recipr/tools"
	"github.com/recipr/recipr/validate"
	"log"
	"strconv"
)

type Recipe struct {
	Db *sql.DB
}

func (handler *Recipe) Get(writer rest.ResponseWriter, request *rest.Request) {
	id, err := strconv.Atoi(request.PathParam("id"))
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

	writer.WriteJson(&recipes)
}

func (handler *Recipe) Post(writer rest.ResponseWriter, request *rest.Request) {
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

	writer.WriteJson(recipe)
}

func (handler *Recipe) Delete(writer rest.ResponseWriter, request *rest.Request) {
	id, err := strconv.Atoi(request.PathParam("id"))

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
		writer.WriteJson(false)
	} else {
		writer.WriteJson(true)
	}
}

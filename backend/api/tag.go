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

type Tag struct {
	Db *sql.DB
}

func (handler *Tag) Get(writer rest.ResponseWriter, request *rest.Request) {
	id, err := strconv.Atoi(request.PathParam("id"))
	if err != nil {
		id = 0
	}

	var tags []model.Tag

	if id != 0 {
		tags, err = model.GetTagById(handler.Db, id)
	} else {
		tags, err = model.GetAllTags(handler.Db)
	}

	if err != nil {
		log.Fatal(err)
	}

	writer.WriteJson(&tags)
}

func (handler *Tag) Post(writer rest.ResponseWriter, request *rest.Request) {
	name := request.FormValue("name")
	slug := request.FormValue("slug")

	if !validate.IsEmptyString(slug) {
		slug = tools.PrettyUrl(name)
	}

	tag := new(model.Tag)
	tag.Name = name
	tag.Slug = slug

	tag, err := model.AddTag(handler.Db, tag)
	if err != nil {
		log.Fatal(err)
	}

	writer.WriteJson(tag)
}

func (handler *Tag) Delete(writer rest.ResponseWriter, request *rest.Request) {
	id, err := strconv.Atoi(request.PathParam("id"))

	if err != nil {
		id = 0
	}

	if id == 0 {
		return
	}

	count, err := model.DeleteTag(handler.Db, id)
	if err != nil {
		log.Fatal(err)
	}

	if count == 0 {
		writer.WriteJson(false)
	} else {
		writer.WriteJson(true)
	}
}

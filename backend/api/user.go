package api

import (
	"github.com/ant0ine/go-json-rest/rest"
)

type User struct {
}

func (handler *User) Get(writer rest.ResponseWriter, request *rest.Request) {
	writer.WriteJson("get all users")
}

package handler

import (
	"fmt"
	"github.com/recipr/recipr/rest"
	"net/http"
)

type User struct {
	rest.BaseHandler
}

func (handler *User) Get(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprint(writer, "get all users")
}

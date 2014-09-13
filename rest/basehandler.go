package rest

import (
	"net/http"
)

type BaseHandler struct{}

func (handler *BaseHandler) Get(writer http.ResponseWriter, request *http.Request) {
	http.Error(writer, http.StatusText(501), 501)
}

func (handler *BaseHandler) Post(writer http.ResponseWriter, request *http.Request) {
	http.Error(writer, http.StatusText(501), 501)
}

func (handler *BaseHandler) Put(writer http.ResponseWriter, request *http.Request) {
	http.Error(writer, http.StatusText(501), 501)
}

func (handler *BaseHandler) Patch(writer http.ResponseWriter, request *http.Request) {
	http.Error(writer, http.StatusText(501), 501)
}

func (handler *BaseHandler) Delete(writer http.ResponseWriter, request *http.Request) {
	http.Error(writer, http.StatusText(501), 501)
}

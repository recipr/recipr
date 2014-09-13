package rest

import (
	"github.com/gorilla/mux"
)

func Router(router *mux.Router, handler Handler) *mux.Router {
	router.HandleFunc("/", handler.Get).Methods("GET")
	router.HandleFunc("/", handler.Post).Methods("POST")

	router.HandleFunc("/{id:[0-9]+}", handler.Get).Methods("GET")
	router.HandleFunc("/{id:[0-9]+}", handler.Put).Methods("PUT")
	router.HandleFunc("/{id:[0-9]+}", handler.Patch).Methods("PATCH")
	router.HandleFunc("/{id:[0-9]+}", handler.Delete).Methods("DELETE")

	return router
}

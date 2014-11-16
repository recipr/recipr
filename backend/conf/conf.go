package conf

import (
	"encoding/json"
	"log"
	"os"
)

type Configuration struct {
	Api struct {
		Address string
	}

	Database struct {
		Type string
		User string
		Pass string
		Host string
		Name string
	}
}

func Load() Configuration {
	file, err := os.Open("config.json")
	if err != nil {
		log.Fatal(err)
	}
	decoder := json.NewDecoder(file)
	configuration := Configuration{}
	err = decoder.Decode(&configuration)
	if err != nil {
		log.Fatal(err)
	}

	return configuration
}

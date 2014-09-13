package tools

import (
	"log"
	"regexp"
	"strings"
	"time"
)

func PrettyUrl(str string) string {
	reg, err := regexp.Compile("[^A-Za-z0-9]+")
	if err != nil {
		log.Fatal(err)
	}
	prettyUrl := reg.ReplaceAllString(str, "-")
	prettyUrl = strings.ToLower(strings.Trim(prettyUrl, "-"))

	return prettyUrl
}

func GetTimestamp() int {
	return int(time.Now().Unix())
}

package validate

import (
	"strings"
)

func IsEmptyString(str string) bool {
	if len(strings.TrimSpace(str)) == 0 {
		return false
	}
	return true
}

package httpin

import (
	"net/http"
	"net/url"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDirectiveDefault(t *testing.T) {
	type ThingWithDefaultValues struct {
		Page      int      `in:"form=page;default=1"`
		PerPage   int      `in:"form=per_page;default=20"`
		StateList []string `in:"form=state;default=pending,in_progress,failed"`
	}

	r, _ := http.NewRequest("GET", "/", nil)
	r.Form = url.Values{
		"page":  {"7"},
		"state": {},
	}
	expected := &ThingWithDefaultValues{
		Page:      7,
		PerPage:   20,
		StateList: []string{"pending", "in_progress", "failed"},
	}
	core, err := New(ThingWithDefaultValues{})
	assert.NoError(t, err)
	got, err := core.Decode(r)
	assert.NoError(t, err)
	assert.Equal(t, expected, got)
}
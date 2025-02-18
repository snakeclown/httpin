package httpin

import (
	"net/http"
	"net/url"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

func TestDirectiveRequired_RequiredFieldMissing(t *testing.T) {
	r, _ := http.NewRequest("GET", "/", nil)
	r.Form = url.Values{
		"color":      {"red"},
		"is_soldout": {"true"},
		"sort_by":    {"id", "quantity"},
		"sort_desc":  {"0", "true"},
		"page":       {"1"},
		"per_page":   {"20"},
	}
	core, err := New(&ProductQuery{})
	assert.NoError(t, err)
	_, err = core.Decode(r)
	assert.ErrorIs(t, err, ErrMissingField)
	var invalidField *InvalidFieldError
	assert.ErrorAs(t, err, &invalidField)
	assert.Equal(t, "required", invalidField.Source)
	assert.Empty(t, invalidField.Key)
	assert.Nil(t, invalidField.Value)
}

func TestDirectiveRequired_NonRequiredFieldAbsent(t *testing.T) {
	r, _ := http.NewRequest("GET", "/", nil)
	r.Form = url.Values{
		"created_at": {"1991-11-10T08:00:00+08:00"},
		"is_soldout": {"true"},
		"page":       {"1"},
		"per_page":   {"20"},
	}
	expected := &ProductQuery{
		CreatedAt: time.Date(1991, 11, 10, 0, 0, 0, 0, time.UTC),
		Color:     "",
		IsSoldout: true,
		Pagination: Pagination{
			Page:    1,
			PerPage: 20,
		},
	}
	core, err := New(ProductQuery{})
	assert.NoError(t, err)
	got, err := core.Decode(r)
	assert.NoError(t, err)
	assert.Equal(t, expected, got.(*ProductQuery))
}

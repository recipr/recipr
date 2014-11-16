package model

import (
	"database/sql"
	"fmt"
)

type Recipe struct {
	Id           int
	Name         string `json:"name"`
	Slug         string `json:"slug"`
	Intro        string `json:"intro"`
	DateCreated  int    `json:"date_created"`
	DateModified int    `json:"date_modified"`
	Status       int    `json:"status"`
	Tags         []Tag  `json:"tags"`
}

func GetAllRecipes(db *sql.DB) (recipes []Recipe, err error) {
	rows, err := db.Query("SELECT * FROM recipe")

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		recipe := new(Recipe)
		err := rows.Scan(&recipe.Id, &recipe.Name, &recipe.Slug, &recipe.Intro, &recipe.DateCreated, &recipe.DateModified, &recipe.Status)
		if err != nil {
			return nil, err
		}

		tags, err := GetTagsByRecipeId(db, recipe.Id)
		if err == nil {
			recipe.Tags = tags
		} else {
			fmt.Println(err)
		}

		recipes = append(recipes, *recipe)
	}
	err = rows.Err()
	if err != nil {
		return nil, err
	}

	return recipes, nil
}

func GetRecipeById(db *sql.DB, id int) (recipes []Recipe, err error) {
	stmt, err := db.Prepare("SELECT * FROM recipe WHERE id = ?")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	rows, err := stmt.Query(id)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		recipe := new(Recipe)
		err := rows.Scan(&recipe.Id, &recipe.Name, &recipe.Slug, &recipe.Intro, &recipe.DateCreated, &recipe.DateModified, &recipe.Status)
		if err != nil {
			return nil, err
		}

		tags, err := GetTagsByRecipeId(db, recipe.Id)
		if err == nil {
			recipe.Tags = tags
		} else {
			fmt.Println(err)
		}

		recipes = append(recipes, *recipe)
	}
	err = rows.Err()
	if err != nil {
		return nil, err
	}

	return recipes, nil
}

func AddRecipe(db *sql.DB, recipe *Recipe) (newRecipe *Recipe, err error) {
	stmt, err := db.Prepare(`INSERT INTO recipe(name, slug, intro, date_created, date_modified, status) 
		VALUES(?, ?, ?, ?, ?, ?)`)
	if err != nil {
		return nil, err
	}

	res, err := stmt.Exec(recipe.Name, recipe.Slug, recipe.Intro, recipe.DateCreated, recipe.DateModified, recipe.Status)
	if err != nil {
		return nil, err
	}
	lastId, err := res.LastInsertId()
	if err != nil {
		return nil, err
	}

	recipe.Id = int(lastId)
	return recipe, nil
}

func DeleteRecipe(db *sql.DB, id int) (int, error) {
	stmt, err := db.Prepare("UPDATE recipe SET status = 2 WHERE id = ?")
	if err != nil {
		return 0, err
	}

	res, err := stmt.Exec(id)
	if err != nil {
		return 0, err
	}

	rowCnt, err := res.RowsAffected()
	if err != nil {
		return 0, err
	}

	//Remove recipe-tag relation
	stmt, err = db.Prepare("DELETE FROM recipe_tag_rel WHERE recipe_id = ?")
	if err != nil {
		return 0, err
	}

	res, err = stmt.Exec(id)
	if err != nil {
		return 0, err
	}

	return int(rowCnt), nil
}

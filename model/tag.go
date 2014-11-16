package model

import (
	"database/sql"
)

type Tag struct {
	Id   int
	Name string `json:"name"`
	Slug string `json:"slug"`
}

func GetTagsByRecipeId(db *sql.DB, recipeId int) (tags []Tag, err error) {
	stmt, err := db.Prepare("SELECT t.* FROM tag as t LEFT JOIN recipe_tag_rel as r ON r.tag_id = t.id WHERE r.recipe_id = ?")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	rows, err := stmt.Query(recipeId)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		tag := new(Tag)
		err := rows.Scan(&tag.Id, &tag.Name, &tag.Slug)
		if err != nil {
			return nil, err
		}
		tags = append(tags, *tag)
	}
	err = rows.Err()
	if err != nil {
		return nil, err
	}

	return tags, nil
}

func GetAllTags(db *sql.DB) (tags []Tag, err error) {
	stmt, err := db.Prepare("SELECT id, name, slug FROM tag")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	rows, err := stmt.Query()
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		tag := new(Tag)
		err := rows.Scan(&tag.Id, &tag.Name, &tag.Slug)
		if err != nil {
			return nil, err
		}
		tags = append(tags, *tag)
	}
	err = rows.Err()
	if err != nil {
		return nil, err
	}

	return tags, nil
}

func GetTagById(db *sql.DB, id int) (tags []Tag, err error) {
	stmt, err := db.Prepare("SELECT id, name, slug FROM tag WHERE id = ?")
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
		tag := new(Tag)
		err := rows.Scan(&tag.Id, &tag.Name, &tag.Slug)
		if err != nil {
			return nil, err
		}
		tags = append(tags, *tag)
	}
	err = rows.Err()
	if err != nil {
		return nil, err
	}

	return tags, nil
}

func AddTag(db *sql.DB, tag *Tag) (newTag *Tag, err error) {
	stmt, err := db.Prepare(`INSERT INTO tag(name, slug) 
		VALUES(?, ?)`)
	if err != nil {
		return nil, err
	}

	res, err := stmt.Exec(tag.Name, tag.Slug)
	if err != nil {
		return nil, err
	}
	lastId, err := res.LastInsertId()
	if err != nil {
		return nil, err
	}

	tag.Id = int(lastId)
	return tag, nil
}

func DeleteTag(db *sql.DB, id int) (int, error) {
	stmt, err := db.Prepare("DELETE FROM tag WHERE id = ?")
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
	stmt, err = db.Prepare("DELETE FROM recipe_tag_rel WHERE tag_id = ?")
	if err != nil {
		return 0, err
	}

	res, err = stmt.Exec(id)
	if err != nil {
		return 0, err
	}

	return int(rowCnt), nil
}

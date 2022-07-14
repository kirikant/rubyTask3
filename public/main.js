function getEntities(entities) {
    $.ajax('http://localhost:3000/' + entities,
        {
            success: function (data) {
                if (entities === 'authors') {
                    let entities = ""
                    data.forEach(entity => {
                        {
                            entities += "id:" + entity.id + "; name:" + entity.name + "; surname:" + entity.surname +
                                "; style:" + entity.style + "\n"
                        }
                    })
                    alert(entities)
                }
                if (entities === 'books') {
                    let entities = ""
                    data.forEach(entity => {
                        {
                            entities += "id:" + entity.id + "; title:" + entity.title + "; theme:" + entity.theme +
                                "; shopId:" + entity["shop_id"] + "\n"
                        }
                    })
                    alert(entities)
                }
                if (entities === 'directors') {
                    let entities = ""
                    data.forEach(entity => {
                        {
                            entities += "id:" + entity.id + "; name:" + entity.name + "; surname:" + entity.surname
                                + "; salary:" + entity.salary +
                                "; shopId:" + entity["shop_id"] + "\n"
                        }
                    })
                    alert(entities)
                }
                if (entities === 'employees') {
                    let entities = ""
                    data.forEach(entity => {
                        {
                            entities += "id:" + entity.id + "; name:" + entity.name + "; surname:" + entity.surname +
                                "; shopId:" + entity["shop_id"] + "\n"
                        }
                    })
                    alert(entities)
                }
            }
        })
}


function getEntity(entities) {
    let entity_id;
    if (entities === "authors") {
        entity_id = document.getElementById('author_get_id').value;
        $.ajax({
                url: 'http://localhost:3000/' + entities + "/" + entity_id,
                method: 'get',
                dataType: 'json',
                success: function (entity) {
                    alert("id:" + entity.id + "; name:" + entity.name + "; surname:" + entity.surname +
                        "; style:" + entity.style)
                }
            }
        )
    }
    if (entities === "books") {
        entity_id = document.getElementById('book_get_id').value;
        $.ajax({
                url: 'http://localhost:3000/' + entities + "/" + entity_id,
                method: 'get',
                dataType: 'json',
                success: function (entity) {
                    alert("id:" + entity.id + "; title:" + entity.title + "; theme:" + entity.theme +
                        "; shopId:" + entity["shop_id"])
                }
            }
        )
    }
    if (entities === "directors") {
        entity_id = document.getElementById('director_get_id').value;
        $.ajax({
                url: 'http://localhost:3000/' + entities + "/" + entity_id,
                method: 'get',
                dataType: 'json',
                success: function (entity) {
                    alert("id:" + entity.id + "; name:" + entity.name + "; surname:" + entity.surname
                        + "; salary:" + entity.salary +
                        "; shopId:" + entity["shop_id"])
                }
            }
        )
    }
    if (entities === "employees") {
        entity_id = document.getElementById('employee_get_id').value;
        $.ajax({
                url: 'http://localhost:3000/' + entities + "/" + entity_id,
                method: 'get',
                dataType: 'json',
                success: function (entity) {
                    alert("id:" + entity.id + "; name:" + entity.name + "; surname:" + entity.surname +
                        "; shopId:" + entity["shop_id"])
                }
            }
        )
    }
}


function deleteEntity(entities) {
    let entity_id;
    if (entities === "authors") entity_id = document.getElementById('author_delete_id').value;
    if (entities === "books") entity_id = document.getElementById('book_delete_id').value;
    if (entities === "directors") entity_id = document.getElementById('director_delete_id').value;
    if (entities === "employees") entity_id = document.getElementById('employee_delete_id').value;

    $.ajax({
            url: 'http://localhost:3000/' + entities + "/" + entity_id,
            method: 'delete',
            dataType: 'json'
        }
    )
}

function addEntity(entities) {
    let  entityData;
    if (entities === "authors") {
        let resultBooksId = []
        let booksId = document.getElementById('books_id').value
        if (booksId === '' || booksId == null) resultBooksId = null
        else booksId.split(",").forEach(x => resultBooksId.push(x))
        entityData = {
            name: document.getElementById('author_name').value,
            surname: document.getElementById('author_surname').value,
            style: document.getElementById('author_style').value,
            books_id: resultBooksId
        }
    }
    if (entities === "books") {
        let resultAuthorsId = []
        let authorsId = document.getElementById('authors_id').value
        if (authorsId === '' || authorsId == null) resultAuthorsId = null
        else authorsId.split(",").forEach(x => resultAuthorsId.push(x))
        entityData = {
            title: document.getElementById('book_title').value,
            published_at: document.getElementById('book_published_at').value,
            theme: document.getElementById('book_theme').value,
            shop_id: document.getElementById('book_shop_id').value,
            authors_id: resultAuthorsId
        }
    }
    if (entities === "directors"){
        entityData = {
            name: document.getElementById('director_name').value,
            surname: document.getElementById('director_surname').value,
            salary: document.getElementById('director_salary').value,
            shop_id: document.getElementById('director_shop_id').value,
        }
    }
    if (entities === "employees"){
        entityData = {
            name: document.getElementById('employee_name').value,
            surname: document.getElementById('employee_surname').value,
            age: document.getElementById('employee_age').value,
            shop_id: document.getElementById('employee_shop_id').value,
        }
    }

        $.ajax({
                url: 'http://localhost:3000/' + entities,
                method: 'post',
                dataType: 'json',
                data: entityData
            }
        )
}

function updateEntity(entities) {
    let entity_id;
    let entityData;
    if (entities === "authors") {
        entity_id = document.getElementById('author_update_id').value;

        let resultBooksId = []
        let booksId = document.getElementById('books_update_id').value
        if (booksId === '' || booksId == null) resultBooksId = null
        else booksId.split(",").forEach(x => resultBooksId.push(x))

        entityData = {
            name: document.getElementById('author_update_name').value,
            surname: document.getElementById('author_update_surname').value,
            style: document.getElementById('author_update_style').value,
            books_id: resultBooksId
        }
    }
    if (entities === "books") {
        entity_id = document.getElementById('update_book_id').value;

        let resultAuthorsId = []
        let authorsId = document.getElementById('update_authors_id').value
        if (authorsId === '' || authorsId == null) resultAuthorsId = null
        else authorsId.split(",").forEach(x => resultAuthorsId.push(x))

        entityData = {
            title: document.getElementById('update_book_title').value,
            published_at: document.getElementById('update_book_published_at').value,
            theme: document.getElementById('update_book_theme').value,
            shop_id: document.getElementById('update_book_shop_id').value,
            authors_id: resultAuthorsId
        }
    }
    if (entities === "directors"){
        entity_id = document.getElementById('update_director_id').value;
        entityData = {
            name: document.getElementById('update_director_name').value,
            surname: document.getElementById('update_director_surname').value,
            salary: document.getElementById('update_director_salary').value,
            shop_id: document.getElementById('update_director_shop_id').value,
        }
    }
    if (entities === "employees"){
        entity_id = document.getElementById('update_employee_id').value;

        entityData = {
            name: document.getElementById('update_employee_name').value,
            surname: document.getElementById('update_employee_surname').value,
            age: document.getElementById('update_employee_age').value,
            shop_id: document.getElementById('update_employee_shop_id').value,
        }
    }

        $.ajax({
                url: 'http://localhost:3000/' + entities + "/" + entity_id,
                method: 'put',
                dataType: 'json',
                data: entityData
            }
        )

}


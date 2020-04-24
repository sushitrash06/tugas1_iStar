const xhr = new XMLHttpRequest();

xhr.onload = function () {
    console.log(this.responseText);
}

xhr.onerror = function () {
    console.log("ups something error");
}

xhr.open("POST", "https://web-server-book-dicoding.appspot.com/add");

//menambahkan properti pada header request

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Auth-Token", "12345");

const book = {
    id: 10,
    title: "edensor",
    author: "andrea hirata"
}
xhr.send(JSON.stringify(book));

fetch("https://web-server-book-dicoding.appspot.com/add")
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        console.log(responseJson);
    })
    .catch(error => {
        console.log(error);
    });

fetch("https://web-server-book-dicoding.appspot.com/add",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": "12345"
        },
        body: JSON.stringify({
            id: 10,
            title: "edensor",
            author: "andrea hirata"
        })
})
/*const dogData = {
    body: {
        dogname: "Byron",
        dogBreed: "Poodle",
    }
}

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(dogData)   
}

fetch("http://localhost:3000/dogs", configurationObject)
    .then(response => response.json())
    .then(function (data){
        console.log(data);
    })
    .catch(function (error){
        alert("Oops!");
        console.log(error.message);
});
*/
function submitData(name, email){
    const userObject = {}
    userObject.name = name;
    userObject.email = email;
    console.log(userObject);

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userObject)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(function(data){
            console.log(data);
            const idElement = document.createElement("div");
            idElement.innerText = data.id;
            document.body.appendChild(idElement);

        })
        .catch(function(error){
            console.log(error.message);
            const errorElement = document.createElement("p");
            errorElement.innerText = error.message;
            document.body.appendChild(errorElement);
        })
}


fetch('https://api.chucknorris.io/jokes/random'  )
.then(response => {
    return response.json();
})
.then(data => {
    //console.log(data);
    //just the joke part
    let jox = data.value;
    console.log(jox);

})

.catch();
var api_key = "W5Y6Jyh7Ju0wPhQ9Vw0ahIAvHIb7uKjv";
var url_1 = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`;
var url_2 = `https://api.giphy.com/v1/gifs/categories?api_key=${api_key}`;
var url_3 = `https://api.giphy.com/v1/stickers/trending?api_key=${api_key}`;
fetch(url_3)
.then(res=>{
    return res.json();
})
.then(data=>{
    console.log(data);
    add_stickers(data.data);
})

function add_stickers(data){
    data.forEach(gif =>{
        `<div class='gif'>
            <img src=${gif.images.original.url}/>  
        </div>`  
    });
}
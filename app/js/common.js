var button = document.getElementById("search");
var container = document.getElementById("photogrid");

var value = '';
var urls = [];

button.onclick = function() {

    value = document.getElementById("searchfield").value;


    console.log(getUrls(value));
    var mydiv = document.createElement('div');
    mydiv.className = "grid";
    container.appendChild(mydiv);
    // mydiv.innerHTML = '<img class="grid_img" src="' + url + '" alt="image">';

};


let getUrls = function(val) {
    let URL = "https://pixabay.com/api/?key=" + '4341489-c7135f07e924eb271481ce96f' + "&q=" + encodeURIComponent(val);

    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();

    xhr.open('GET', URL, true);

    xhr.onload = function() {
        let pics = JSON.parse(this.responseText);
        let x = pics.hits[1].webformatURL;
console.log(x);
        return x;

    };

    xhr.onerror = function() {
        console.log('Ошибка ' + this.status);
    };

    xhr.send();
};

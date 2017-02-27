var button = document.getElementById("search");

var value = '';

button.onclick = function() {
    value = document.getElementById("searchfield").value;
};

    console.log(pics.hits[1].webformatURL);


let URL = "https://pixabay.com/api/?key=" + '4341489-c7135f07e924eb271481ce96f' + "&q=" + encodeURIComponent(value);

let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
let xhr = new XHR();

xhr.open('GET', URL, true);

xhr.onload = function() {
    var pics = JSON.parse(this.responseText);
    console.log(pics.hits[1].webformatURL);

};

xhr.onerror = function() {
    console.log('Ошибка ' + this.status);
};

xhr.send();

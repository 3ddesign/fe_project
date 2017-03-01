var button = document.getElementById("search");
var container = document.getElementById("photogrid");

var value = '';

button.onclick = function(e) {
    e.preventDefault();
    value = document.getElementById("searchfield").value;
    getUrls(value);
};


let getUrls = function(val) {
    let URL = "https://pixabay.com/api/?key=" + '4341489-c7135f07e924eb271481ce96f' + "&q=" + encodeURIComponent(val);
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();

    xhr.open('GET', URL, true);

    xhr.onload = function() {
        let pics = JSON.parse(this.responseText);
        let x = pics.hits[1].webformatURL;
        let n = pics.hits[1].tags.split(',')[0];
        console.log(x);
        console.log(n);

        container.innerHTML = '';
        container.innerHTML = '<figure class="tile"><img class="grid_img" src="' + x + '" alt="image"><figcaption class="tile__tag">' + n + '</figcaption></figure>';

        return x;

    };

    xhr.onerror = function() {
        console.log('Ошибка ' + this.status);
    };

    xhr.send();
};

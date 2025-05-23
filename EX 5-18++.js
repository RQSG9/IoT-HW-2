var getInformation = function (baseUrl) {
    return function (path) {
        return function (id) {
            return fetch(baseUrl + path + '/' + id);
        };
    };
};

var getInformation = baseUrl => path => id => fetch(baseUrl + path + '/' + id);

var imageUrl = 'http://imageAddress.com/';
var productUrl = 'http://productAddress.com/';

var getImage = getInformation(imageUrl);
var getEmoticon = getImage('emoticon');
var getIcon = getImage('icon');

var getProduct = getInformation(productUrl);
var getFruit = getProduct('fruit');
var getVegetable = getProduct('vegetable');

var emoticon1 = getEmoticon(100);
var emoticon2 = getEmoticon(102);
var icon1 = getIcon(205);
var icon2 = getIcon(234);
var fruit1 = getFruit(300);
var fruit2 = getFruit(400);
var vegetable1 = getVegetable(456);
var vegetable2 = getVegetable(789);
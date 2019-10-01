let imageCard1 = {
    name: 'page',
    category: 'mobile',
    url: './img/page.png'
};
let imageCard2 = {
    name: 'rock',
    category: 'mobile',
    url: './img/rock.png'
};
let imageCard3 = {
    name: 'rock2',
    category: 'photo',
    url: './img/rock2.png'
};
let imageCard4 = {
    name: 'book',
    category: 'web',
    url: './img/book.png'
};
let imageCard5 = {
    name: 'page',
    category: 'web',
    url: './img/page.png'
};
let imageCard6 = {
    name: 'bird',
    category: 'illustrator',
    url: './img/bird.png'
};

let images = [imageCard1, imageCard2, imageCard3, imageCard4, imageCard5, imageCard6];

 const all = document.getElementById('all');
 const web = document.getElementById('web');
 const mobile = document.getElementById('illustrator');
 const photo = document.getElementById('photo');
 const imgWrapper = document.getElementById('wrapper');

all.addEventListener('click', function(){
   
    let imgItem = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let discription = document.createElement('p');

    imgItem.appendChild(img);
    imgItem.appendChild(h2);
    imgItem.appendChild(discription);
    imgWrapper.appendChild(imgItem);

});
   



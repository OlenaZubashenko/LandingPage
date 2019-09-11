

let images = ['./img/banner2.jpg','./img/banner3.jpg','./img/banner4.jpg', './img/121.jpg'];

document.getElementsByClassName('next')[0].onclick = () => {
        setImage(1);
};
$('.prev')[0].onclick = () => {
        setImage(-1);
};
let i = 0;
let setImage = (step) => {  
        i = i + step;     
        if (i < 0)
                i = images.length - 1;
        if (i > images.length - 1)
                i = 0;
        let newImg = images[i];
        let elem = $('#top')[0];
        elem.style.backgroundImage = "url(" + newImg + ")";
}

$('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 6000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

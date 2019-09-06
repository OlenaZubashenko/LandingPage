
let i = 0;
let images = ['./img/banner2.jpg','./img/banner3.jpg','./img/banner4.jpg'];

document.getElementsByClassName('next')[0].onclick = ()=>{
	if(i > 2) 
        i = 0; 
        let newImg  = images[i++];
        let oldImg =  document.getElementById('top').style.backgroundImage ;
        document.getElementById("top").style.backgroundImage = "url("+ newImg +")";
};
document.getElementsByClassName('prev')[0].onclick = ()=>{
	if(i < 0) 
        i = 2; 
        let newImg  = images[i--];
        let elem =  document.getElementById('top');//.style.cssText;
        document.getElementById("top").style.backgroundImage = "url("+ newImg +")";
};


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

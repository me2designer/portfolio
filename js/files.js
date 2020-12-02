cache = '?v='+(new Date).getTime();

/* CSS, JS import  */ 
var files = [    
    '//public.peoplelife.co.kr/css/reset.css',
    '/css/style.css',

    '/lib/gsap/TweenMax.min.js',
    '/js/script.js',
]

for (var i=0; i<files.length; i++){
    if (files[i].indexOf('.js') != -1){
        var el = document.createElement('script');
        el.async = false;
        el.type = 'text/javascript';
        el.src = files[i]+cache;

        (document.getElementsByTagName('HEAD')[0]||document.body).appendChild(el);
    } else if (files[i].indexOf('.css') != -1) {
        var el = document.createElement('link');
        el.rel = 'stylesheet';
        el.type = 'text/css';
        el.href = files[i]+cache;

        (document.getElementsByTagName('HEAD')[0]||document.body).appendChild(el);
    }
}


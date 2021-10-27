// Lazy Load Function From MDN Progressive Loading Page

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


// The Intersection Observer 
// Function from MDN Progressive Loading Page
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) =>{
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


// Webfont Load 

WebFont.load({
    google: {
        families: [
            'Josefin Sans'
        ]
    }
});
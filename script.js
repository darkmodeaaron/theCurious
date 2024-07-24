const headerSocials = document.querySelector('.socials-flex')
const heroImg = document.querySelector('.hero-img')
const scrollIcon = document.querySelector('.hero-scroll-icon')

const upcomingFlex = document.querySelector('.upcoming-shows-flex')

window.onload = function() {
    if (window.innerWidth >= 775 ) {
        heroImg.src = '/assets/desktopHeroImg.png'
    } else {
        heroImg.src = '/assets/mobileHeroImg.png'
    } 
}

function loadImage(src, callback) {
    var img = new Image();
    img.src = src;
  
    img.onload = function() {
      // Image has loaded successfully
      callback(null, img);
    };
  
    img.onerror = function() {
      // Image failed to load
      callback(new Error('Failed to load image'));
    };
  
}


loadImage(heroImg.src, function(error, image) {
    if (error) {
        console.error(error.message);
    } else {
        console.log('Image loaded successfully:', image);
        setTimeout(() => {
            heroImg.classList.add('inactive')
        }, 750)
        setTimeout(() => {
            headerSocials.classList.add('active')
            scrollIcon.classList.add('active')
        }, 2000)
        setTimeout(() => {
            document.body.classList.add('active')
        }, 2500)
    }
});


window.addEventListener('resize', () => {
    if (window.innerWidth >= 775 ) {
        heroImg.src = '/assets/desktopHeroImg.png'
    } else {
        heroImg.src = '/assets/mobileHeroImg.png'
    }
})

const url = 'https://rest.bandsintown.com/artists/The%201975/events?app_id=e255b018fea67c27d71141c1d76d50a9&date=upcoming'

const response = fetch(url)

.then(res => res.json())
.then (data => {

    console.log(data)

})

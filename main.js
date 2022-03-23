const botonColor= document.querySelector(".btn-color");
const bookmarkcolor = document.querySelector(".img-bookmark")
const bookmarkSpan = document.querySelector(".bookmark-span")

function cambiarColor(){
    botonColor.addEventListener('click', (e) => {
        botonColor.style.color = '#157a74';
        bookmarkcolor.src="/images/icon-bookmark-check.svg";
        bookmarkSpan.innerHTML = 'Bookmarked'
        bookmarkSpan.style.fontWeight = 700;
    })

    botonColor.addEventListener('click', myf1);
    
    
    let contador = 0;

    function myf1() {
        if (contador%2!=0){
            botonColor.style.color = '#000';
            bookmarkcolor.src="/images/icon-bookmark.svg";
            bookmarkSpan.innerHTML = 'Bookmark'
            
        }
        else{
            botonColor.style.color = '#2cafa6';
            bookmarkcolor.src="/images/icon-bookmark-check.svg";
            bookmarkSpan.innerHTML = 'Bookmarked'
            
           
        }

        contador += 1;
    }
}

cambiarColor();


// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);



// function cambiarColor(){
//     botonColor.addEventListener('click', (e) => {
//         document.querySelector(".btn-color").style.color = '#157a74';
//         document.querySelector(".img-bookmark").src="/images/icon-bookmark-check.svg";
//     })
    

// }
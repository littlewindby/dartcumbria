// Define an emoji string for the dart emoji (you can change this to any emoji you want)
const dartEmoji = String.fromCodePoint(0x1F3AF); // Dart Emoji
const earthEmoji = String.fromCodePoint(0x1F30E); // Earth Emoji


// Function to update the tab title with the dart emoji
function updateTabTitle() {
    document.title = `${dartEmoji} Dart Cumbria ${earthEmoji}`;
}

// Call the function to update the tab title
updateTabTitle();
var mouse = document.querySelector('.mouse');
    window.addEventListener('mousemove',function(event){    
        mouse.style.left = event.clientX - mouse.offsetWidth/2 + 'px' ;
        mouse.style.top = event.clientY -mouse.offsetHeight/2 + 'px';       
    })
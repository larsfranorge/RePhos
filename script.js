window.onload = function() {
    lax.setup() // init
    
    document.addEventListener('scroll', function(e) {
    lax.update(window.scrollX) // update every scroll
    }, false)
}
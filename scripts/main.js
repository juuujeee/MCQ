(function main(){

    let header = document.querySelector('header');
    //let mainContent = document.querySelector('.main-content');

    window.addEventListener('scroll', function(e) {
       
        if(this.scrollY >= 100) {
            
            header.classList.add('minimized');
           // mainContent.setAttribute('style', 'margin-top:70px;');
            
        }
        else{
            header.classList.remove('minimized');
           // mainContent.removeAttribute('style');
        }
    });

})();
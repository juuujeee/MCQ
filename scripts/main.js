(function main(){

    let header = document.querySelector('header');
    //let mainContent = document.querySelector('.main-content');

    window.addEventListener('scroll', function(e) {
       
        if(this.innerWidth > 767) {
            if(this.scrollY >= 100) {
            
                header.classList.add('minimized');
               // mainContent.setAttribute('style', 'margin-top:70px;');
                
            }
            else{
                header.classList.remove('minimized');
               // mainContent.removeAttribute('style');
            }

        }
       
    });


    let openSubMenus = document.querySelectorAll('.jsHasDropdownMenu');
    openSubMenus.forEach((item) => {
        item.addEventListener('click', function(e) {
            e.currentTarget.nextElementSibling.classList.toggle('hide-menu');
            e.currentTarget.querySelector('.header-menu-icon').classList.toggle('rotate-180')
        });
    });

})();
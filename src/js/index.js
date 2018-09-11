import mainPageSlider from './mainPageSlider.js';
import mainPageOverlay from './mainPageOverlay.js';
import mainPageModal from './mainPageModal.js';
import mainPageSlowScroll from './mainPageSlowScroll.js';
import toSiteBuilder from './toSiteBuilder.js';
import youTubeVideo from './youTubeVideo.js';
import tarifModal from './tarifModal.js';
import siteBuildBackgroun from './siteBuildBackgroun.js';
import activeTab from './activeTab.js';
import invitationRed from './invitationRed.js';
import guestList from "./guestList.js";
import maps from "./maps.js";
import whishBook from "./whishBook.js";


document.addEventListener("DOMContentLoaded", () => {
    let loader = document.querySelector('.loader-div'),
        page = location.pathname.trim();


    loader.classList.add('animated', 'fadeOut');
    if (loader.style.opacity == 0) {
        loader.style.display = 'none';
        document.body.style.overflow = 'visible';
    }


    if (page == '/' || page.match(/index.html/)) {

        mainPageSlider('slider', 'a-slide');
        mainPageOverlay();
        mainPageModal('overlay');
        mainPageSlowScroll();
        toSiteBuilder();
        youTubeVideo();
        tarifModal();
        mainPageModal('js-overlay-thank-you', 'js-overlay-order');
        mainPageModal('contacts', 'js-overlay-order');

    } else {
        if (page.match(/site-builder.php/)) {

            siteBuildBackgroun();

        } else if (page.match(/invitation.php/)) {

            invitationRed();

        } else if (page.match(/guest-list.php/)) {
            guestList();

        } else if (page.match(/location.(html|php)/)) {
           maps();
        } else if (page.match(/book-wishes.php/)) {
            mainPageSlider('slider-book', 'a-slide-book', 'slider-book-arrow');
            whishBook();
        }
    	
    	activeTab();
        
    }



});
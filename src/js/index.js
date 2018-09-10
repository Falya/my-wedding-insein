import mainPageSlider from './mainPageSlider.js';
import mainPageOverlay from './mainPageOverlay.js';
import mainPageModal from './mainPageModal.js';
import mainPageSlowScroll from './mainPageSlowScroll.js';
import toSiteBuilder from './toSiteBuilder.js';
import youTubeVideo from './youTubeVideo.js';
import tarifModal from './tarifModal.js';
import siteBuildBackgroun from './siteBuildBackgroun.js';

document.addEventListener("DOMContentLoaded", () => {

    let loader = document.querySelector('.loader-div'),
        page = location.pathname.trim();

    loader.classList.add('animated', 'fadeOut');
    if (loader.style.opacity == 0) {
        loader.style.display = 'none';
        document.body.style.overflow = 'visible';
    }


    if (page == '/' || page == 'index.html') {

        mainPageSlider();
        mainPageOverlay();
        mainPageModal('overlay');
        mainPageSlowScroll();
        toSiteBuilder();
        youTubeVideo();
        tarifModal();
        mainPageModal('js-overlay-thank-you', 'js-overlay-order');
        mainPageModal('contacts', 'js-overlay-order');

    } else {
    	siteBuildBackgroun();
    }



});
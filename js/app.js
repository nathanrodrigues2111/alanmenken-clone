/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_award__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_homeGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_homeCanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _components_landingOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);










AOS.init({
    once: true
}); 

Object(_components_header__WEBPACK_IMPORTED_MODULE_1__["header"])();
Object(_components_work__WEBPACK_IMPORTED_MODULE_2__["work"])();
Object(_components_table__WEBPACK_IMPORTED_MODULE_3__["table"])(); 
Object(_components_award__WEBPACK_IMPORTED_MODULE_4__["award"])();
Object(_components_homeGallery__WEBPACK_IMPORTED_MODULE_5__["homeGallery"])(); 
Object(_components_homeCanvas__WEBPACK_IMPORTED_MODULE_6__["homeCanvas"])();
Object(_components_landingOverlay__WEBPACK_IMPORTED_MODULE_7__["landingOverlay"])();

// you only need to define the configuration settings you want to CHANGE. Omitted properties won't be affected.


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return $q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$qa", function() { return $qa; });
const $q = document.querySelector.bind(document);
const $qa = document.querySelectorAll.bind(document);

gsap.config({
    nullTargetWarn: false,
}); 

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const header = () => {
    const openMenuElement = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('#menu-toggle');
    const FeedToggle = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('#feed-toggle');
    const closeFeed = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('.sidebar-close');
    const SlideMenu = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('.menu');
    const bodyElement = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('body');

    const siteOverlayOpen = () => {
        gsap.to('#BlockingOverlay', {opacity: 0.8, position: "fixed", duration: .5, ease: "circ.inOut"});
    }

    const siteOverlayClose = () => {
        gsap.to('#BlockingOverlay', { opacity: 0, duration: .5, ease: "circ.inOut"});
        gsap.to('#BlockingOverlay', { position: null, duration: .5, ease: "circ.inOut",  delay: 0.5});
    }

    if(openMenuElement != null){
        openMenuElement.addEventListener('click', () => {
            bodyElement.classList.toggle('menu-open'); 
            if(bodyElement.classList.contains('menu-open')){
                gsap.to(SlideMenu, {duration: .4, transform: "translate(0, 0)",  ease: "circ.inOut"})
                gsap.from('.menu a', {opacity: 0, y: -10, duration: .8, ease: "circ.inOut", stagger: .1});
                siteOverlayOpen(); 
                
            } else {
                gsap.to(SlideMenu, {duration: .4, transform: "translate(0, -100%)",  ease: "circ.inOut"});  
                siteOverlayClose();
            }
        });
    }

    if(FeedToggle != null){
        FeedToggle.addEventListener('click', () => {  
            gsap.to('.news-sidebar', {opacity: 1, x: 0, duration: .5, ease: "circ.inOut"})
            gsap.from('.sidebar-stagger', {opacity: 0, x: -20, duration: .5, ease: "circ.inOut", stagger: -0.1 , delay: 0.2});
            siteOverlayOpen();
        });

        FeedToggle.addEventListener('mouseover', () => { 
            FeedToggle.classList.add('ring-hover');  
        });
    
        FeedToggle.addEventListener("animationend", () => {  
            FeedToggle.classList.remove('ring-hover'); 
        });
    }

    if(closeFeed != null){
        closeFeed.addEventListener('click', () => { 
            gsap.to('.news-sidebar', {opacity: 0, transform: "translate(-100%, 0)", duration: .5, ease: "circ.inOut"});
            siteOverlayClose(); 
        });
    }


}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "work", function() { return work; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const work = () => {
    const workList = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$qa"])('.work-list ul li a');

    gsap.from(".gsap-down", {opacity: 0, y: -100, duration: 1 , ease: "elastic.out(1.5, 0.75)" , stagger: .1});

    const workSlider = new Swiper('.work-slider', {
        effect: 'fade',
        fadeEffect: { 
          crossFade: true
        },
    });

    workList.forEach(element => {     
        element.addEventListener('mouseover', (e) => {
            let singlePoster = e.currentTarget.getAttribute('index');
            if(singlePoster && !element.parentNode.classList.contains('active')){
                workSlider.slideTo(singlePoster); 
                gsap.from('.swiper-slide-active', {scale: 1.1, duration: 1, ease: "circ.Out", delay: .1})

                workList.forEach(element => {
                    element.parentNode.classList.remove('active'); 
                });
                e.currentTarget.parentNode.classList.add('active');
            }
        });
    }); 
} 



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return table; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const table = () => {
    var getCellValue = function(tr, idx){ return tr.children[idx].innerText || tr.children[idx].textContent; }

    var comparer = function(idx, asc) { return function(a, b) { return function(v1, v2) {
            return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
        }(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
    }};

    Array.prototype.slice.call(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$qa"])('th')).forEach(function(th) { 

            th.addEventListener('click', function() {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$qa"])('th').forEach(element => {
                element.classList.remove('active');
                if(th.classList.contains('active')){
                    element.classList.remove('asc'); 
                }
            })
            th.classList.add('active');
            if(th.classList.contains('active')){
                th.classList.toggle('asc');
            }
            var table = th.parentNode
            while(table.tagName.toUpperCase() != 'TABLE') table = table.parentNode;
            Array.prototype.slice.call(table.querySelectorAll('tr:nth-child(n+2)'))
                .sort(comparer(Array.prototype.slice.call(th.parentNode.children).indexOf(th), this.asc = !this.asc))
                .forEach(function(tr) { table.appendChild(tr) });
        })
    }); 
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "award", function() { return award; });
const award = () => {
    const tl = gsap.timeline();
    tl.from(".awards-banner img", {opacity: 0, y: 100, duration: .9, ease: "circ.inOut", stagger: .2})
    .from(".title-and-description h1", {opacity: 0, y: 100, duration: .9, ease: "circ.inOut"})
    .from(".title-and-description .description", {opacity: 0, y: 100, duration: .9, ease: "circ.inOut"})
    .from(".awards-count .single-award", {opacity: 0, y: 100, duration: .9, ease: "circ.inOut", stagger: .2});

    
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeGallery", function() { return homeGallery; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const homeGallery = () => {
  const galleryItems = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$qa"])(".home-grid-slider .swiper-slide");
  const galleryItemsSingle = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])(".home-grid-slider .swiper-slide");
  const video = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$qa"])("video"); 
  const gridVideo = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])(".grid-video");
  const body = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('body');
  const ovtl = gsap.timeline();
  const closeButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('.close-button');
  const mediaQueryMin = window.matchMedia('(min-width: 1400px)'); 


  const homeGridSlider = new Swiper('.home-grid-slider', {
      slidesPerView: 3,  
      spaceBetween: 10, 
      observer: true,
      observeParents: true,
      resizeReInit: true,
      breakpoints: { 
        768: {       
          slidesPerView: 8, 
          spaceBetween: 10, 
        }, 
        1400: {        
          slidesPerView: 10, 
          spaceBetween: 20, 
        }
      },
      on: {
        reachEnd: function() {
          this.snapGrid = [...this.slidesGrid];
        },
      }
  });




  const changeText = (title, songTitle) =>{     
    const tl = gsap.timeline(); 
    tl.to('.home-grid-info .hide', {opacity: 1});
    tl.to('.home-grid-info .title',{text:title, duration: .9, ease: "circ.inOut"}, "-=.5");
    tl.to('.home-grid-info p', {text:songTitle, duration: .9, ease: "circ.inOut"}, "-=1");
  }

  if(closeButton != null){
    closeButton.addEventListener("click", (e) => {
        ovtl.reverse();
        gridVideo.pause(); 
    });
  }

  video.forEach((element) => { 
    element.pause;
  });

  if(galleryItems != null && galleryItemsSingle != null){   
    const GridSingleDefaultWidth = galleryItemsSingle.offsetWidth;  
    
  galleryItems.forEach((element) => {

    if(mediaQueryMin.matches){
    
    element.addEventListener("mouseover", (e) => {  
      const video = e.currentTarget.querySelector("video");
      const songTitle = e.currentTarget.getAttribute('data-song');
      const title = e.currentTarget.getAttribute('data-title');
      changeText(title, songTitle);
     
     
     
      if (video != null) { 
        video.play[0];
        video.muted = false;
        video.volume = 0;
        gsap.to(e.currentTarget, { width: GridSingleDefaultWidth + 115}); 
        gsap.to(video, { duration: 0.5, opacity: 1 });
        gsap.to(video, { duration: 1, volume: 0.1, delay: 0.5 });

      }
    });

        element.addEventListener("mouseleave", (e) => {
        const video = e.currentTarget.querySelector("video");

        const tl = gsap.timeline();
        tl.to('.home-grid-info .hide', {opacity: 0});
        tl.to('.home-grid-info .title',{text:"Featured Work", duration: .9, ease: "circ.inOut"}, "-=.5");
        tl.to('.home-grid-info p', {text:"Explore some of Alan's featured work", duration: .9, ease: "circ.inOut"}, "-=1");

        if (video != null) {
            gsap.to(e.currentTarget, {duration: 0.5, delay: 0.1, width: GridSingleDefaultWidth});
            gsap.to(video, { duration: 0.5, opacity: 0 });
            video.muted = true;  
        }
        });


      }
      

    element.addEventListener("click", (e) => {
          body.style.overflow="hidden";
          const videoSrc = e.currentTarget.getAttribute("data-full-video");

          if (videoSrc != null) {
            ovtl.restart();
            ovtl.to(galleryItems, {marginTop: 0, duration: .9, ease: "circ.inOut"});
            ovtl.to('.back-overlay', {autoAlpha:1, scale: 1, duration: .5, ease: "circ.inOut"}, "-=.5");  
            ovtl.to('.grid-video-container', {autoAlpha:1, scale: 1, duration: .5, ease: "circ.inOut"});  
            
            gridVideo.setAttribute('src', videoSrc);
            setTimeout(() => {
                gridVideo.play();  
            },1500)

          }

    });
  });

}


  //Bottom homepage buttons
  if(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('.single-mode') != null){
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('.single-mode').addEventListener('click', (e)=> { 
      gsap.to('.home-grid-slider', {display: "none", scale:0, opacity: 0, duration: .5, ease: "elastic.out(0.4, 0.75)"});  
      gsap.to('.single-mode-wrapper', {display:"block", scale:1, opacity: 1, duration: .9, ease: "elastic.out(0.4, 0.75)"});  
      
  });
  }


  if(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('.stack-mode') != null){
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('.stack-mode').addEventListener('click', (e)=> {
        gsap.to('.home-grid-slider', {display: "block", scale:1, opacity: 1, duration: .9, ease: "elastic.out(0.9, 0.75)"});  
        gsap.to('.single-mode-wrapper', {display: "none",scale:0, opacity: 0, duration: .9, ease: "elastic.out(0.9, 0.75)"}); 
    });
  }

};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeCanvas", function() { return homeCanvas; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const homeCanvas = () => {
  const videoCanvas = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('#video');
  if (videoCanvas) {
      
    var ctx = canvas.getContext("2d"),
      sw = 150,
      frame = document.createElement("canvas"),
      fctx = frame.getContext("2d");

    frame.width = 1455;
    frame.height = 912;

    video.addEventListener("playing", sliceAndDice, false);
    function sliceAndDice() {
      fctx.drawImage(video, 0, 0);

      for (var x = 0; x < frame.width; x += sw) {
        var y = Math.sin(x * 2);
        ctx.drawImage(
          frame,
          x,
          0,
          sw,
          frame.height,
          x * 1.1,
          y,
          sw,
          frame.height
        );
      }
      requestAnimationFrame(sliceAndDice);
    }
  }
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingOverlay", function() { return landingOverlay; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const landingOverlay = () => {

    const mediaQueryMin = window.matchMedia('(min-width: 1800px)');
    const landingOverlay = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$q"])('.landing-overlay');
    
    if(landingOverlay != null){
        landingOverlay.addEventListener('click', () => { 
            gsap.to(landingOverlay, {display: "none", opacity: 0, duration: .5});

            if(mediaQueryMin.matches){
                gsap.from('.swiper-slide', {scale:0, duration: .9, ease: "elastic.out(0.9, 0.75)", delay: .5});
                gsap.from('.home-grid-info', {opacity: 0, y:30, duration: .9, ease: "elastic.out(1, 0.75)", delay: 1});     
              }
        });
    }
}

/***/ })
/******/ ]);
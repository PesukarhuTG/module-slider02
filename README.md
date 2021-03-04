## Module-slider

![](https://github.com/PesukarhuTG/module-slider02/blob/master/img/preview.jpg)
A simlpe slider with dots, current and total numbers of slides<br>
[Preview html page ►](https://pesukarhutg.github.io/module-slider02/)
___________________________
### Usage

In script.js you should set:

    import slider02 from './modules/slider02';

    window.addEventListener('DOMContentLoaded', () => {

        slider02({
            container: '.offer__slider',    //wrap-container including all elements of slider
            nextArrow: '.offer__slider-next',    //selector of arrow "next"
            prevArrow: '.offer__slider-prev',    //selector of arrow "preview"
            slide: '.offer__slide',    //wrap-container selector for each slide
            totalCounter: '#total',    //selector of total counter
            currentCounter: '#current',    //selector of current counter
            wrapper: '.offer__slider-wrapper',    //wrap-container for slides
            field: '.offer__slider-inner'    //wrap-container only for slides
        });
    });


In style.css you can change dots position and design:

    .carousel-indicators {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    }

    .dot {
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    }


### Install
    npm install
    npm install webpack webpack-cli --save-dev
    npx webpack

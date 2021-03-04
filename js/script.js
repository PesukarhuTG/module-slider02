import slider02 from './modules/slider02';

window.addEventListener('DOMContentLoaded', () => {

    slider02({
        container: '.offer__slider_second',
        nextArrow: '.offer__slider-next_second',
        prevArrow: '.offer__slider-prev_second',
        slide: '.offer__slide_second',
        totalCounter: '#total_second',
        currentCounter: '#current_second',
        wrapper: '.offer__slider-wrapper_second',
        field: '.offer__slider-inner'
    });
});
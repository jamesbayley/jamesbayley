import './components/wavingMemoji.js';

// Since there are two copies of each icon in the footer 
// so that the correct icon can be rendered after the color
// theme is determined, sometimes the page can load before 
// the icons have been correctly positioned, resulting in 
// a flash on the page. To mitigate against this, the footer
// bar is hidden from view until the DOM is fully parsed.
window.addEventListener('load', () => {
    document.querySelector('body').style.visibility = 'visible';
})
class WavingMemoji extends HTMLElement { 
  constructor() { 
    super();
       
    const template = document.createElement('template');
    template.innerHTML = `
      <link rel="stylesheet" href="../../styles.css" />

      <style>
        img {
          top: 20vw;
          z-index: 9999;
          height: 200px;
          width: 200px;
          position: absolute;
          animation-name: rotate
          animation-duration: 3s
          animaton-timing-function: ease
          animation-delay: 0
          animation-iteration-count: 1
          animation-direction: normal
          animation-fill-mode: forwards
          animation-play-state: running
          transition: transform 1s linear;
        }

        img:hover { 
          cursor: pointer;
        }
    
        @keyframes rotate-memoji { 
          from { 
              transform: rotate(0deg);
              left: -100px;
          }
          
          to {
            transform: rotate(40deg);
            left: 0px;
          }
      </style>

      <img 
        id="avatar"
        class="light-theme"
        src="/assets/images/memoji/jacket/waving.png" 
        alt="Apple memoji of blonde male with blue eyes waving and wearing a dark jacket." 
      />
      <img 
        id="avatar" 
        class="dark-theme"
        src="/assets/images/memoji/hoodie/waving.png" 
        alt="Apple memoji of blonde male with blue eyes waving and wearing a white hoodie."  
      />
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() { 
    this._img = this.shadowRoot.querySelectorAll('img')
      .filter(img => img.style.display !== 'none');

    this.addEventListener('mouseover', (_) => {
      this._img.style.transform = 'rotate(45deg) scale(1.05, 1.05)';
    });
  
    this.addEventListener('mouseleave', (_) => {
      this._img.style.transform = 'none';
    });
  }
}

customElements.define('waving-memoji', WavingMemoji);
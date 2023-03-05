class HeartMemoji extends HTMLElement { 
  constructor() { 
    super();
       
    const template = document.createElement('template');
    template.innerHTML = `
      <link rel="stylesheet" href="../../css/styles.css" />

      <style>
        img {
          left: 5vw;
          bottom: -200px;
          z-index: 9999;
          height: 200px;
          width: 200px;
          position: fixed;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-fill-mode: forwards;
          animation-play-state: running;
        }

        img { 
          animation-name: exit-memoji;
          animation-duration: 1s;
          animation-delay: 0s;
        }

        @media (min-width: 1200px) { 
          img { 
            animation-name: enter-memoji;
            animation-duration: 4s;
            animation-delay: 0.25s;
          }
        }
    
        @keyframes enter-memoji { 
          0% { bottom: -200px; }
          100% { bottom: 0px; }
        }

        @keyframes exit-memoji { 
          0% { bottom: 0px; }
          100% { bottom: -200px; }
        }
      </style>

      <img 
        id="avatar"
        class="light-theme"
        src="/assets/images/memoji/jacket/heart-sign.png" 
        alt="Apple memoji of blonde male with blue eyes signing a heart and wearing a dark jacket." 
      />
      <img 
        id="avatar" 
        class="dark-theme"
        src="/assets/images/memoji/hoodie/heart-sign.png" 
        alt="Apple memoji of blonde male with blue eyes signing a heart and wearing a white hoodie."  
      />
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() { 
    switch (window.matchMedia('(prefers-color-scheme: dark)').matches) { 
      case true: 
        this._img = this.shadowRoot.querySelector('img[class="dark-theme"]');
        break;
      default: 
        this._img = this.shadowRoot.querySelector('img[class="light-theme"]');
        break;
    }
  }
}

customElements.define('heart-memoji', HeartMemoji);
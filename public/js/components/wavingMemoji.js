class WavingMemoji extends HTMLElement { 
  constructor() { 
    super();
       
    const template = document.createElement('template');
    template.innerHTML = `
      <link rel="stylesheet" href="../../css/styles.css" />

      <style>
        img {
          top: 15vh;
          left: -200px;
          z-index: 9999;
          height: 200px;
          width: 200px;
          position: fixed;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-fill-mode: forwards;
          animation-play-state: running;
        }

        @media ((max-width: 700px) and (orientation: landscape)) { 
          img { 
            animation-name: exit-memoji;
            animation-duration: 1s;
            animation-delay: 0s;
          }
        }

        img { 
          animation-name: enter-memoji;
          animation-duration: 1s;
          animation-delay: 0.25s;
        }
    
        @keyframes enter-memoji { 
          0% { transform: rotate(0deg); left: -200px; }
          100% { transform: rotate(45deg); left: -55px; }
        }

        @keyframes exit-memoji { 
          0% { transform: rotate(45deg); left: -55px; }
          100% { transform: rotate(0deg); left: -200px; }
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

customElements.define('waving-memoji', WavingMemoji);
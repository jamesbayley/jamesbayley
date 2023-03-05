import './heartMemoji.js';
import './phoneCallMemoji.js';
import './wavingMemoji.js';

class MemojiManager extends HTMLElement { 
  constructor() { 
    super();
       
    const template = document.createElement('template');
    template.innerHTML = `
      <link rel="stylesheet" href="../../styles.css" />

      <heart-memoji></heart-memoji>
      <phone-call-memoji></phone-call-memoji>
      <waving-memoji></waving-memoji>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    this._memojis = { 
      heart: this.shadowRoot.querySelector('heart-memoji'),
      phoneCall: this.shadowRoot.querySelector('phone-call-memoji'),
      waving: this.shadowRoot.querySelector('waving-memoji')
    };

    Object.values(this._memojis).forEach(memoji => { 
      memoji.style.visibility = 'hidden';
      console.log(memoji);
    });
  }

  connectedCallback() { 
    this._memojis.waving.style.visibility = 'visible';

    if (window.matchMedia('(min-width: 600px)').matches) { 
      this._memojis.phoneCall.style.visibility = 'visible';
    }

    if (window.matchMedia('(min-width: 1200px)').matches) { 
      this._memojis.heart.style.visibility = 'visible';
    }
  }
}

customElements.define('memoji-manager', MemojiManager);
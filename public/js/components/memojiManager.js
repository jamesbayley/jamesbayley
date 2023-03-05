import './heartMemoji.js';
import './phoneCallMemoji.js';
import './wavingMemoji.js';

class MemojiManager extends HTMLElement { 
  constructor() { 
    super();
       
    const template = document.createElement('template');
    template.innerHTML = `
      <link rel="stylesheet" href="../../css/styles.css" />

      <heart-memoji></heart-memoji>
      <phone-call-memoji></phone-call-memoji>
      <waving-memoji></waving-memoji>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('memoji-manager', MemojiManager);
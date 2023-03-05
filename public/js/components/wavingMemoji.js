class WavingMemoji extends HTMLElement { 
  constructor() { 
    super();
       
    const template = document.createElement('template');
    template.innerHTML = `
      <link rel="stylesheet" href="../styles.css" />

      <style>
        
      </style>

      <div class="checkbox">
        <div class="check"></div> 
      </div>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    this._checkmark = this.shadowRoot.querySelector('.check');

    if (this.getAttribute('checked') === 'true') {
      this._checked = true;
      this._checkmark.style.opacity = '1.0';
    }

    this.addEventListener('click', (_) => {
      this._checked = !this._checked;
      this.setAttribute('checked', this._checked.toString());
      if (this._checked) {
        this._checkmark.style.opacity = '1.0';
      } else {
        this._checkmark.style.opacity = '0.4';
      }
    });

    this.addEventListener('mouseover', (_) => {
      if (!this._checked) {
        this._checkmark.style.opacity = '0.4';
      }
    });

    this.addEventListener('mouseleave', (_) => {
      if (!this._checked) {
        this._checkmark.style.opacity = '0.0';
      }
    });
  }
}

customElements.define('waving-memoji', WavingMemoji);
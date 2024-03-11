export class Nav extends HTMLElement {
  constructor() {
    super();
    this.host = this;
    this.toggleButton = this.host.querySelector('button');
    this.menu = this.host.querySelector('ul');
  }

  connectedCallback() {
    this.toggleMenu();
    this.clickOutside();
  }

  clickOutside() {
    window.addEventListener('click', (e) => {
      if (this.host.hasAttribute('open') && !this.host.contains(e.target)) {
        this.host.removeAttribute('open');
      }
    });
  }

  toggleMenu() {
    this.toggleButton.addEventListener("click", (e) => {
      this.host.toggleAttribute('open');
    });
  }

}

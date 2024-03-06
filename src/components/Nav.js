export class Nav extends HTMLElement {
  constructor() {
    super();
    this.host = this;
    this.toggleButton = this.host.querySelector("button");
    this.menu = this.host.querySelector("ul");
  }

  connectedCallback() {
    this.render();
    this.toggleMenu();
  }

  toggleMenu() {
    this.toggleButton.addEventListener("click", (e) => {
      this.host.toggleAttribute('open');
    });
  }

  render() {
    console.log("content is rendered!");
  }
}

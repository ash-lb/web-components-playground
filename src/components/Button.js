import { events } from "../lib/events.js";

export class Button extends HTMLElement {
  constructor() {
    super();
    this.eventName = this.getAttribute("event-name");
    this.addEventListener("click", this.handleClick);
  }

  handleClick() {
    console.log(events[this.eventName]);
    const event = new CustomEvent(this.eventName, events[this.eventName]);
    this.dispatchEvent(event);
  }

  connectedCallback() {
    this.addEventListener(this.eventName, events[this.eventName].eventFunction);
  }
}

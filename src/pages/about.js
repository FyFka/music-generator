import { LitElement, html, css } from "lit";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import aboutHTML from "../content/ABOUT.md";

export class About extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        padding: 0 3rem;
      }

      @media (max-width: 628px) {
        :host {
          padding: 0 1.25rem;
        }
      }
    `,
  ];

  render() {
    return html`${unsafeHTML(aboutHTML)}`;
  }
}

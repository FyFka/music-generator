import { LitElement, html, css } from "lit";

export class Header extends LitElement {
  static styles = [
    css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        height: 3.75rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
      }

      .header-inner {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem;
        text-decoration: none;
      }

      .header-inner:hover .header-logo {
        transform: rotate(360deg);
      }

      .header-logo {
        height: 2.25rem;
        width: 2.25rem;
        background: url("/logo.svg") center / contain no-repeat;
        transition: transform 0.25s ease-in-out;
      }

      .header-app-name {
        margin: 0;
      }

      .header-app-name {
        color: #202124;
      }

      .header-app-name::first-letter {
        color: #4285f4;
      }
    `,
  ];

  render() {
    return html`<a class="header-inner" href="/">
      <div class="header-logo"></div>
      <h1 class="header-app-name">Music generator</h1>
    </a>`;
  }
}

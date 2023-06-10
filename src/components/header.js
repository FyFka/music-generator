import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
import { GLOBAL_APP_STORE } from "../main";

export class Header extends LitElement {
  static styles = [
    css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        height: 3.75rem;
        gap: 1rem;
        width: 100%;
        padding: 0 1rem;
        box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
      }

      .header-inner {
        display: flex;
        align-items: center;
        gap: 1rem;
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

      .header-routes {
        display: flex;
        height: 100%;
      }

      .header-target-route {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #5f6368;
        font-weight: 500;
        text-decoration: none;
        padding: 1rem;
        border-radius: 0.125rem;
      }

      .header--active-route:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.125rem;
        background-color: #4285f4;
      }

      .header-target-route:hover {
        background-color: #f8f9fa;
        color: #202124;
      }
    `,
  ];

  static properties = {
    routes: { type: Array },
    currentRoute: { type: String },
  };

  _setupRouteChange() {
    window.addEventListener("vaadin-router-location-changed", (event) => {
      this.currentRoute = event.detail.location.pathname;
    });
  }

  constructor() {
    super();
    this.routes = GLOBAL_APP_STORE.routes.filter(({ isHidden }) => !isHidden);
    this._setupRouteChange();
  }

  render() {
    return html`<a class="header-inner" href="/">
        <div class="header-logo"></div>
        <h1 class="header-app-name">Music generator</h1>
      </a>
      <div class="header-routes">
        ${this.routes.map(
          ({ title, path }) =>
            html`<a class="header-target-route ${
              path === this.currentRoute ? "header--active-route" : ""
            }"" href="${path}">${title}</a>`
        )}
      </div> `;
  }
}

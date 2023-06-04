import { LitElement, html, css } from "lit";

export class NotFound extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      .not-found-name {
        text-transform: capitalize;
        font-size: 2.5rem;
        margin: 0 0 1.5rem;
      }

      .not-found-action {
        display: block;
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        background-color: #1a73e8;
        padding: 0.75rem 1.5rem;
        border-radius: 0.25rem;
        transition: background-color 0.15s ease-in-out;
      }

      .not-found-action:hover {
        background-color: #185abc;
      }
    `,
  ];

  render() {
    return html`
      <h3 class="not-found-name">Not Found (404)</h3>
      <a class="not-found-action" href="/">Back to save place</a>
    `;
  }
}

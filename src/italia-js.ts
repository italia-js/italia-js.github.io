import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/hero-section';
import './components/discord-stats';
import './components/footer-section';

@customElement('italia-js')
export class ItaliaJs extends LitElement {
  render() {
    return html`
      <main>
        <hero-section></hero-section>
        <discord-stats></discord-stats>
      </main>
      <footer-section></footer-section>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2rem;
      box-sizing: border-box;
      width: 100%;
      padding-top: 5vh; /* Added top spacing */
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center; /* Center vertically */
      align-items: center;
      gap: 1rem; /* Reduced gap */
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'italia-js': ItaliaJs;
  }
}

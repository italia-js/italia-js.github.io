import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('footer-section')
export class FooterSection extends LitElement {
    render() {
        return html`
      <footer>
        <div class="links">
          <a href="https://twitter.com/italia_js" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/italia-js" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://github.com/italia-js/code-of-conduct" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Italia JS
        </div>
      </footer>
    `;
    }

    static styles = css`
    :host {
      display: block;
      margin-top: auto;
      padding: 2rem 0;
      border-top: 1px solid rgba(128, 128, 128, 0.1);
    }

    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .links {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    a {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      opacity: 0.7;
      transition: opacity 0.2s;
    }

    a:hover {
      opacity: 1;
      color: var(--primary-color);
    }

    .copyright {
      font-size: 0.875rem;
      opacity: 0.5;
    }
  `;
}

declare global {
    interface HTMLElementTagNameMap {
        'footer-section': FooterSection;
    }
}

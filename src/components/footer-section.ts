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
      width: 100%;
    }

    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      position: relative;
    }

    .links {
      display: flex;
      gap: 3rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    a {
      color: var(--text-muted);
      text-decoration: none;
      font-family: var(--font-body);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      position: relative;
    }

    a:hover {
      color: var(--neon-cyan);
      text-shadow: 0 0 5px var(--neon-cyan);
    }
    
    a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0%;
      height: 1px;
      background: var(--neon-cyan);
      transition: width 0.3s ease;
    }
    
    a:hover::after {
      width: 100%;
    }

    .copyright {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.4);
      font-family: var(--font-mono, monospace);
      letter-spacing: 1px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'footer-section': FooterSection;
  }
}

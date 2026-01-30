import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hero-section')
export class HeroSection extends LitElement {
  render() {
    return html`
      <div class="hero-container">
        <div class="hud-ring"></div>
        <div class="hud-ring-inner"></div>
        <section class="hero">
          <h1 class="title" data-text="ITALIA JS">ITALIA JS</h1>
          <p class="slogan">LA COMMUNITY JAVASCRIPT ITALIANA</p>
          <div class="cta-container">
            <a href="https://discord.com/invite/3cQtvAK9" target="_blank" class="cta-button">
              <span class="cta-text">Unisciti a Discord</span>
              <div class="cta-glitch"></div>
            </a>
          </div>
        </section>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      text-align: center;
      position: relative;
      margin-top: 5vh;
      perspective: 1000px;
    }

    .hero-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4rem 1rem;
      transform-style: preserve-3d;
    }

    /* HUD Rings */
    .hud-ring, .hud-ring-inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 1px solid var(--neon-cyan);
      opacity: 0.3;
      pointer-events: none;
      z-index: -1;
    }

    .hud-ring {
      width: min(500px, 50vw);
      height: min(500px, 50vw);
      border-top-color: transparent;
      border-bottom-color: transparent;
      animation: spin 20s linear infinite;
    }

    .hud-ring-inner {
      width: min(350px, 35vw);
      height: min(350px, 35vw);
      border: 1px dashed var(--neon-magenta);
      animation: spin-reverse 15s linear infinite;
    }

    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      z-index: 1;
      text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
    }

    .title {
      font-family: var(--font-display);
      font-size: min(5rem, 10vw);
      font-weight: 700;
      margin: 0;
      color: #fff;
      position: relative;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      animation: glitch-skew 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    }

    .title::before,
    .title::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .title::before {
      left: 2px;
      text-shadow: -1px 0 var(--neon-magenta);
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }

    .title::after {
      left: -2px;
      text-shadow: -1px 0 var(--neon-cyan);
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim2 5s infinite linear alternate-reverse;
    }

    .slogan {
      font-family: var(--font-body);
      font-size: min(1.2rem, 3vw);
      color: var(--text-muted);
      margin: 0;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border-left: 2px solid var(--neon-cyan);
      border-right: 2px solid var(--neon-cyan);
      padding: 0 1rem;
      background: rgba(0, 240, 255, 0.05);
    }

    .cta-container {
      margin-top: 3rem;
    }

    .cta-button {
      position: relative;
      display: inline-block;
      padding: 1rem 2.5rem;
      background: transparent;
      color: var(--neon-cyan);
      text-decoration: none;
      font-family: var(--font-display);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      border: 1px solid var(--neon-cyan);
      overflow: hidden;
      transition: 0.3s;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    }

    .cta-button:hover {
      background: var(--neon-cyan);
      color: #000;
      box-shadow: 0 0 20px var(--neon-cyan);
      transform: scale(1.05);
    }

    @keyframes spin {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    @keyframes spin-reverse {
      from { transform: translate(-50%, -50%) rotate(360deg); }
      to { transform: translate(-50%, -50%) rotate(0deg); }
    }

    @keyframes glitch-anim {
      0% { clip: rect(30px, 9999px, 10px, 0); }
      20% { clip: rect(80px, 9999px, 90px, 0); }
      40% { clip: rect(10px, 9999px, 50px, 0); }
      60% { clip: rect(60px, 9999px, 20px, 0); }
      80% { clip: rect(20px, 9999px, 80px, 0); }
      100% { clip: rect(90px, 9999px, 30px, 0); }
    }

    @keyframes glitch-anim2 {
      0% { clip: rect(10px, 9999px, 80px, 0); }
      20% { clip: rect(40px, 9999px, 10px, 0); }
      40% { clip: rect(90px, 9999px, 30px, 0); }
      60% { clip: rect(20px, 9999px, 60px, 0); }
      80% { clip: rect(70px, 9999px, 20px, 0); }
      100% { clip: rect(30px, 9999px, 90px, 0); }
    }

    @keyframes glitch-skew {
      0% { transform: skew(0deg); }
      20% { transform: skew(-2deg); }
      40% { transform: skew(2deg); }
      60% { transform: skew(-1deg); }
      80% { transform: skew(3deg); }
      100% { transform: skew(0deg); }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-section': HeroSection;
  }
}

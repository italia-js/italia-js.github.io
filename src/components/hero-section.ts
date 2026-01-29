import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hero-section')
export class HeroSection extends LitElement {
  render() {
    return html`
      <div class="ring-container">
        <div class="glowing-ring"></div>
        <section class="hero">
          <h1 class="title">Italia JS</h1>
          <p class="slogan">La community JavaScript italiana</p>
          <div class="cta-container">
            <a href="https://discord.com/invite/3cQtvAK9" target="_blank" class="cta-button">
             <svg class="discord-icon" width="40" height="40" viewBox="0 0 127.14 96.36" fill="white">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg> 
              <span>Unisciti a Discord</span>
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
      padding: 0; /* Removed padding to help with height */
      position: relative;
    }

    .ring-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3rem 1rem; /* Reduced padding */
    }

    .glowing-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 450px; /* Slightly smaller */
      height: 450px;
      border-radius: 50%;
      border: 2px solid rgba(189, 0, 255, 0.3);
      box-shadow: 0 0 50px rgba(189, 0, 255, 0.2), inset 0 0 50px rgba(189, 0, 255, 0.2);
      z-index: -1;
      pointer-events: none;
    }
    
    .glowing-ring::before {
       content: '';
       position: absolute;
       inset: -2px;
       border-radius: 50%;
       background: conic-gradient(from 0deg, transparent, rgba(189, 0, 255, 0.8), transparent 60%);
       animation: spin 10s linear infinite;
       mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
       -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
       mask-composite: exclude;
       -webkit-mask-composite: xor;
       padding: 2px;
    }

    @media (max-width: 600px) {
      .glowing-ring {
        width: 300px;
        height: 300px;
      }
    }

    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      z-index: 1;
    }

    .title {
      font-size: 5rem;
      font-weight: 800;
      margin: 0;
      background: linear-gradient(90deg, #60a5fa, #c084fc, #f472b6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      line-height: 1.1;
      letter-spacing: -2px;
      filter: drop-shadow(0 0 20px rgba(192, 132, 252, 0.4));
    }
    
    @media (min-width: 768px) {
      .title {
        font-size: 7rem;
      }
    }

    .slogan {
      font-size: 1.5rem;
      color: #e2e8f0;
      opacity: 0.9;
      margin: 0;
      font-weight: 300;
      letter-spacing: 0.5px;
    }

    .cta-container {
      margin-top: 2rem;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem; /* Space between icon and text */
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
      color: white;
      padding: 0.75rem 2rem; /* Adjusted padding */
      border-radius: 50px;
      font-size: 1.25rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.3);
      animation: pulse-glow 2s infinite ease-in-out;
    }

    .cta-button:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 0 40px rgba(6, 182, 212, 0.9);
      filter: brightness(1.2);
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse-glow {
      0% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); }
      50% { box-shadow: 0 0 35px rgba(6, 182, 212, 0.9); }
      100% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-section': HeroSection;
  }
}

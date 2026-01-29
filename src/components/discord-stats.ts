import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('discord-stats')
export class DiscordStats extends LitElement {
  @state()
  private _presenceCount: number | null = null;

  @state()
  private _memberCount: number | null = null;

  @state()
  private _loading: boolean = true;

  @state()
  private _error: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchDiscordStats();
  }

  async fetchDiscordStats() {
    try {
      // Using the invite code endpoint to get both counts
      const response = await fetch('https://discord.com/api/v9/invites/3cQtvAK9?with_counts=true');
      if (!response.ok) throw new Error('Failed to fetch stats');

      const data = await response.json();
      this._presenceCount = data.approximate_presence_count;
      this._memberCount = data.approximate_member_count;
      this._loading = false;
    } catch (e) {
      console.error(e);
      this._error = true;
      this._loading = false;
    }
  }

  render() {
    if (this._error) return html``;

    return html`
      <div class="stats-card">
        ${this._loading
        ? html`<div class="loading">In caricamento...</div>`
        : html`
            <div class="stat-section">
              <div class="stat-content">
                <span class="count">${this._memberCount}</span>
                <span class="label">Membri Totali</span>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="stat-section">
              <div class="stat-content">
                <span class="count online">${this._presenceCount}</span>
                <span class="label">Online Ora</span>
              </div>
            </div>
          `}
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 3rem auto;
      max-width: 600px;
    }

    .stats-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 0;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      position: relative;
    }
    
    /* Simulate the gradient glow at the bottom from the image */
    .stats-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #00ffff, #bd00ff);
      opacity: 0.7;
    }

    .stat-section {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem 3rem;
      flex: 1;
      justify-content: center;
    }

    .discord-icon {
      width: 50px;
      height: auto;
      filter: drop-shadow(0 0 5px rgba(255,255,255,0.5));
    }

    .stat-content {
      display: flex;
      flex-direction: column;
      align-items: center; /* Centered alignment as requested ("always align to each other") */
    }

    .count {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1;
      color: white;
      text-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    
    .count.online {
      color: #00ff88; /* Bright Neon Green */
      text-shadow: 0 0 10px rgba(0, 255, 136, 0.4);
    }

    .label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-top: 0.5rem;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
      white-space: nowrap; /* Prevent wrapping */
    }

    .divider {
      width: 1px;
      align-self: stretch;
      background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent);
    }
    
    .loading {
      padding: 2rem;
      color: white;
      width: 100%;
      text-align: center;
    }

    @media (max-width: 600px) {
      .stats-card {
        flex-direction: column;
      }
      .stat-section {
        width: 100%;
        padding: 1.5rem;
      }
      .divider {
        width: 80%;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'discord-stats': DiscordStats;
  }
}

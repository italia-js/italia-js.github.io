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
      const response = await fetch('https://discord.com/api/v9/invites/CrHrweEaUg?with_counts=true');
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
      margin: 2vh auto 0 auto;
      max-width: 700px;
      perspective: 1000px;
    }

    .stats-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--glass-bg);
      backdrop-filter: var(--backdrop-blur);
      -webkit-backdrop-filter: var(--backdrop-blur);
      padding: 0;
      border: var(--glass-border);
      box-shadow: var(--glass-shadow);
      position: relative;
      transform: rotateX(10deg);
      transition: transform 0.3s ease;
    }

    .stats-card:hover {
      transform: rotateX(0deg) scale(1.02);
      box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
    }

    /* Neon corners */
    .stats-card::before, .stats-card::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid var(--neon-cyan);
      transition: all 0.3s ease;
    }

    .stats-card::before {
      top: -1px;
      left: -1px;
      border-right: none;
      border-bottom: none;
    }

    .stats-card::after {
      bottom: -1px;
      right: -1px;
      border-left: none;
      border-top: none;
    }

    .stat-section {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem 3rem;
      flex: 1;
      justify-content: center;
      position: relative;
    }

    .stat-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .count {
      font-family: var(--font-mono, monospace);
      font-size: min(2.5rem, 4vh);
      font-weight: 700;
      line-height: 1;
      color: #fff;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
    
    .count.online {
      color: var(--electric-green);
      text-shadow: 0 0 10px var(--electric-green);
    }

    .label {
      font-family: var(--font-body);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 0.8rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    .divider {
      width: 1px;
      height: 60px;
      background: linear-gradient(to bottom, transparent, var(--neon-magenta), transparent);
    }
    
    .loading {
      padding: 2rem;
      color: var(--neon-cyan);
      width: 100%;
      text-align: center;
      font-family: var(--font-mono, monospace);
      letter-spacing: 1px;
      animation: pulse 1s infinite alternate;
    }

    @keyframes pulse {
      from { opacity: 0.5; }
      to { opacity: 1; }
    }

    @media (max-width: 600px) {
      .stats-card {
        flex-direction: column;
        transform: none;
      }
      .stat-section {
        width: 100%;
        padding: 1.5rem;
      }
      .divider {
        width: 80%;
        height: 1px;
        background: linear-gradient(to right, transparent, var(--neon-magenta), transparent);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'discord-stats': DiscordStats;
  }
}

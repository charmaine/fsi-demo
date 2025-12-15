import Chart from 'chart.js/auto';

// Portfolio Data - Realistic FSI holdings
const portfolioData = {
  summary: {
    totalValue: 871420.00,
    totalCost: 785000.00,
    dayChange: 3245.67,
    dayChangePercent: 0.37,
    cashBalance: 24580.00
  },
  holdings: [
    { id: 'cfb08d5d-baf4-433b-ab9a-a6391e4f472e', symbol: 'VTI', name: 'Vanguard Total Stock Market Index Fund ETF', shares: 450, price: 561.78, cost: 485.20, firstActivity: '2023-03-09', allocation: 29.00, change: 0.45, performance: 15.78 },
    { id: '9163b931-0d14-4f9b-b959-f50af7d0ebd3', symbol: 'SPY', name: 'SPDR S&P 500 ETF Trust', shares: 395, price: 605.70, cost: 542.30, firstActivity: '2023-01-14', allocation: 27.45, change: 0.21, performance: 11.69 },
    { id: '14b1a815-bbd1-4e2d-92f9-ee411ea0b6c8', symbol: 'QQQ', name: 'Invesco QQQ Trust', shares: 162, price: 525.04, cost: 445.80, firstActivity: '2023-01-31', allocation: 9.76, change: 0.74, performance: 17.77 },
    { id: 'd2769b7f-7b96-475e-86a0-ed269ceeef8', symbol: 'MSFT', name: 'Microsoft Corporation', shares: 145, price: 419.52, cost: 342.15, firstActivity: '2023-02-14', allocation: 6.98, change: 0.82, performance: 22.61 },
    { id: '851ab4ab-1ee7-45f5-b80a-ffe8b2cf9097', symbol: 'BND', name: 'Vanguard Total Bond Market Index Fund', shares: 720, price: 81.67, cost: 84.20, firstActivity: '2023-01-09', allocation: 6.75, change: -0.12, performance: -3.01 },
    { id: '7db976d1-6c83-4a43-86a3-5e999db3d4cc', symbol: 'AAPL', name: 'Apple Inc.', shares: 280, price: 198.50, cost: 165.40, firstActivity: '2023-01-19', allocation: 6.37, change: -0.35, performance: 20.01 },
    { id: 'c30652ba-b696-4b08-9afd-86d1f45d924e', symbol: 'NVDA', name: 'NVIDIA Corporation', shares: 35, price: 1257.80, cost: 485.60, firstActivity: '2023-03-31', allocation: 5.05, change: 2.14, performance: 159.02 },
    { id: '062a4bd7-4baf-4f6c-8f25-53483270c6f5', symbol: 'GOOGL', name: 'Alphabet Inc. Class A', shares: 195, price: 180.12, cost: 142.50, firstActivity: '2023-02-29', allocation: 4.03, change: 0.95, performance: 26.40 },
    { id: 'c37c5453-26ab-46ea-a9ea-1b0d2681cf39', symbol: 'VXUS', name: 'Vanguard Total International Stock ETF', shares: 325, price: 60.25, cost: 58.40, firstActivity: '2023-02-19', allocation: 2.25, change: 0.32, performance: 3.17 },
    { id: 'fde61f2d-7606-40b5-a289-87cce1fea742', symbol: 'AMZN', name: 'Amazon.com, Inc.', shares: 85, price: 227.35, cost: 178.20, firstActivity: '2023-03-14', allocation: 2.22, change: 1.25, performance: 27.58 }
  ],
  allocation: [
    { name: 'US Equities', value: 52, color: '#1976d2' },
    { name: 'ETFs', value: 28, color: '#42a5f5' },
    { name: 'Fixed Income', value: 8, color: '#c0392b' },
    { name: 'International', value: 7, color: '#f39c12' },
    { name: 'Cash', value: 5, color: '#95a5a6' }
  ],
  indices: [
    { symbol: 'SPY', name: 'S&P 500', price: 605.42, change: 1.24, changePercent: 0.21 },
    { symbol: 'QQQ', name: 'NASDAQ 100', price: 525.18, change: 3.87, changePercent: 0.74 },
    { symbol: 'DIA', name: 'Dow Jones', price: 438.56, change: -0.92, changePercent: -0.21 },
    { symbol: 'IWM', name: 'Russell 2000', price: 225.34, change: 1.56, changePercent: 0.70 },
    { symbol: 'VIX', name: 'Volatility Index', price: 12.45, change: -0.34, changePercent: -2.66 },
    { symbol: 'TLT', name: '20+ Year Treasury', price: 92.15, change: -0.28, changePercent: -0.30 }
  ],
  sectors: [
    { name: 'Technology', change: 2.45 },
    { name: 'Healthcare', change: 1.12 },
    { name: 'Financials', change: 0.85 },
    { name: 'Consumer Disc.', change: 0.67 },
    { name: 'Communication', change: 0.45 },
    { name: 'Industrials', change: 0.32 },
    { name: 'Energy', change: -0.54 },
    { name: 'Utilities', change: -0.78 },
    { name: 'Real Estate', change: -1.12 },
    { name: 'Materials', change: -0.25 }
  ],
  movers: {
    gainers: [
      { symbol: 'NVDA', name: 'NVIDIA Corporation', change: 5.24 },
      { symbol: 'SMCI', name: 'Super Micro Computer', change: 4.87 },
      { symbol: 'AMD', name: 'Advanced Micro Devices', change: 3.92 },
      { symbol: 'TSLA', name: 'Tesla Inc.', change: 3.15 },
      { symbol: 'META', name: 'Meta Platforms', change: 2.78 }
    ],
    losers: [
      { symbol: 'INTC', name: 'Intel Corporation', change: -3.45 },
      { symbol: 'BA', name: 'Boeing Company', change: -2.87 },
      { symbol: 'DIS', name: 'Walt Disney', change: -2.12 },
      { symbol: 'NKE', name: 'Nike Inc.', change: -1.95 },
      { symbol: 'PFE', name: 'Pfizer Inc.', change: -1.67 }
    ]
  },
  transactions: [
    { type: 'buy', symbol: 'NVDA', name: 'NVIDIA Corporation', date: '2024-12-10', shares: 5, price: 1245.00, total: 6225.00 },
    { type: 'dividend', symbol: 'VTI', name: 'Vanguard Total Stock Market', date: '2024-12-05', shares: null, price: null, total: 342.50 },
    { type: 'buy', symbol: 'MSFT', name: 'Microsoft Corporation', date: '2024-11-28', shares: 10, price: 415.20, total: 4152.00 },
    { type: 'sell', symbol: 'TSLA', name: 'Tesla Inc.', date: '2024-11-15', shares: 25, price: 352.40, total: 8810.00 },
    { type: 'dividend', symbol: 'SPY', name: 'SPDR S&P 500 ETF', date: '2024-11-12', shares: null, price: null, total: 487.25 },
    { type: 'buy', symbol: 'GOOGL', name: 'Alphabet Inc.', date: '2024-11-05', shares: 20, price: 175.80, total: 3516.00 }
  ],
  watchlist: [
    { symbol: 'PLTR', name: 'Palantir Technologies', price: 78.45, change: 3.24, changePercent: 4.31 },
    { symbol: 'COIN', name: 'Coinbase Global', price: 312.80, change: 8.45, changePercent: 2.78 },
    { symbol: 'SNOW', name: 'Snowflake Inc.', price: 178.92, change: -2.34, changePercent: -1.29 },
    { symbol: 'CRWD', name: 'CrowdStrike Holdings', price: 365.40, change: 5.67, changePercent: 1.58 },
    { symbol: 'NET', name: 'Cloudflare Inc.', price: 118.25, change: 1.89, changePercent: 1.62 },
    { symbol: 'DDOG', name: 'Datadog Inc.', price: 142.67, change: -0.95, changePercent: -0.66 }
  ],
  chartData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [785000, 798000, 812000, 795000, 825000, 842000, 835000, 858000, 845000, 862000, 878000, 871420]
  },
  performanceData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    portfolio: [0, 1.65, 3.44, 1.27, 5.10, 7.26, 6.37, 9.30, 7.64, 9.81, 11.85, 11.01],
    benchmark: [0, 1.42, 2.87, 0.95, 4.25, 6.12, 5.45, 7.89, 6.23, 8.15, 9.87, 9.45]
  }
};

// Format currency
function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

// Format percent
function formatPercent(value, showSign = true) {
  const sign = showSign && value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

// Format date
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
}

// Generate UUID-like ID
function generateId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

// Update summary cards
function updateSummary() {
  const { summary } = portfolioData;
  const totalGain = summary.totalValue - summary.totalCost;
  const totalGainPercent = (totalGain / summary.totalCost) * 100;

  document.getElementById('totalValue').textContent = formatCurrency(summary.totalValue);
  document.getElementById('totalChange').textContent = `+${formatCurrency(totalGain)} (${formatPercent(totalGainPercent)})`;
  document.getElementById('totalChange').className = `card-change ${totalGain >= 0 ? 'positive' : 'negative'}`;

  document.getElementById('dayGain').textContent = formatCurrency(summary.dayChange);
  document.getElementById('dayGain').className = `card-value ${summary.dayChange >= 0 ? 'positive' : 'negative'}`;
  document.getElementById('dayGainPercent').textContent = formatPercent(summary.dayChangePercent);
  document.getElementById('dayGainPercent').className = `card-change ${summary.dayChangePercent >= 0 ? 'positive' : 'negative'}`;

  document.getElementById('totalGain').textContent = formatCurrency(totalGain);
  document.getElementById('totalGain').className = `card-value ${totalGain >= 0 ? 'positive' : 'negative'}`;
  document.getElementById('totalGainPercent').textContent = formatPercent(totalGainPercent);
  document.getElementById('totalGainPercent').className = `card-change ${totalGainPercent >= 0 ? 'positive' : 'negative'}`;

  document.getElementById('cashBalance').textContent = formatCurrency(summary.cashBalance);
}

// Render top holdings
function renderTopHoldings() {
  const container = document.getElementById('topHoldings');
  const topFive = portfolioData.holdings.slice(0, 5);

  container.innerHTML = topFive.map(h => `
    <div class="holding-row" onclick="showHoldingDetails('${h.symbol}')" style="cursor: pointer;">
      <div class="holding-info">
        <div class="holding-name">${h.name}</div>
        <div class="holding-symbol">${h.symbol}</div>
      </div>
      <div class="holding-value">
        <div class="holding-amount">${formatCurrency(h.shares * h.price)}</div>
        <div class="holding-change ${h.change >= 0 ? 'positive' : 'negative'}">${formatPercent(h.change)}</div>
      </div>
    </div>
  `).join('');
}

// Render indices
function renderIndices(containerId = 'indicesGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = portfolioData.indices.map(idx => `
    <div class="index-card" onclick="showIndexDetails('${idx.symbol}')" style="cursor: pointer;">
      <div class="index-symbol">${idx.symbol}</div>
      <div class="index-name">${idx.name}</div>
      <div class="index-price">${formatCurrency(idx.price)}</div>
      <div class="index-change ${idx.changePercent >= 0 ? 'positive' : 'negative'}">
        ${idx.change >= 0 ? '+' : ''}${idx.change.toFixed(2)} (${formatPercent(idx.changePercent)})
      </div>
    </div>
  `).join('');
}

// Show index details
function showIndexDetails(symbol) {
  const index = portfolioData.indices.find(i => i.symbol === symbol);
  if (index) {
    const details = `
${index.name} (${index.symbol})

Current Price: ${formatCurrency(index.price)}
Day Change: ${index.change >= 0 ? '+' : ''}${index.change.toFixed(2)}
Percent Change: ${formatPercent(index.changePercent)}

52-Week High: ${formatCurrency(index.price * 1.15)}
52-Week Low: ${formatCurrency(index.price * 0.85)}
YTD Return: ${formatPercent((Math.random() * 20) - 5)}
    `;
    alert(details);
  }
}

window.showIndexDetails = showIndexDetails;

// Render holdings table
function renderHoldingsTable() {
  const tbody = document.getElementById('holdingsTableBody');
  if (!tbody) return;

  tbody.innerHTML = portfolioData.holdings.map(h => `
    <tr onclick="showHoldingDetails('${h.symbol}')" style="cursor: pointer;">
      <td>
        <div class="holding-cell-name">${h.name}</div>
        <div class="holding-cell-id">${h.id}</div>
      </td>
      <td>${formatDate(h.firstActivity)}</td>
      <td>${formatCurrency(h.shares * h.price)}</td>
      <td>${h.allocation.toFixed(2)}%</td>
      <td class="${h.change >= 0 ? 'positive' : 'negative'}">${formatPercent(h.change)}</td>
      <td class="${h.performance >= 0 ? 'positive' : 'negative'}">${formatPercent(h.performance)}</td>
    </tr>
  `).join('');
}

// Show holding details
function showHoldingDetails(symbol) {
  const holding = portfolioData.holdings.find(h => h.symbol === symbol);
  if (holding) {
    const details = `
${holding.name} (${holding.symbol})

Shares: ${holding.shares}
Current Price: ${formatCurrency(holding.price)}
Cost Basis: ${formatCurrency(holding.cost)}
Market Value: ${formatCurrency(holding.shares * holding.price)}
Total Cost: ${formatCurrency(holding.shares * holding.cost)}
Unrealized Gain: ${formatCurrency((holding.price - holding.cost) * holding.shares)}
Performance: ${formatPercent(holding.performance)}
Allocation: ${holding.allocation.toFixed(2)}%
First Activity: ${formatDate(holding.firstActivity)}
    `;
    alert(details);
  }
}

window.showHoldingDetails = showHoldingDetails;

// Render transactions
function renderTransactions() {
  const container = document.getElementById('transactionsList');
  if (!container) return;

  container.innerHTML = portfolioData.transactions.map(t => `
    <div class="transaction-item">
      <div class="transaction-icon ${t.type}">${t.type === 'buy' ? 'B' : t.type === 'sell' ? 'S' : 'D'}</div>
      <div class="transaction-info">
        <div class="transaction-title">${t.type.charAt(0).toUpperCase() + t.type.slice(1)} ${t.symbol}</div>
        <div class="transaction-date">${formatDate(t.date)}</div>
      </div>
      <div class="transaction-amount">
        <div class="transaction-value ${t.type === 'sell' || t.type === 'dividend' ? 'positive' : ''}">${t.type === 'sell' || t.type === 'dividend' ? '+' : '-'}${formatCurrency(t.total)}</div>
        ${t.shares ? `<div class="transaction-shares">${t.shares} shares @ ${formatCurrency(t.price)}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// Render watchlist
function renderWatchlist() {
  const container = document.getElementById('watchlistGrid');
  if (!container) return;

  container.innerHTML = portfolioData.watchlist.map(w => `
    <div class="watchlist-card">
      <div class="watchlist-header">
        <div>
          <div class="watchlist-symbol">${w.symbol}</div>
          <div class="watchlist-name">${w.name}</div>
        </div>
        <span class="watchlist-remove" onclick="removeFromWatchlist('${w.symbol}')" style="cursor: pointer;">x</span>
      </div>
      <div class="watchlist-price">${formatCurrency(w.price)}</div>
      <div class="watchlist-change ${w.changePercent >= 0 ? 'positive' : 'negative'}">
        ${w.change >= 0 ? '+' : ''}${w.change.toFixed(2)} (${formatPercent(w.changePercent)})
      </div>
    </div>
  `).join('');
}

// Make functions available globally for onclick handlers
window.removeFromWatchlist = removeFromWatchlist;

// Render sectors
function renderSectors() {
  const container = document.getElementById('sectorsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.sectors.map(s => `
    <div class="sector-item">
      <span class="sector-name">${s.name}</span>
      <div class="sector-bar">
        <div class="sector-bar-fill ${s.change >= 0 ? 'positive' : 'negative'}" style="width: ${Math.min(Math.abs(s.change) * 20, 100)}%"></div>
      </div>
      <span class="sector-value ${s.change >= 0 ? 'positive' : 'negative'}">${formatPercent(s.change)}</span>
    </div>
  `).join('');
}

// Render movers
function renderMovers() {
  const gainersContainer = document.getElementById('topGainers');
  const losersContainer = document.getElementById('topLosers');

  if (gainersContainer) {
    gainersContainer.innerHTML = portfolioData.movers.gainers.map(m => `
      <div class="mover-item" onclick="showMoverDetails('${m.symbol}', '${m.name}', ${m.change})" style="cursor: pointer;">
        <span class="mover-symbol">${m.symbol}</span>
        <span class="mover-name">${m.name}</span>
        <span class="mover-change positive">${formatPercent(m.change)}</span>
      </div>
    `).join('');
  }

  if (losersContainer) {
    losersContainer.innerHTML = portfolioData.movers.losers.map(m => `
      <div class="mover-item" onclick="showMoverDetails('${m.symbol}', '${m.name}', ${m.change})" style="cursor: pointer;">
        <span class="mover-symbol">${m.symbol}</span>
        <span class="mover-name">${m.name}</span>
        <span class="mover-change negative">${formatPercent(m.change)}</span>
      </div>
    `).join('');
  }
}

// Show mover details
function showMoverDetails(symbol, name, change) {
  const price = Math.random() * 500 + 50;
  const details = `
${name} (${symbol})

Current Price: ${formatCurrency(price)}
Day Change: ${formatPercent(change)}
Volume: ${(Math.random() * 50 + 5).toFixed(1)}M
Market Cap: ${formatCurrency(price * (Math.random() * 500 + 100) * 1000000)}

[Add to Watchlist]
  `;
  if (confirm(details + '\n\nAdd to watchlist?')) {
    portfolioData.watchlist.push({
      symbol,
      name,
      price,
      change: change,
      changePercent: change
    });
    renderWatchlist();
    alert(`${symbol} added to watchlist`);
  }
}

window.showMoverDetails = showMoverDetails;

// Render allocation legend
function renderAllocationLegend() {
  const container = document.getElementById('allocationLegend');
  if (!container) return;

  container.innerHTML = portfolioData.allocation.map(a => `
    <div class="legend-item">
      <div class="legend-color" style="background: ${a.color}"></div>
      <span>${a.name} (${a.value}%)</span>
    </div>
  `).join('');
}

// Initialize portfolio chart
function initPortfolioChart() {
  const ctx = document.getElementById('portfolioChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: portfolioData.chartData.labels,
      datasets: [{
        label: 'Portfolio Value',
        data: portfolioData.chartData.values,
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.1)',
        fill: true,
        tension: 0.2,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => formatCurrency(ctx.raw)
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#999' }
        },
        y: {
          grid: { color: '#f0f0f0' },
          ticks: {
            color: '#999',
            callback: value => formatCurrency(value)
          }
        }
      }
    }
  });
}

// Initialize allocation chart
function initAllocationChart() {
  const ctx = document.getElementById('allocationChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: portfolioData.allocation.map(a => a.name),
      datasets: [{
        data: portfolioData.allocation.map(a => a.value),
        backgroundColor: portfolioData.allocation.map(a => a.color),
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      cutout: '65%'
    }
  });
}

// Initialize performance chart
function initPerformanceChart() {
  const ctx = document.getElementById('performanceChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: portfolioData.performanceData.labels,
      datasets: [
        {
          label: 'Portfolio',
          data: portfolioData.performanceData.portfolio,
          borderColor: '#1976d2',
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
          fill: true,
          tension: 0.2,
          borderWidth: 2
        },
        {
          label: 'S&P 500',
          data: portfolioData.performanceData.benchmark,
          borderColor: '#999',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          tension: 0.3,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: { usePointStyle: true }
        },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${formatPercent(ctx.raw)}`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#999' }
        },
        y: {
          grid: { color: '#f0f0f0' },
          ticks: {
            color: '#999',
            callback: value => formatPercent(value, false)
          }
        }
      }
    }
  });
}

// Navigation handling
function initNavigation() {
  // Sidebar navigation
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = item.dataset.view;

      // Update active states
      document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Show selected view
      document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
      const targetView = document.getElementById(`view-${viewId}`);
      if (targetView) {
        targetView.style.display = 'block';

        // Initialize charts for specific views
        if (viewId === 'performance') {
          setTimeout(initPerformanceChart, 100);
        }
        if (viewId === 'markets') {
          renderIndices('marketsIndices');
        }
      }
    });
  });

  // View all links
  document.querySelectorAll('.view-all').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = link.dataset.view;
      const sidebarItem = document.querySelector(`.sidebar-item[data-view="${viewId}"]`);
      if (sidebarItem) sidebarItem.click();
    });
  });
}

// Update timestamp
function updateTimestamp() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('lastUpdate').textContent = timeStr;
}

// Sort holdings
let currentSort = { field: 'allocation', direction: 'desc' };

function sortHoldings(field) {
  if (currentSort.field === field) {
    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.field = field;
    currentSort.direction = 'desc';
  }

  const sortFn = (a, b) => {
    let valA, valB;
    switch (field) {
      case 'name': valA = a.name; valB = b.name; break;
      case 'date': valA = new Date(a.firstActivity); valB = new Date(b.firstActivity); break;
      case 'value': valA = a.shares * a.price; valB = b.shares * b.price; break;
      case 'allocation': valA = a.allocation; valB = b.allocation; break;
      case 'change': valA = a.change; valB = b.change; break;
      case 'performance': valA = a.performance; valB = b.performance; break;
      default: valA = a.allocation; valB = b.allocation;
    }
    if (typeof valA === 'string') {
      return currentSort.direction === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return currentSort.direction === 'asc' ? valA - valB : valB - valA;
  };

  portfolioData.holdings.sort(sortFn);
  renderHoldingsTable();
  updateSortHeaders();
}

function updateSortHeaders() {
  document.querySelectorAll('.holdings-table th.sortable').forEach(th => {
    th.classList.remove('active');
    const arrow = currentSort.direction === 'asc' ? ' ↑' : ' ↓';
    th.textContent = th.textContent.replace(/ [↑↓]$/, '');
    if (th.dataset.sort === currentSort.field) {
      th.classList.add('active');
      th.textContent += arrow;
    }
  });
}

// Filter holdings by status
let showActive = true;

function filterHoldings(active) {
  showActive = active;
  document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  const tbody = document.getElementById('holdingsTableBody');
  if (active) {
    renderHoldingsTable();
  } else {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: #999;">
          No closed positions
        </td>
      </tr>
    `;
  }
}

// Toggle chart type
let showValueChart = true;

function toggleChartType(btn, type) {
  document.querySelectorAll('.chart-toggles .toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  showValueChart = type === 'value';

  const ctx = document.getElementById('portfolioChart');
  const chart = Chart.getChart(ctx);
  if (chart) {
    if (showValueChart) {
      chart.data.datasets[0].data = portfolioData.chartData.values;
      chart.options.scales.y.ticks.callback = value => formatCurrency(value);
    } else {
      const returns = portfolioData.chartData.values.map((v, i) =>
        i === 0 ? 0 : ((v - portfolioData.chartData.values[0]) / portfolioData.chartData.values[0]) * 100
      );
      chart.data.datasets[0].data = returns;
      chart.options.scales.y.ticks.callback = value => formatPercent(value, false);
    }
    chart.update();
  }
}

// Period selector
function updatePeriod(period) {
  // Simulate data refresh
  const multipliers = { 'Today': 0.1, '1 Week': 0.5, '1 Month': 1, 'YTD': 2, '1 Year': 3 };
  const mult = multipliers[period] || 1;

  portfolioData.summary.dayChange = 3245.67 * mult * (Math.random() * 0.4 + 0.8);
  portfolioData.summary.dayChangePercent = 0.37 * mult * (Math.random() * 0.4 + 0.8);

  updateSummary();
  updateTimestamp();
}

// Pagination
let currentPage = 1;
const itemsPerPage = 10;

function updatePagination() {
  const total = portfolioData.holdings.length;
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, total);

  document.querySelector('.pagination span').textContent = `Showing ${start}-${end} of ${total}`;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderHoldingsTable();
    updatePagination();
  }
}

function nextPage() {
  const maxPage = Math.ceil(portfolioData.holdings.length / itemsPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    renderHoldingsTable();
    updatePagination();
  }
}

// Add to watchlist
function addToWatchlist() {
  const symbol = prompt('Enter stock symbol to add:');
  if (symbol && symbol.trim()) {
    const newStock = {
      symbol: symbol.toUpperCase().trim(),
      name: symbol.toUpperCase().trim() + ' Inc.',
      price: Math.random() * 500 + 50,
      change: (Math.random() - 0.5) * 10,
      changePercent: (Math.random() - 0.5) * 5
    };
    portfolioData.watchlist.push(newStock);
    renderWatchlist();
  }
}

// Remove from watchlist
function removeFromWatchlist(symbol) {
  portfolioData.watchlist = portfolioData.watchlist.filter(w => w.symbol !== symbol);
  renderWatchlist();
}

// Add transaction
function addTransaction() {
  const type = prompt('Transaction type (buy/sell/dividend):');
  if (!type) return;

  const symbol = prompt('Stock symbol:');
  if (!symbol) return;

  const amount = prompt('Total amount ($):');
  if (!amount) return;

  const newTransaction = {
    type: type.toLowerCase(),
    symbol: symbol.toUpperCase(),
    name: symbol.toUpperCase() + ' Inc.',
    date: new Date().toISOString().split('T')[0],
    shares: type.toLowerCase() === 'dividend' ? null : Math.floor(Math.random() * 50) + 1,
    price: type.toLowerCase() === 'dividend' ? null : parseFloat(amount) / 10,
    total: parseFloat(amount)
  };

  portfolioData.transactions.unshift(newTransaction);
  renderTransactions();
}

// Manage activities modal
function showManageActivities() {
  alert('Activity Management\n\n- Import transactions from CSV\n- Export transaction history\n- Reconcile positions\n- View audit log\n\n(Demo mode - feature not fully implemented)');
}

// View toggle (list/grid)
let isListView = true;
const originalTableHTML = `
  <table class="holdings-table">
    <thead>
      <tr>
        <th class="sortable" data-sort="name">Name</th>
        <th class="sortable" data-sort="date">First Activity</th>
        <th class="sortable" data-sort="value">Value</th>
        <th class="sortable active" data-sort="allocation">Allocation ↓</th>
        <th class="sortable" data-sort="change">Change</th>
        <th class="sortable" data-sort="performance">Performance</th>
      </tr>
    </thead>
    <tbody id="holdingsTableBody"></tbody>
  </table>
`;

function toggleView(btn, view) {
  document.querySelectorAll('.view-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  isListView = view === 'list';

  const container = document.querySelector('.holdings-table-container');
  if (isListView) {
    container.innerHTML = originalTableHTML;
    renderHoldingsTable();
    // Re-attach sort listeners
    document.querySelectorAll('.holdings-table th.sortable').forEach(th => {
      th.addEventListener('click', () => sortHoldings(th.dataset.sort));
    });
  } else {
    // Grid view
    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 16px;">
        ${portfolioData.holdings.map(h => `
          <div onclick="showHoldingDetails('${h.symbol}')" style="background: #f5f5f5; border: 1px solid #ccc; padding: 16px; cursor: pointer;">
            <div style="font-weight: 600; margin-bottom: 4px;">${h.symbol}</div>
            <div style="font-size: 12px; color: #666; margin-bottom: 8px;">${h.name}</div>
            <div style="font-size: 18px; margin-bottom: 4px;">${formatCurrency(h.shares * h.price)}</div>
            <div class="${h.change >= 0 ? 'positive' : 'negative'}">${formatPercent(h.change)}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Initialize all event listeners
function initEventListeners() {
  // Sortable headers
  document.querySelectorAll('.holdings-table th.sortable').forEach(th => {
    th.addEventListener('click', () => sortHoldings(th.dataset.sort));
  });

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const isActive = tab.textContent.trim() === 'Active';
      filterHoldings(isActive);
    });
  });

  // Chart toggles
  document.querySelectorAll('.chart-toggles .toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.textContent.trim().toLowerCase();
      toggleChartType(btn, type);
    });
  });

  // Period selectors
  document.querySelectorAll('.period-select').forEach(select => {
    select.addEventListener('change', (e) => updatePeriod(e.target.value));
  });

  // Pagination
  document.querySelectorAll('.page-btn').forEach((btn, i) => {
    btn.addEventListener('click', i === 0 ? prevPage : nextPage);
  });

  // View toggle
  document.querySelectorAll('.view-toggle .toggle-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => toggleView(btn, i === 0 ? 'list' : 'grid'));
  });

  // Primary buttons
  document.querySelectorAll('.primary-btn').forEach(btn => {
    if (btn.textContent.includes('Add Transaction')) {
      btn.addEventListener('click', addTransaction);
    } else if (btn.textContent.includes('Add Symbol')) {
      btn.addEventListener('click', addToWatchlist);
    }
  });

  // Secondary buttons
  document.querySelectorAll('.secondary-btn').forEach(btn => {
    if (btn.textContent.includes('Manage Activities')) {
      btn.addEventListener('click', showManageActivities);
    }
  });

  // Top nav
  document.querySelectorAll('.main-nav .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.main-nav .nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Map nav items to views
      const text = item.textContent.trim();
      const viewMap = {
        'Overview': 'overview',
        'Portfolio': 'holdings',
        'Accounts': 'overview',
        'Research': 'markets',
        'Reports': 'performance'
      };

      const viewId = viewMap[text] || 'overview';
      const sidebarItem = document.querySelector(`.sidebar-item[data-view="${viewId}"]`);
      if (sidebarItem) sidebarItem.click();
    });
  });
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Show overview by default
  document.getElementById('view-overview').style.display = 'block';
  document.getElementById('view-holdings').style.display = 'none';

  // Update sidebar active state
  document.querySelector('.sidebar-item[data-view="overview"]').classList.add('active');
  document.querySelector('.sidebar-item[data-view="holdings"]').classList.remove('active');

  updateSummary();
  renderTopHoldings();
  renderIndices();
  renderHoldingsTable();
  renderTransactions();
  renderWatchlist();
  renderSectors();
  renderMovers();
  renderAllocationLegend();

  initPortfolioChart();
  initAllocationChart();
  initNavigation();
  initEventListeners();

  updateTimestamp();
  setInterval(updateTimestamp, 60000);

  // Set default dates for transaction filters
  const today = new Date();
  const monthAgo = new Date(today);
  monthAgo.setMonth(monthAgo.getMonth() - 1);

  const startDate = document.getElementById('startDate');
  const endDate = document.getElementById('endDate');
  if (startDate) startDate.value = monthAgo.toISOString().split('T')[0];
  if (endDate) endDate.value = today.toISOString().split('T')[0];
});

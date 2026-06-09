const CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CAD", symbol: "$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "$", name: "Australian Dollar" },
  { code: "CHF", symbol: "₣", name: "Swiss Franc" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
  { code: "ZAR", symbol: "R", name: "South African Rand" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "MXN", symbol: "MX$", name: "Mexican Peso" },
  { code: "SGD", symbol: "$", name: "Singapore Dollar" },
  { code: "HKD", symbol: "$", name: "Hong Kong Dollar" },
  { code: "SEK", symbol: "kr", name: "Swedish Krona" },
  { code: "NOK", symbol: "kr", name: "Norwegian Krone" },
  { code: "DKK", symbol: "kr", name: "Danish Krone" },
  { code: "NZD", symbol: "$", name: "New Zealand Dollar" },
  { code: "KRW", symbol: "₩", name: "South Korean Won" },
  { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
  { code: "MYR", symbol: "RM", name: "Malaysian Ringgit" },
  { code: "PHP", symbol: "₱", name: "Philippine Peso" },
  { code: "THB", symbol: "฿", name: "Thai Baht" },
  { code: "VND", symbol: "₫", name: "Vietnamese Dong" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
  { code: "EGP", symbol: "£", name: "Egyptian Pound" },
  { code: "KES", symbol: "KSh", name: "Kenyan Shilling" },
  { code: "GHS", symbol: "₵", name: "Ghanaian Cedi" },
  { code: "PKR", symbol: "₨", name: "Pakistani Rupee" },
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
  { code: "TRY", symbol: "₺", name: "Turkish Lira" },
  { code: "PLN", symbol: "zł", name: "Polish Złoty" },
  { code: "CZK", symbol: "Kč", name: "Czech Koruna" },
  { code: "HUF", symbol: "Ft", name: "Hungarian Forint" },
  { code: "RON", symbol: "lei", name: "Romanian Leu" },
  { code: "UAH", symbol: "₴", name: "Ukrainian Hryvnia" },
  { code: "CLP", symbol: "CL$", name: "Chilean Peso" },
  { code: "COP", symbol: "CO$", name: "Colombian Peso" },
  { code: "PEN", symbol: "S", name: "Peruvian Sol" },
  { code: "ARS", symbol: "AR$", name: "Argentine Peso" },
];

const CATEGORIES = {
  needs: {
    label: "Needs",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
    color: "#4A7C59",
  },
  wants: {
    label: "Wants",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    color: "#C4894B",
  },
  culture: {
    label: "Culture",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15V8a1 1 0 0 1 1-1h1"/><path d="M18 15V8a1 1 0 0 0-1-1h-1"/></svg>`,
    color: "#7B6FAB",
  },
  savings: {
    label: "Savings",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 4-3 7-7 9-4-2-7-5-7-9a7 7 0 0 1 7-7z"/><path d="M12 6v6"/><path d="M12 16h.01"/></svg>`,
    color: "#3E8B7A",
  },
};

const DEFAULT_SUBTAGS = {
  needs: ["Rent/Mortgage", "Groceries", "Utilities", "Transport", "Healthcare", "Insurance"],
  wants: ["Dining Out", "Shopping", "Entertainment", "Subscriptions", "Beauty", "Hobbies"],
  culture: ["Books", "Art", "Music", "Travel", "Courses", "Museums"],
  savings: ["Emergency Fund", "Retirement", "Investment", "Goal Deposit", "Debt Payment"],
};

const KAKEIBO_QUOTES = [
  '"What is your income this month?"',
  '"How much are you saving this month?"',
  '"How much have you spent so far?"',
  '"How could you improve your spending?"',
  '"The act of writing down expenses is itself a saving."',
  '"Wealth is not about having a lot of money; it is about having a lot of options."',
  '"Small mindful steps lead to great financial freedom."',
  '"Every yen spent with awareness is a yen well spent."',
  '"The Kakeibo method: simple tools, profound change."',
  '"Pause before purchase. Reflect before spending."',
];

const WEEKLY_PROMPTS = [
  "What were your three main spending categories this week?",
  "Was there an impulse purchase you regret? What triggered it?",
  "Did your spending align with your values this week?",
  "What is one small change you can make next week?",
];

const MONTHLY_PROMPTS = [
  "How much did you plan to save, and how much did you actually save?",
  "What were your biggest unexpected expenses this month?",
  "Which spending category surprised you most?",
  "What did you purchase that truly brought you joy or value?",
  "If you could revisit one spending decision this month, what would it be?",
  "What is one financial habit you want to build next month?",
  "How does your spending this month reflect your life priorities?",
];

const DAILY_PROMPTS = [
  "Did you spend mindfully today?",
  "Did you want something today that you chose not to buy?",
  "What was the most valuable thing you spent on today?",
  "How did today's expenses compare to your plan?",
  "Is there anything you can do without tomorrow?",
  "What would your future self thank you for today?",
  "Did any spending bring you genuine happiness today?",
];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let state = {
  baseCurrency: null,
  monthlyIncome: 0,
  savingsGoal: 0,
  currentDashMonth: null,
  currentLedgerMonth: null,
  currentWeekOffset: 0,
  exchangeRates: {},
  activeCategory: "needs",
  selectedGoalEmoji: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="7.76" cy="7.76" r="2"/><circle cx="16.24" cy="16.24" r="2"/><circle cx="7.76" cy="16.24" r="2"/><circle cx="16.24" cy="7.76" r="2"/></svg>`,
  onboardingCurrency: null,
};

let db;
let supabaseClient; // Declared here, initialized inside init()

// ══════════════════════════════════════════
// INDEXEDDB SETUP
// ══════════════════════════════════════════
function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("KakeiboDb", 2);
    req.onupgradeneeded = (e) => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains("expenses")) {
        const es = d.createObjectStore("expenses", { keyPath: "id" });
        es.createIndex("month", "month", { unique: false });
      }
      if (!d.objectStoreNames.contains("reflections")) {
        d.createObjectStore("reflections", { keyPath: "id" });
      }
      if (!d.objectStoreNames.contains("goals")) {
        d.createObjectStore("goals", { keyPath: "id" });
      }
      if (!d.objectStoreNames.contains("settings")) {
        d.createObjectStore("settings", { keyPath: "key" });
      }
    };
    req.onsuccess = (e) => {
      db = e.target.result;
      resolve();
    };
    req.onerror = reject;
  });
}

function dbGet(store, key) {
  return new Promise((resolve) => {
    const tx = db.transaction(store, "readonly");
    const req = tx.objectStore(store).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
}

function dbPut(store, value) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, "readwrite");
    const req = tx.objectStore(store).put(value);
    req.onsuccess = () => resolve(req.result);
    req.onerror = reject;
  });
}

function dbDelete(store, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, "readwrite");
    const req = tx.objectStore(store).delete(key);
    req.onsuccess = () => resolve();
    req.onerror = reject;
  });
}

function dbGetAll(store) {
  return new Promise((resolve) => {
    const tx = db.transaction(store, "readonly");
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

function dbGetByIndex(store, indexName, value) {
  return new Promise((resolve) => {
    const tx = db.transaction(store, "readonly");
    const req = tx.objectStore(store).index(indexName).getAll(value);
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

// ══════════════════════════════════════════
// SETTINGS (localStorage for speed)
// ══════════════════════════════════════════
function getSetting(key, fallback = null) {
  const v = localStorage.getItem("kakeibo_" + key);
  if (v === null) return fallback;
  try {
    return JSON.parse(v);
  } catch {
    return v;
  }
}

function setSetting(key, val) {
  localStorage.setItem("kakeibo_" + key, JSON.stringify(val));
}

// ══════════════════════════════════════════
// CURRENCY
// ══════════════════════════════════════════
function getCurrencySymbol(code) {
  const c = CURRENCIES.find((c) => c.code === code);
  return c ? c.symbol : code;
}

async function fetchExchangeRates(base) {
  try {
    const cached = getSetting("rates_cache");
    const cacheTime = getSetting("rates_time");
    if (cached && cacheTime && Date.now() - cacheTime < 3600000) {
      state.exchangeRates = cached;
      return;
    }
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    state.exchangeRates = data.rates;
    setSetting("rates_cache", data.rates);
    setSetting("rates_time", Date.now());
  } catch {
    const fallback = {
      USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, CAD: 1.36, AUD: 1.53,
      CHF: 0.88, CNY: 7.24, INR: 83.1, NGN: 1540, ZAR: 18.6, BRL: 4.97,
      MXN: 17.1, SGD: 1.34, HKD: 7.82, SEK: 10.4, NOK: 10.6, DKK: 6.9,
      NZD: 1.63, KRW: 1325, IDR: 15750, MYR: 4.67, PHP: 56.3, THB: 35.2,
      VND: 24340, AED: 3.67, SAR: 3.75, EGP: 30.9, KES: 152, GHS: 12.4,
      PKR: 278, BDT: 109, TRY: 30.4, PLN: 3.97, CZK: 22.8, HUF: 356,
      RON: 4.6, UAH: 38.2, CLP: 895, COP: 3920, PEN: 3.72, ARS: 350,
    };
    const baseRate = fallback[base] || 1;
    state.exchangeRates = {};
    for (const [k, v] of Object.entries(fallback)) {
      state.exchangeRates[k] = v / baseRate;
    }
  }
}

function convertToBase(amount, fromCurrency) {
  if (!fromCurrency || fromCurrency === state.baseCurrency) return amount;
  const rate = state.exchangeRates[fromCurrency];
  if (!rate) return amount;
  return amount / rate;
}

function formatMoney(amount, currencyCode) {
  const code = currencyCode || state.baseCurrency;
  const sym = getCurrencySymbol(code);
  const n = parseFloat(amount) || 0;
  const noDecimal = ["JPY", "KRW", "IDR", "VND", "HUF"];
  const decimals = noDecimal.includes(code) ? 0 : 2;
  return sym + n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function getCurrentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function formatMonthDisplay(monthStr) {
  const [y, m] = monthStr.split("-");
  const d = new Date(parseInt(y), parseInt(m) - 1, 1);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

// ══════════════════════════════════════════
// ONBOARDING
// ══════════════════════════════════════════
function renderCurrencyList(filter = "") {
  const list = document.getElementById("currencyList");
  const filtered = CURRENCIES.filter(
    (c) =>
      c.code.toLowerCase().includes(filter.toLowerCase()) ||
      c.name.toLowerCase().includes(filter.toLowerCase()),
  );
  list.innerHTML = filtered
    .map(
      (c) => `
    <div class="currency-item ${state.onboardingCurrency === c.code ? "selected" : ""}"
         onclick="selectOnboardingCurrency('${c.code}')">
      <span class="currency-code">${c.symbol} ${c.code}</span>
      <span class="currency-name">${c.name}</span>
    </div>
  `,
    )
    .join("");
}

function filterCurrencies(val) {
  renderCurrencyList(val);
}

function selectOnboardingCurrency(code) {
  state.onboardingCurrency = code;
  renderCurrencyList(document.getElementById("currencySearch").value);
  document.getElementById("currencyNextBtn").disabled = false;
  document.getElementById("incomeCurrencyPrefix").textContent = getCurrencySymbol(code);
  document.getElementById("savingsCurrencyPrefix").textContent = getCurrencySymbol(code);
}

function nextStep(n) {
  document.querySelectorAll(".onboarding-step").forEach((s) => s.classList.remove("active"));
  document.getElementById("step-" + n).classList.add("active");
  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i < n);
  });
}

async function completeOnboarding() {
  const income = parseFloat(document.getElementById("monthlyIncome").value) || 0;
  const savings = parseFloat(document.getElementById("savingsGoal").value) || 0;

  state.baseCurrency = state.onboardingCurrency || "USD";
  state.monthlyIncome = income;
  state.savingsGoal = savings;

  setSetting("baseCurrency", state.baseCurrency);
  setSetting("onboarded", true);

  const month = getCurrentMonth();
  setSetting("income_" + month, income);
  setSetting("savings_" + month, savings);

  await fetchExchangeRates(state.baseCurrency);
  launchApp();
}

function launchApp() {
  document.getElementById("onboarding").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  populateCurrencySelects();
  setTodayDate();
  renderAllSubtags();
  renderEmojiGrid();
  switchTab("home");
  renderDashboard();
}

function populateCurrencySelects() {
  const selects = ["trackCurrency", "settingsCurrency"];
  selects.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = CURRENCIES.map(
      (c) => `<option value="${c.code}" ${c.code === state.baseCurrency ? "selected" : ""}>${c.code} ${c.symbol}</option>`,
    ).join("");
  });

  const settingsIncome = document.getElementById("settingsIncome");
  const settingsSavings = document.getElementById("settingsSavings");
  if (settingsIncome) settingsIncome.value = state.monthlyIncome || "";
  if (settingsSavings) settingsSavings.value = state.savingsGoal || "";
}

function setTodayDate() {
  const d = document.getElementById("trackDate");
  if (d) d.value = new Date().toISOString().split("T")[0];
}

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════
function switchTab(tab) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));

  document.getElementById("screen-" + tab)?.classList.add("active");
  document.getElementById("nav-" + tab)?.classList.add("active");

  if (tab === "home") renderDashboard();
  if (tab === "ledger") renderLedger();
  if (tab === "reflect") renderReflect();
  if (tab === "goals") renderGoals();
}

// ══════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════
function changeMonth(dir) {
  const [y, m] = state.currentDashMonth.split("-").map(Number);
  const d = new Date(y, m - 1 + dir, 1);
  state.currentDashMonth = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  renderDashboard();
}

async function renderDashboard() {
  const month = state.currentDashMonth;
  document.getElementById("dashMonth").textContent = formatMonthDisplay(month);

  const qi = Math.floor(Date.now() / 86400000) % KAKEIBO_QUOTES.length;
  document.getElementById("kakeiboQuote").textContent = KAKEIBO_QUOTES[qi];

  const dp = DAILY_PROMPTS[new Date().getDay() % DAILY_PROMPTS.length];
  document.getElementById("dailyPrompt").textContent = dp;

  const income = getSetting("income_" + month) || state.monthlyIncome || 0;
  const savingsGoal = getSetting("savings_" + month) || state.savingsGoal || 0;

  const expenses = await dbGetByIndex("expenses", "month", month);
  const totalSpent = expenses.reduce((sum, e) => sum + (parseFloat(e.baseAmount) || 0), 0);
  const savedAmount = expenses
    .filter((e) => e.category === "savings")
    .reduce((sum, e) => sum + (parseFloat(e.baseAmount) || 0), 0);
  const remaining = income - totalSpent;

  document.getElementById("statIncome").textContent = formatMoney(income);
  document.getElementById("statSpent").textContent = formatMoney(totalSpent);
  document.getElementById("statSaved").textContent = formatMoney(savedAmount);
  document.getElementById("remainingAmount").textContent = formatMoney(Math.max(0, remaining));
  const spentRing = document.getElementById("spentRingAmount");
  if (spentRing) spentRing.textContent = formatMoney(totalSpent);

  drawBudgetRing(totalSpent, income);

  const catGrid = document.getElementById("categoriesGrid");
  catGrid.innerHTML = Object.entries(CATEGORIES)
    .map(([key, cat]) => {
      const catExpenses = expenses.filter((e) => e.category === key);
      const catTotal = catExpenses.reduce((s, e) => s + (parseFloat(e.baseAmount) || 0), 0);
      const pct = income > 0 ? Math.min(100, (catTotal / income) * 100) : 0;
      return `
      <div class="cat-card" data-cat="${key}" onclick="switchTab('ledger')">
        <div class="cat-card-header">
          <span class="cat-card-icon">${cat.icon}</span>
          <span class="cat-card-name">${cat.label}</span>
        </div>
        <div class="cat-card-amount">${formatMoney(catTotal)}</div>
        <div class="cat-card-sub">${catExpenses.length} entries</div>
        <div class="cat-progress">
          <div class="cat-progress-fill" style="width:${pct}%; background:${cat.color}"></div>
        </div>
      </div>`;
    })
    .join("");

  const recent = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  renderExpenseList("recentExpensesList", recent, true);
}

function drawBudgetRing(spent, income) {
  const canvas = document.getElementById("budgetRing");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const cx = 80, cy = 80, r = 68, lw = 10;

  ctx.clearRect(0, 0, 160, 160);

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--border").trim() || "#e0e0d8";
  ctx.lineWidth = lw;
  ctx.stroke();

  if (income <= 0) return;

  const pct = Math.min(1, spent / income);
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + pct * Math.PI * 2;

  ctx.beginPath();
  ctx.arc(cx, cy, r, startAngle, endAngle);
  ctx.strokeStyle = pct > 0.9 ? "#C4564B" : pct > 0.7 ? "#C4894B" : "#3E6B21";
  ctx.lineWidth = lw;
  ctx.lineCap = "round";
  ctx.stroke();
}

// ══════════════════════════════════════════
// TRACK / EXPENSE FORM
// ══════════════════════════════════════════
let selectedCategory = "needs";

function selectCategory(btn, cat) {
  document.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  selectedCategory = cat;
  renderAllSubtags();
}

function renderAllSubtags() {
  const select = document.getElementById("subTagSelect");
  if (!select) return;
  const cat = selectedCategory || "needs";
  const defaults = DEFAULT_SUBTAGS[cat] || [];
  const custom = getSetting("custom_tags_" + cat) || [];
  const all = [...defaults, ...custom];
  select.innerHTML =
    '<option value="">Choose a tag...</option>' +
    all.map((t) => `<option value="${t}">${t}</option>`).join("");
}

function updateTrackPreview() {
  const amount = parseFloat(document.getElementById("trackAmount").value) || 0;
  const currency = document.getElementById("trackCurrency").value;
  const preview = document.getElementById("conversionPreview");
  if (!preview) return;

  if (!amount || currency === state.baseCurrency) {
    preview.textContent = "";
    return;
  }
  const converted = convertToBase(amount, currency);
  preview.textContent = `≈ ${formatMoney(converted)} ${state.baseCurrency}`;
}

let noteSuggestionTimer;
async function showNoteSuggestions(val) {
  clearTimeout(noteSuggestionTimer);
  const container = document.getElementById("noteSuggestions");
  if (!val || val.length < 2) {
    container.innerHTML = "";
    return;
  }

  noteSuggestionTimer = setTimeout(async () => {
    const all = await dbGetAll("expenses");
    const notes = [
      ...new Set(
        all
          .map((e) => e.note)
          .filter((n) => n && n.toLowerCase().includes(val.toLowerCase())),
      ),
    ].slice(0, 5);
    container.innerHTML = notes
      .map(
        (n) =>
          `<span class="suggestion-chip" onclick="document.getElementById('trackNote').value='${n.replace(/'/g, "\\'")}'; document.getElementById('noteSuggestions').innerHTML=''">${n}</span>`,
      )
      .join("");
  }, 300);
}

function toggleRecurring(toggle) {
  toggle.classList.toggle("on");
  document.getElementById("recurringOpts").classList.toggle("hidden");
}

async function saveExpense() {
  const amount = parseFloat(document.getElementById("trackAmount").value);
  const currency = document.getElementById("trackCurrency").value;
  const note = document.getElementById("trackNote").value.trim();
  const date = document.getElementById("trackDate").value || new Date().toISOString().split("T")[0];
  const subTag = document.getElementById("subTagSelect").value;
  const isRecurring =
    document.getElementById("recurringOpts") &&
    !document.getElementById("recurringOpts").classList.contains("hidden");
  const recurringFreq = isRecurring ? document.getElementById("recurringFreq").value : null;

  if (!amount || amount <= 0) {
    showToast("Please enter an amount");
    return;
  }

  const baseAmount = convertToBase(amount, currency);
  const month = date.substring(0, 7);

  const expense = {
    id: Date.now().toString(),
    amount,
    currency,
    baseAmount,
    category: selectedCategory,
    subTag,
    note,
    date,
    month,
    recurring: isRecurring,
    recurringFreq,
    createdAt: new Date().toISOString(),
  };

  await dbPut("expenses", expense);
  showToast("Entry saved");

  document.getElementById("trackAmount").value = "";
  document.getElementById("trackNote").value = "";
  document.getElementById("noteSuggestions").innerHTML = "";
  document.getElementById("conversionPreview").textContent = "";
  setTodayDate();

  renderDashboard();
}

// ══════════════════════════════════════════
// LEDGER
// ══════════════════════════════════════════
function changeLedgerMonth(dir) {
  const [y, m] = state.currentLedgerMonth.split("-").map(Number);
  const d = new Date(y, m - 1 + dir, 1);
  state.currentLedgerMonth = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  renderLedger();
}

async function renderLedger() {
  const month = state.currentLedgerMonth;
  document.getElementById("ledgerMonth").textContent = formatMonthDisplay(month);

  const income = getSetting("income_" + month) || state.monthlyIncome || 0;
  const savingsGoal = getSetting("savings_" + month) || state.savingsGoal || 0;
  const available = income - savingsGoal;

  const filterVal = document.getElementById("ledgerFilter")?.value || "all";
  let expenses = await dbGetByIndex("expenses", "month", month);
  const totalSpent = expenses.reduce((s, e) => s + (parseFloat(e.baseAmount) || 0), 0);

  document.getElementById("ledgerIncome").textContent = formatMoney(income);
  document.getElementById("ledgerSavingsGoal").textContent = formatMoney(savingsGoal);
  document.getElementById("ledgerAvailable").textContent = formatMoney(available);
  document.getElementById("ledgerTotalSpent").textContent = formatMoney(totalSpent);

  const breakdown = document.getElementById("categoryBreakdown");
  breakdown.innerHTML = Object.entries(CATEGORIES)
    .map(([key, cat]) => {
      const catTotal = expenses
        .filter((e) => e.category === key)
        .reduce((s, e) => s + (parseFloat(e.baseAmount) || 0), 0);
      const pct = income > 0 ? Math.min(100, (catTotal / income) * 100) : 0;
      return `
      <div class="cat-breakdown-item">
        <div class="cat-breakdown-header">
          <div class="cat-breakdown-name">
            <span>${cat.icon}</span><span>${cat.label}</span>
          </div>
          <div class="cat-breakdown-amount" style="color:${cat.color}">${formatMoney(catTotal)}</div>
        </div>
        <div class="cat-breakdown-bar">
          <div class="cat-breakdown-fill" style="width:${pct}%; background:${cat.color}"></div>
        </div>
      </div>`;
    })
    .join("");

  const filtered = filterVal === "all" ? expenses : expenses.filter((e) => e.category === filterVal);
  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
  renderExpenseList("ledgerList", sorted, false);
}

function renderExpenseList(containerId, expenses, compact) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!expenses.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6"/><path d="M9 16h4"/></svg></div>
        <div>No entries yet</div>
        <div class="empty-sub">Tap + to log your first expense</div>
      </div>`;
    return;
  }
  container.innerHTML = expenses
    .map((e) => {
      const cat = CATEGORIES[e.category] || CATEGORIES.needs;
      const tag = e.subTag ? ` · ${e.subTag}` : "";
      const diff = e.currency !== state.baseCurrency ? ` (${getCurrencySymbol(e.currency)}${e.amount})` : "";
      return `
      <div class="expense-item">
        <div class="expense-cat-dot" style="background:${cat.color}"></div>
        <div class="expense-info">
          <div class="expense-note">${e.note || "(no note)"}</div>
          <div class="expense-meta">${cat.icon} ${cat.label}${tag} · ${e.date}</div>
        </div>
        <div class="expense-amount">${formatMoney(e.baseAmount)}${diff}</div>
        <button class="expense-delete" onclick="deleteExpense('${e.id}', event)" title="Delete">×</button>
      </div>`;
    })
    .join("");
}

async function deleteExpense(id, event) {
  event.stopPropagation();
  await dbDelete("expenses", id);
  showToast("Entry deleted");
  renderDashboard();
  renderLedger();
}

// ══════════════════════════════════════════
// REFLECT
// ══════════════════════════════════════════
function switchReflectTab(btn, tab) {
  document.querySelectorAll(".reflect-tab").forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("weeklyReflect").classList.toggle("hidden", tab !== "weekly");
  document.getElementById("monthlyReflect").classList.toggle("hidden", tab !== "monthly");
  if (tab === "weekly") renderWeeklyReflect();
  else renderMonthlyReflect();
}

function getWeekRange(offset) {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - dayOfWeek + 1 + offset * 7);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return { start: monday, end: sunday };
}

function changeWeek(dir) {
  state.currentWeekOffset += dir;
  renderWeeklyReflect();
}

async function renderWeeklyReflect() {
  const { start, end } = getWeekRange(state.currentWeekOffset);
  const label =
    state.currentWeekOffset === 0
      ? "This Week"
      : state.currentWeekOffset === -1
        ? "Last Week"
        : `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${end.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
  document.getElementById("weekLabel").textContent = label;

  const startStr = start.toISOString().split("T")[0];
  const endStr = end.toISOString().split("T")[0];

  const allExpenses = await dbGetAll("expenses");
  const weekExpenses = allExpenses.filter((e) => e.date >= startStr && e.date <= endStr);
  const weekTotal = weekExpenses.reduce((s, e) => s + (parseFloat(e.baseAmount) || 0), 0);

  document.getElementById("weekSummary").innerHTML = weekExpenses.length
    ? `This week: <strong>${weekExpenses.length} entries</strong>, total <strong>${formatMoney(weekTotal)}</strong>`
    : "No expenses recorded this week.";

  const reflId = "weekly_" + startStr;
  const saved = await dbGet("reflections", reflId);
  const answers = saved ? saved.answers : {};

  document.getElementById("weeklyPrompts").innerHTML = WEEKLY_PROMPTS.map(
    (q, i) => `
    <div class="prompt-item">
      <div class="prompt-question">${q}</div>
      <textarea class="prompt-answer" id="wp_${i}" placeholder="Write your reflection...">${answers[i] || ""}</textarea>
    </div>`,
  ).join("");
}

async function renderMonthlyReflect() {
  const month = state.currentDashMonth;
  const expenses = await dbGetByIndex("expenses", "month", month);
  const total = expenses.reduce((s, e) => s + (parseFloat(e.baseAmount) || 0), 0);
  const income = getSetting("income_" + month) || state.monthlyIncome || 0;
  const saved = income - total;

  document.getElementById("monthSummaryReflect").innerHTML = `
    <strong>${formatMonthDisplay(month)}</strong><br>
    Income: ${formatMoney(income)} · Spent: ${formatMoney(total)} · Saved: ${formatMoney(Math.max(0, saved))}
  `;

  const reflId = "monthly_" + month;
  const savedRefl = await dbGet("reflections", reflId);
  const answers = savedRefl ? savedRefl.answers : {};

  document.getElementById("monthlyPrompts").innerHTML = MONTHLY_PROMPTS.map(
    (q, i) => `
    <div class="prompt-item">
      <div class="prompt-question">${q}</div>
      <textarea class="prompt-answer" id="mp_${i}" placeholder="Write your reflection...">${answers[i] || ""}</textarea>
    </div>`,
  ).join("");
}

async function renderReflect() {
  renderWeeklyReflect();
}

async function saveWeeklyReflection() {
  const { start } = getWeekRange(state.currentWeekOffset);
  const startStr = start.toISOString().split("T")[0];
  const reflId = "weekly_" + startStr;
  const answers = {};
  WEEKLY_PROMPTS.forEach((_, i) => {
    const el = document.getElementById("wp_" + i);
    if (el) answers[i] = el.value;
  });
  await dbPut("reflections", { id: reflId, answers, savedAt: new Date().toISOString() });
  showToast("Weekly reflection saved");
}

async function saveMonthlyReflection() {
  const month = state.currentDashMonth;
  const reflId = "monthly_" + month;
  const answers = {};
  MONTHLY_PROMPTS.forEach((_, i) => {
    const el = document.getElementById("mp_" + i);
    if (el) answers[i] = el.value;
  });
  await dbPut("reflections", { id: reflId, answers, savedAt: new Date().toISOString() });
  showToast("Monthly reflection saved");
}

async function generateAIInsight() {
  const btn = document.getElementById("aiInsightBtn");
  const btnText = document.getElementById("aiInsightBtnText");
  const resultDiv = document.getElementById("aiResult");
  const resultText = document.getElementById("aiResultText");

  btnText.innerHTML = '<span class="spinner"></span> Generating...';
  btn.disabled = true;

  try {
    const month = state.currentDashMonth;
    const expenses = await dbGetByIndex("expenses", "month", month);
    const income = getSetting("income_" + month) || state.monthlyIncome || 0;
    const total = expenses.reduce((s, e) => s + (parseFloat(e.baseAmount) || 0), 0);
    const saved = Math.max(0, income - total);

    const reflId = "monthly_" + month;
    const savedRefl = await dbGet("reflections", reflId);
    const answers = savedRefl ? savedRefl.answers : {};
    const reflectionText = MONTHLY_PROMPTS.map((q, i) =>
      answers[i] ? `Q: ${q}\nA: ${answers[i]}` : "",
    ).filter(Boolean).join("\n\n");

    const catBreakdown = Object.entries(CATEGORIES)
      .map(([key, cat]) => {
        const catTotal = expenses
          .filter((e) => e.category === key)
          .reduce((s, e) => s + (parseFloat(e.baseAmount) || 0), 0);
        return `${cat.label}: ${formatMoney(catTotal)}`;
      })
      .join(", ");

    const prompt = `You are a mindful financial advisor using the Kakeibo method. Analyze this user's month and provide a warm, insightful, encouraging reflection in 3-4 short paragraphs.

Month: ${formatMonthDisplay(month)}
Income: ${formatMoney(income)}
Total Spent: ${formatMoney(total)}
Saved: ${formatMoney(saved)}
Category Breakdown: ${catBreakdown}
Number of entries: ${expenses.length}

${reflectionText ? `User's own reflections:\n${reflectionText}` : ""}

Provide a mindful, Japanese-philosophy-inspired insight that:
1. Acknowledges their spending patterns with compassion
2. Highlights one positive habit or win
3. Gently suggests one area of mindful improvement
4. Ends with an encouraging Kakeibo-style wisdom note

Keep it personal, warm, and under 200 words. Do not use bullet points.`;

    const res = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 400, temperature: 0.75 },
      }),
    });

    const data = await res.json();

    if (data.error) {
      showToast(data.error);
      btnText.textContent = "Generate Insight";
      btn.disabled = false;
      return;
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Unable to generate insight at this time.";
    resultText.textContent = text;
    resultDiv.classList.remove("hidden");
    showToast("AI insight ready");
  } catch (err) {
    showToast("Could not reach server. Is it running on port 3000?");
  }

  btnText.textContent = "Generate Insight";
  btn.disabled = false;
}

// ══════════════════════════════════════════
// GOALS
// ══════════════════════════════════════════
function renderEmojiGrid() {
  const grid = document.getElementById("goalEmojiGrid");
  if (!grid) return;
  const icons = [
    { key: "flower",  svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="7.76" cy="7.76" r="2"/><circle cx="16.24" cy="16.24" r="2"/><circle cx="7.76" cy="16.24" r="2"/><circle cx="16.24" cy="7.76" r="2"/></svg>` },
    { key: "home",    svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>` },
    { key: "plane",   svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>` },
    { key: "grad",    svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/></svg>` },
    { key: "car",     svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h10l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17" r="2.5"/><circle cx="16.5" cy="17" r="2.5"/></svg>` },
    { key: "laptop",  svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 20h20"/></svg>` },
    { key: "baby",    svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.582-7 8-7s8 3 8 7"/></svg>` },
    { key: "beach",   svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="9" x2="12" y2="2"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="23" y2="18"/><line x1="19.78" y1="10.22" x2="18.36" y2="11.64"/><line x1="23" y1="6" x2="21" y2="6"/><line x1="3" y1="6" x2="1" y2="6"/></svg>` },
    { key: "gift",    svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>` },
    { key: "ring",    svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="15" r="7"/><path d="M8.5 4.5l1 3h5l1-3"/><path d="M9.5 4.5c0-1.1.9-2 2.5-2s2.5.9 2.5 2"/></svg>` },
    { key: "globe",   svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` },
    { key: "fitness", svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6.5 6.5h1M16.5 6.5h1M6.5 17.5h1M16.5 17.5h1"/><rect x="7.5" y="5" width="9" height="14" rx="2"/><line x1="2" y1="8.5" x2="7.5" y2="8.5"/><line x1="2" y1="15.5" x2="7.5" y2="15.5"/><line x1="16.5" y1="8.5" x2="22" y2="8.5"/><line x1="16.5" y1="15.5" x2="22" y2="15.5"/></svg>` },
  ];
  grid.innerHTML = icons
    .map(
      ({ key, svg }) =>
        `<button type="button" class="emoji-btn ${svg === state.selectedGoalEmoji ? "active" : ""}" onclick="selectIcon(\`${svg.replace(/`/g, "\`")}\`)">${svg}</button>`,
    )
    .join("");
}

function selectIcon(svg) {
  state.selectedGoalEmoji = svg;
  document.getElementById("goalEmoji").value = svg;
  renderEmojiGrid();
}

function openGoalModal() {
  document.getElementById("goalCurrencyLabel").textContent = state.baseCurrency;
  document.getElementById("goalName").value = "";
  document.getElementById("goalTarget").value = "";
  document.getElementById("goalDeadline").value = "";
  document.getElementById("goalEmoji").value = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="7.76" cy="7.76" r="2"/><circle cx="16.24" cy="16.24" r="2"/><circle cx="7.76" cy="16.24" r="2"/><circle cx="16.24" cy="7.76" r="2"/></svg>`;
  state.selectedGoalEmoji = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="7.76" cy="7.76" r="2"/><circle cx="16.24" cy="16.24" r="2"/><circle cx="7.76" cy="16.24" r="2"/><circle cx="16.24" cy="7.76" r="2"/></svg>`;
  renderEmojiGrid();
  showModal("goalModal");
}

async function saveGoal() {
  const name = document.getElementById("goalName").value.trim();
  const target = parseFloat(document.getElementById("goalTarget").value);
  const deadline = document.getElementById("goalDeadline").value;
  const emoji =
    document.getElementById("goalEmoji").value ||
    state.selectedGoalEmoji ||
    `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="7.76" cy="7.76" r="2"/><circle cx="16.24" cy="16.24" r="2"/><circle cx="7.76" cy="16.24" r="2"/><circle cx="16.24" cy="7.76" r="2"/></svg>`;

  if (!name) { showToast("Please enter a goal name"); return; }
  if (!target || target <= 0) { showToast("Please enter a target amount"); return; }

  const goal = {
    id: Date.now().toString(),
    name, target, deadline, emoji,
    current: 0,
    currency: state.baseCurrency,
    createdAt: new Date().toISOString(),
  };

  await dbPut("goals", goal);
  closeAllModals();
  renderGoals();
  showToast("Goal created!");
}

async function renderGoals() {
  const goals = await dbGetAll("goals");
  const list = document.getElementById("goalsList");
  if (!goals.length) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
        <div>No goals yet</div>
        <div class="empty-sub">Set your first savings goal above</div>
      </div>`;
    return;
  }

  list.innerHTML = goals
    .map((g) => {
      const pct = Math.min(100, (g.current / g.target) * 100);
      const completed = pct >= 100;
      const deadlineStr = g.deadline
        ? ` · Due ${new Date(g.deadline).toLocaleDateString("en-US", { month: "short", year: "numeric" })}`
        : "";
      return `
      <div class="goal-card ${completed ? "completed" : ""}">
        <div class="goal-card-header">
          <div class="goal-title-wrap">
            <span class="goal-emoji">${g.emoji}</span>
            <div>
              <div class="goal-name">${g.name}</div>
              <div class="goal-deadline">${state.baseCurrency}${deadlineStr}</div>
            </div>
          </div>
          <button class="goal-delete" onclick="deleteGoal('${g.id}')">×</button>
        </div>
        <div class="goal-progress-wrap">
          <div class="goal-progress-bar">
            <div class="goal-progress-fill" style="width:${pct}%"></div>
          </div>
          <div class="goal-progress-text">
            <span>${formatMoney(g.current)} of ${formatMoney(g.target)}</span>
            <span class="goal-progress-pct">${Math.round(pct)}%</span>
          </div>
        </div>
        ${
          !completed
            ? `<div class="goal-card-footer">
                <button class="goal-log-btn" onclick="openGoalLog('${g.id}')">+ Add Progress</button>
               </div>`
            : `<div style="text-align:center;font-size:13px;color:var(--positive);margin-top:8px;display:flex;align-items:center;justify-content:center;gap:6px;"><svg viewBox='0 0 24 24' width='14' height='14' fill='none' stroke='currentColor' stroke-width='2'><polyline points='20 6 9 17 4 12'/></svg> Goal achieved!</div>`
        }
      </div>`;
    })
    .join("");
}

function openGoalLog(goalId) {
  document.getElementById("goalLogAmount").value = "";
  document.getElementById("goalLogId").value = goalId;
  showModal("goalLogModal");
}

async function logGoalProgress() {
  const id = document.getElementById("goalLogId").value;
  const amount = parseFloat(document.getElementById("goalLogAmount").value);
  if (!amount || amount <= 0) { showToast("Enter a valid amount"); return; }

  const goal = await dbGet("goals", id);
  if (!goal) return;
  goal.current = (goal.current || 0) + amount;
  await dbPut("goals", goal);

  closeAllModals();
  renderGoals();

  if (goal.current >= goal.target) {
    celebrate(goal.emoji, `${goal.name} Complete!`);
  } else {
    showToast(`Progress logged: ${formatMoney(amount)}`);
  }
}

async function deleteGoal(id) {
  await dbDelete("goals", id);
  renderGoals();
  showToast("Goal removed");
}

// ══════════════════════════════════════════
// CSV IMPORT / EXPORT
// ══════════════════════════════════════════
async function exportCSV() {
  const all = await dbGetAll("expenses");
  if (!all.length) { showToast("No data to export"); return; }
  const header = "date,amount,currency,baseAmount,baseCurrency,category,subTag,note,recurring";
  const rows = all.map((e) =>
    [e.date, e.amount, e.currency, e.baseAmount, state.baseCurrency, e.category, e.subTag || "", (e.note || "").replace(/,/g, ""), e.recurring || false].join(","),
  );
  const csv = [header, ...rows].join("\n");
  downloadFile(csv, "kakeibo_export.csv", "text/csv");
  showToast("CSV exported");
}

function importCSV(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    const lines = e.target.result.split("\n").filter((l) => l.trim());
    let count = 0;
    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(",");
      if (cols.length < 4) continue;
      const [date, amount, currency, baseAmount, , category, subTag, note] = cols;
      const month = (date || "").substring(0, 7);
      if (!month) continue;
      await dbPut("expenses", {
        id: Date.now().toString() + i,
        date: date.trim(),
        amount: parseFloat(amount),
        currency: currency.trim(),
        baseAmount: parseFloat(baseAmount),
        category: (category || "needs").trim(),
        subTag: (subTag || "").trim(),
        note: (note || "").trim(),
        month,
        createdAt: new Date().toISOString(),
      });
      count++;
    }
    showToast(`Imported ${count} entries`);
    renderDashboard();
    event.target.value = "";
  };
  reader.readAsText(file);
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ══════════════════════════════════════════
// CUSTOM TAGS
// ══════════════════════════════════════════
function openCustomTag() { showModal("customTagModal"); }

function saveCustomTag() {
  const val = document.getElementById("customTagInput").value.trim();
  if (!val) { showToast("Enter a tag name"); return; }
  const key = "custom_tags_" + selectedCategory;
  const existing = getSetting(key) || [];
  if (!existing.includes(val)) { setSetting(key, [...existing, val]); }
  renderAllSubtags();
  closeAllModals();
  showToast(`Tag "${val}" added`);
}

// ══════════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════════
function openSettings() {
  const sc = document.getElementById("settingsCurrency");
  if (sc) sc.value = state.baseCurrency;
  const si = document.getElementById("settingsIncome");
  const ss = document.getElementById("settingsSavings");
  const month = state.currentDashMonth;
  if (si) si.value = getSetting("income_" + month) || "";
  if (ss) ss.value = getSetting("savings_" + month) || "";
  showModal("settingsModal");
}

function updateBaseCurrency(code) {
  state.baseCurrency = code;
  setSetting("baseCurrency", code);
  fetchExchangeRates(code).then(() => renderDashboard());
}

function updateMonthlyIncome(val) {
  const v = parseFloat(val) || 0;
  state.monthlyIncome = v;
  setSetting("income_" + state.currentDashMonth, v);
  renderDashboard();
}

function updateSavingsGoal(val) {
  const v = parseFloat(val) || 0;
  state.savingsGoal = v;
  setSetting("savings_" + state.currentDashMonth, v);
  renderDashboard();
}

async function clearAllData() {
  if (!confirm("This will delete ALL your data. Are you sure?")) return;
  localStorage.clear();
  const stores = ["expenses", "reflections", "goals", "settings"];
  for (const store of stores) {
    const tx = db.transaction(store, "readwrite");
    tx.objectStore(store).clear();
  }
  setTimeout(() => location.reload(), 500);
}

// ══════════════════════════════════════════
// THEME
// ══════════════════════════════════════════
function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  setSetting("theme", newTheme);
  const icons = {
    light: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" fill="#C0C0C0"/></svg>`,
    dark: `<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="8" fill="#FF8C00"/></svg>`,
  };
  document.getElementById("themeBtn").innerHTML = newTheme === "dark" ? icons.dark : icons.light;
  setTimeout(() => renderDashboard(), 50);
}

// ══════════════════════════════════════════
// MODAL HELPERS
// ══════════════════════════════════════════
function showModal(id) {
  document.getElementById("modalOverlay").classList.remove("hidden");
  document.querySelectorAll(".modal").forEach((m) => m.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");
}

function closeAllModals() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.querySelectorAll(".modal").forEach((m) => m.classList.remove("active"));
}

function closeModal(e) {
  if (e.target === document.getElementById("modalOverlay")) closeAllModals();
}

// ══════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 2800);
}

function celebrate(emoji, text) {
  const overlay = document.getElementById("celebrationOverlay");
  document.getElementById("celebrationEmoji").innerHTML = emoji || `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  document.getElementById("celebrationText").textContent = text || "Goal Achieved!";
  overlay.classList.remove("hidden");
  setTimeout(() => overlay.classList.add("hidden"), 3500);
}

document.getElementById("celebrationOverlay")?.addEventListener("click", () => {
  document.getElementById("celebrationOverlay").classList.add("hidden");
});

// ══════════════════════════════════════════
// INIT — Supabase is initialized first, everything else waits
// ══════════════════════════════════════════
async function init() {
  // 1. Initialize Supabase client BEFORE anything else touches it
  const configRes = await fetch("/.netlify/functions/get-config");
  const config = await configRes.json();
  supabaseClient = supabase.createClient(config.supabaseUrl, config.supabaseKey);

  // 2. Initialize local IndexedDB
  await initDB();

  // 3. Restore theme
  const savedTheme = getSetting("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeBtn = document.getElementById("themeBtn");
  const icons = {
    light: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" fill="#C0C0C0"/></svg>`,
    dark: `<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="8" fill="#FF8C00"/></svg>`,
  };
  if (themeBtn) themeBtn.innerHTML = savedTheme === "dark" ? icons.dark : icons.light;

  // 4. Set current time context
  state.currentDashMonth = getCurrentMonth();
  state.currentLedgerMonth = getCurrentMonth();

  // 5. Listen for auth state changes — supabaseClient is guaranteed ready here
  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    const onboarding = document.getElementById("onboarding");

    if (session) {
      state.user = session.user;

      const { data } = await supabaseClient
        .from("profiles")
        .select("username, full_name")
        .eq("id", session.user.id)
        .single();

      if (data) state.profile = data;

      const baseCurrency = getSetting("baseCurrency") || "USD";
      state.baseCurrency = baseCurrency;
      state.monthlyIncome = getSetting("income_" + state.currentDashMonth) || 0;
      state.savingsGoal = getSetting("savings_" + state.currentDashMonth) || 0;

      await fetchExchangeRates(baseCurrency);

      const onboarded = getSetting("onboarded");
      if (!onboarded) {
        if (onboarding) onboarding.classList.remove("hidden");
        renderCurrencyList();
      } else {
        if (onboarding) onboarding.classList.add("hidden");
        launchApp();
      }
    } else {
      state.user = null;
      state.profile = null;

      const onboarded = getSetting("onboarded");
      if (!onboarded) {
        if (onboarding) onboarding.classList.remove("hidden");
        renderCurrencyList();
      }
    }
  });
}

init();

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllModals();
});

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function fetchWithRetry(url, options, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url, options);
    if (res.status === 429) {
      const waitTime = Math.pow(2, i) * 1000;
      console.log(`Rate limited. Retrying in ${waitTime}ms...`);
      await sleep(waitTime);
      continue;
    }
    return res;
  }
}

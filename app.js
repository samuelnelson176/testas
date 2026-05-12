// ══════════════════════════════════════════
// CONSTANTS
// ══════════════════════════════════════════
const CURRENCIES = [
  { code: "USD", symbol: "$",    name: "US Dollar" },
  { code: "EUR", symbol: "€",    name: "Euro" },
  { code: "GBP", symbol: "£",    name: "British Pound" },
  { code: "JPY", symbol: "¥",    name: "Japanese Yen" },
  { code: "CAD", symbol: "$",    name: "Canadian Dollar" },
  { code: "AUD", symbol: "$",    name: "Australian Dollar" },
  { code: "CHF", symbol: "₣",    name: "Swiss Franc" },
  { code: "CNY", symbol: "¥",    name: "Chinese Yuan" },
  { code: "INR", symbol: "₹",    name: "Indian Rupee" },
  { code: "NGN", symbol: "₦",    name: "Nigerian Naira" },
  { code: "ZAR", symbol: "R",    name: "South African Rand" },
  { code: "BRL", symbol: "R$",   name: "Brazilian Real" },
  { code: "MXN", symbol: "MX$",  name: "Mexican Peso" },
  { code: "SGD", symbol: "$",    name: "Singapore Dollar" },
  { code: "HKD", symbol: "$",    name: "Hong Kong Dollar" },
  { code: "SEK", symbol: "kr",   name: "Swedish Krona" },
  { code: "NOK", symbol: "kr",   name: "Norwegian Krone" },
  { code: "DKK", symbol: "kr",   name: "Danish Krone" },
  { code: "NZD", symbol: "$",    name: "New Zealand Dollar" },
  { code: "KRW", symbol: "₩",    name: "South Korean Won" },
  { code: "IDR", symbol: "Rp",   name: "Indonesian Rupiah" },
  { code: "MYR", symbol: "RM",   name: "Malaysian Ringgit" },
  { code: "PHP", symbol: "₱",    name: "Philippine Peso" },
  { code: "THB", symbol: "฿",    name: "Thai Baht" },
  { code: "VND", symbol: "₫",    name: "Vietnamese Dong" },
  { code: "AED", symbol: "د.إ",  name: "UAE Dirham" },
  { code: "SAR", symbol: "﷼",    name: "Saudi Riyal" },
  { code: "EGP", symbol: "£",    name: "Egyptian Pound" },
  { code: "KES", symbol: "KSh",  name: "Kenyan Shilling" },
  { code: "GHS", symbol: "₵",    name: "Ghanaian Cedi" },
  { code: "PKR", symbol: "₨",    name: "Pakistani Rupee" },
  { code: "BDT", symbol: "৳",    name: "Bangladeshi Taka" },
  { code: "TRY", symbol: "₺",    name: "Turkish Lira" },
  { code: "PLN", symbol: "zł",   name: "Polish Złoty" },
  { code: "CZK", symbol: "Kč",   name: "Czech Koruna" },
  { code: "HUF", symbol: "Ft",   name: "Hungarian Forint" },
  { code: "RON", symbol: "lei",  name: "Romanian Leu" },
  { code: "UAH", symbol: "₴",    name: "Ukrainian Hryvnia" },
  { code: "CLP", symbol: "CL$",  name: "Chilean Peso" },
  { code: "COP", symbol: "CO$",  name: "Colombian Peso" },
  { code: "PEN", symbol: "S",    name: "Peruvian Sol" },
  { code: "ARS", symbol: "AR$",  name: "Argentine Peso" },
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
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 4-3 7-7 9-4-2-7-5-7-9a7 7 0 0 1 7-7z"/></svg>`,
    color: "#3E8B7A",
  },
};

const DEFAULT_SUBTAGS = {
  needs:   ["Rent/Mortgage","Groceries","Utilities","Transport","Healthcare","Insurance"],
  wants:   ["Dining Out","Shopping","Entertainment","Subscriptions","Beauty","Hobbies"],
  culture: ["Books","Art","Music","Travel","Courses","Museums"],
  savings: ["Emergency Fund","Retirement","Investment","Goal Deposit","Debt Payment"],
};

const KAKEIBO_QUOTES = [
  '"What is your income this month?"',
  '"How much are you saving this month?"',
  '"How much have you spent so far?"',
  '"How could you improve your spending?"',
  '"The act of writing down expenses is itself a saving."',
  '"Wealth is not about having a lot of money; it is about having a lot of options."',
  '"Small mindful steps lead to great financial freedom."',
  '"Pause before purchase. Reflect before spending."',
  '"The Kakeibo method: simple tools, profound change."',
  '"Every expense noted with awareness is a step toward freedom."',
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
  user: null,
  baseCurrency: "USD",
  monthlyIncome: 0,
  savingsGoal: 0,
  currentDashMonth: null,
  currentLedgerMonth: null,
  currentWeekOffset: 0,
  exchangeRates: {},
  activeCategory: "needs",
  selectedGoalEmoji: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="7.76" cy="7.76" r="2"/><circle cx="16.24" cy="16.24" r="2"/><circle cx="7.76" cy="16.24" r="2"/><circle cx="16.24" cy="7.76" r="2"/></svg>`,
  onboardingCurrency: null,
  // Per-month income/savings cache to avoid redundant Supabase reads
  _budgetCache: {},
};

// ══════════════════════════════════════════
// SUPABASE DATA LAYER
// Replaces IndexedDB — all data synced to cloud
// ══════════════════════════════════════════

// ── Expenses ──
async function dbGetExpensesByMonth(month) {
  const { data, error } = await supabaseClient
    .from("expenses")
    .select("*")
    .eq("user_id", state.user.id)
    .eq("month", month)
    .order("date", { ascending: false });
  if (error) { console.error("dbGetExpensesByMonth:", error.message); return []; }
  return data || [];
}

async function dbGetAllExpenses() {
  const { data, error } = await supabaseClient
    .from("expenses")
    .select("*")
    .eq("user_id", state.user.id)
    .order("date", { ascending: false });
  if (error) { console.error("dbGetAllExpenses:", error.message); return []; }
  return data || [];
}

async function dbSaveExpense(expense) {
  const row = {
    id:             expense.id,
    user_id:        state.user.id,
    amount:         expense.amount,
    currency:       expense.currency,
    base_amount:    expense.baseAmount,
    category:       expense.category,
    sub_tag:        expense.subTag || null,
    note:           expense.note || null,
    date:           expense.date,
    month:          expense.month,
    recurring:      expense.recurring || false,
    recurring_freq: expense.recurringFreq || null,
  };
  const { error } = await supabaseClient.from("expenses").upsert(row);
  if (error) throw new Error(error.message);
}

async function dbDeleteExpense(id) {
  const { error } = await supabaseClient
    .from("expenses")
    .delete()
    .eq("id", id)
    .eq("user_id", state.user.id);
  if (error) throw new Error(error.message);
}

// ── Monthly Budget ──
async function dbGetBudget(month) {
  if (state._budgetCache[month]) return state._budgetCache[month];
  const { data, error } = await supabaseClient
    .from("monthly_budgets")
    .select("income, savings_goal")
    .eq("user_id", state.user.id)
    .eq("month", month)
    .single();
  if (error && error.code !== "PGRST116") console.error("dbGetBudget:", error.message);
  const result = { income: data?.income || 0, savings_goal: data?.savings_goal || 0 };
  state._budgetCache[month] = result;
  return result;
}

async function dbSaveBudget(month, income, savingsGoal) {
  state._budgetCache[month] = { income, savings_goal: savingsGoal };
  const { error } = await supabaseClient.from("monthly_budgets").upsert({
    user_id:      state.user.id,
    month,
    income,
    savings_goal: savingsGoal,
    currency:     state.baseCurrency,
  }, { onConflict: "user_id,month" });
  if (error) console.error("dbSaveBudget:", error.message);
}

// ── User Settings ──
async function dbLoadSettings() {
  const { data, error } = await supabaseClient
    .from("user_settings")
    .select("*")
    .eq("user_id", state.user.id)
    .single();
  if (error && error.code !== "PGRST116") console.error("dbLoadSettings:", error.message);
  return data || null;
}

async function dbSaveSettings(patch) {
  const { error } = await supabaseClient.from("user_settings").upsert({
    user_id: state.user.id,
    ...patch,
  }, { onConflict: "user_id" });
  if (error) console.error("dbSaveSettings:", error.message);
}

// ── Goals ──
async function dbGetGoals() {
  const { data, error } = await supabaseClient
    .from("goals")
    .select("*")
    .eq("user_id", state.user.id)
    .order("created_at", { ascending: true });
  if (error) { console.error("dbGetGoals:", error.message); return []; }
  return data || [];
}

async function dbSaveGoal(goal) {
  const row = {
    id:       goal.id,
    user_id:  state.user.id,
    name:     goal.name,
    target:   goal.target,
    current:  goal.current || 0,
    currency: goal.currency || state.baseCurrency,
    deadline: goal.deadline || null,
    emoji:    goal.emoji || null,
  };
  const { error } = await supabaseClient.from("goals").upsert(row);
  if (error) throw new Error(error.message);
}

async function dbDeleteGoal(id) {
  const { error } = await supabaseClient
    .from("goals")
    .delete()
    .eq("id", id)
    .eq("user_id", state.user.id);
  if (error) throw new Error(error.message);
}

// ── Reflections ──
async function dbGetReflection(type, period) {
  const id = `${type}_${period}`;
  const { data, error } = await supabaseClient
    .from("reflections")
    .select("answers")
    .eq("id", id)
    .eq("user_id", state.user.id)
    .single();
  if (error && error.code !== "PGRST116") console.error("dbGetReflection:", error.message);
  return data ? { answers: data.answers } : null;
}

async function dbSaveReflection(type, period, answers) {
  const id = `${type}_${period}`;
  const { error } = await supabaseClient.from("reflections").upsert({
    id,
    user_id:  state.user.id,
    type,
    period,
    answers,
    saved_at: new Date().toISOString(),
  }, { onConflict: "id,user_id" });
  if (error) throw new Error(error.message);
}

// ══════════════════════════════════════════
// CURRENCY
// ══════════════════════════════════════════
function getCurrencySymbol(code) {
  const c = CURRENCIES.find(c => c.code === code);
  return c ? c.symbol : code;
}

async function fetchExchangeRates(base) {
  try {
    // Use localStorage for a 1-hour cache — rates don't need cloud sync
    const cached   = localStorage.getItem("kakeibo_rates_cache");
    const cacheTime = localStorage.getItem("kakeibo_rates_time");
    if (cached && cacheTime && Date.now() - parseInt(cacheTime) < 3600000) {
      const parsed = JSON.parse(cached);
      if (parsed.base === base) { state.exchangeRates = parsed.rates; return; }
    }
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    state.exchangeRates = data.rates;
    localStorage.setItem("kakeibo_rates_cache", JSON.stringify({ base, rates: data.rates }));
    localStorage.setItem("kakeibo_rates_time", Date.now().toString());
  } catch {
    const fallback = {
      USD:1,EUR:0.92,GBP:0.79,JPY:149.5,CAD:1.36,AUD:1.53,CHF:0.88,CNY:7.24,
      INR:83.1,NGN:1540,ZAR:18.6,BRL:4.97,MXN:17.1,SGD:1.34,HKD:7.82,SEK:10.4,
      NOK:10.6,DKK:6.9,NZD:1.63,KRW:1325,IDR:15750,MYR:4.67,PHP:56.3,THB:35.2,
      VND:24340,AED:3.67,SAR:3.75,EGP:30.9,KES:152,GHS:12.4,PKR:278,BDT:109,
      TRY:30.4,PLN:3.97,CZK:22.8,HUF:356,RON:4.6,UAH:38.2,CLP:895,COP:3920,
      PEN:3.72,ARS:350,
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
  const sym  = getCurrencySymbol(code);
  const n    = parseFloat(amount) || 0;
  const noDecimal = ["JPY","KRW","IDR","VND","HUF"];
  const decimals  = noDecimal.includes(code) ? 0 : 2;
  return sym + n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function getCurrentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function formatMonthDisplay(monthStr) {
  const [y, m] = monthStr.split("-");
  return new Date(parseInt(y), parseInt(m) - 1, 1)
    .toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

// ══════════════════════════════════════════
// ONBOARDING
// ══════════════════════════════════════════
function renderCurrencyList(filter = "") {
  const list     = document.getElementById("currencyList");
  const filtered = CURRENCIES.filter(c =>
    c.code.toLowerCase().includes(filter.toLowerCase()) ||
    c.name.toLowerCase().includes(filter.toLowerCase())
  );
  list.innerHTML = filtered.map(c => `
    <div class="currency-item ${state.onboardingCurrency === c.code ? "selected" : ""}"
         onclick="selectOnboardingCurrency('${c.code}')">
      <span class="currency-code">${c.symbol} ${c.code}</span>
      <span class="currency-name">${c.name}</span>
    </div>
  `).join("");
}

function filterCurrencies(val) { renderCurrencyList(val); }

function selectOnboardingCurrency(code) {
  state.onboardingCurrency = code;
  renderCurrencyList(document.getElementById("currencySearch").value);
  document.getElementById("currencyNextBtn").disabled = false;
  document.getElementById("incomeCurrencyPrefix").textContent  = getCurrencySymbol(code);
  document.getElementById("savingsCurrencyPrefix").textContent = getCurrencySymbol(code);
}

function nextStep(n) {
  document.querySelectorAll(".onboarding-step").forEach(s => s.classList.remove("active"));
  document.getElementById("step-" + n).classList.add("active");
  document.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i < n));
}

async function completeOnboarding() {
  const income  = parseFloat(document.getElementById("monthlyIncome").value) || 0;
  const savings = parseFloat(document.getElementById("savingsGoal").value)   || 0;

  state.baseCurrency  = state.onboardingCurrency || "USD";
  state.monthlyIncome = income;
  state.savingsGoal   = savings;

  // Save settings to Supabase
  await dbSaveSettings({ base_currency: state.baseCurrency, onboarded: true, theme: "light" });

  const month = getCurrentMonth();
  await dbSaveBudget(month, income, savings);

  await fetchExchangeRates(state.baseCurrency);
  launchApp();
}

// ══════════════════════════════════════════
// APP LAUNCH
// ══════════════════════════════════════════
function launchApp() {
  const onboarding = document.getElementById("onboarding");
  const app        = document.getElementById("app");
  if (onboarding) onboarding.classList.add("hidden");
  if (app)        app.classList.remove("hidden");

  populateCurrencySelects();
  setTodayDate();
  renderAllSubtags();
  renderEmojiGrid();
  switchTab("home");
  renderDashboard();
}

function populateCurrencySelects() {
  ["trackCurrency", "settingsCurrency"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = CURRENCIES.map(c =>
      `<option value="${c.code}" ${c.code === state.baseCurrency ? "selected" : ""}>${c.code} ${c.symbol}</option>`
    ).join("");
  });
  const si = document.getElementById("settingsIncome");
  const ss = document.getElementById("settingsSavings");
  if (si) si.value = state.monthlyIncome || "";
  if (ss) ss.value = state.savingsGoal   || "";
}

function setTodayDate() {
  const d = document.getElementById("trackDate");
  if (d) d.value = new Date().toISOString().split("T")[0];
}

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════
function switchTab(tab) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.querySelectorAll(".sidebar-item").forEach(b => b.classList.remove("active"));

  document.getElementById("screen-" + tab)?.classList.add("active");
  document.getElementById("nav-"    + tab)?.classList.add("active");
  document.getElementById("snav-"   + tab)?.classList.add("active");

  if (tab === "home")    renderDashboard();
  if (tab === "ledger")  renderLedger();
  if (tab === "reflect") renderReflect();
  if (tab === "goals")   renderGoals();
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

  const [budget, expenses] = await Promise.all([
    dbGetBudget(month),
    dbGetExpensesByMonth(month),
  ]);

  const income      = parseFloat(budget.income)      || state.monthlyIncome || 0;
  const savingsGoal = parseFloat(budget.savings_goal) || state.savingsGoal  || 0;

  const totalSpent  = expenses.reduce((s, e) => s + (parseFloat(e.base_amount) || 0), 0);
  const savedAmount = expenses
    .filter(e => e.category === "savings")
    .reduce((s, e) => s + (parseFloat(e.base_amount) || 0), 0);
  const remaining = income - totalSpent;

  document.getElementById("statIncome").textContent        = formatMoney(income);
  document.getElementById("statSpent").textContent         = formatMoney(totalSpent);
  document.getElementById("statSaved").textContent         = formatMoney(savedAmount);
  document.getElementById("remainingAmount").textContent   = formatMoney(Math.max(0, remaining));
  const spentRing = document.getElementById("spentRingAmount");
  if (spentRing) spentRing.textContent = formatMoney(totalSpent);

  drawBudgetRing(totalSpent, income);

  document.getElementById("categoriesGrid").innerHTML = Object.entries(CATEGORIES).map(([key, cat]) => {
    const catTotal = expenses
      .filter(e => e.category === key)
      .reduce((s, e) => s + (parseFloat(e.base_amount) || 0), 0);
    const pct = income > 0 ? Math.min(100, (catTotal / income) * 100) : 0;
    return `
      <div class="cat-card" data-cat="${key}" onclick="switchTab('ledger')">
        <div class="cat-card-header">
          <span class="cat-card-icon">${cat.icon}</span>
          <span class="cat-card-name">${cat.label}</span>
        </div>
        <div class="cat-card-amount">${formatMoney(catTotal)}</div>
        <div class="cat-card-sub">${expenses.filter(e => e.category === key).length} entries</div>
        <div class="cat-progress">
          <div class="cat-progress-fill" style="width:${pct}%; background:${cat.color}"></div>
        </div>
      </div>`;
  }).join("");

  const recent = [...expenses].slice(0, 5);
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
  ctx.beginPath();
  ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + pct * Math.PI * 2);
  ctx.strokeStyle = pct > 0.9 ? "#C4564B" : pct > 0.7 ? "#C4894B" : "#3E6B21";
  ctx.lineWidth = lw;
  ctx.lineCap   = "round";
  ctx.stroke();
}

// ══════════════════════════════════════════
// TRACK / EXPENSE FORM
// ══════════════════════════════════════════
let selectedCategory = "needs";

function selectCategory(btn, cat) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedCategory = cat;
  renderAllSubtags();
}

function renderAllSubtags() {
  const select = document.getElementById("subTagSelect");
  if (!select) return;
  const cat      = selectedCategory || "needs";
  const defaults = DEFAULT_SUBTAGS[cat] || [];
  const custom   = JSON.parse(localStorage.getItem("kakeibo_custom_tags_" + cat) || "[]");
  const all      = [...defaults, ...custom];
  select.innerHTML = '<option value="">Choose a tag...</option>' +
    all.map(t => `<option value="${t}">${t}</option>`).join("");
}

function updateTrackPreview() {
  const amount   = parseFloat(document.getElementById("trackAmount").value) || 0;
  const currency = document.getElementById("trackCurrency").value;
  const preview  = document.getElementById("conversionPreview");
  if (!preview) return;
  if (!amount || currency === state.baseCurrency) { preview.textContent = ""; return; }
  preview.textContent = `≈ ${formatMoney(convertToBase(amount, currency))} ${state.baseCurrency}`;
}

let noteSuggestionTimer;
async function showNoteSuggestions(val) {
  clearTimeout(noteSuggestionTimer);
  const container = document.getElementById("noteSuggestions");
  if (!val || val.length < 2) { container.innerHTML = ""; return; }

  noteSuggestionTimer = setTimeout(async () => {
    const all   = await dbGetAllExpenses();
    const notes = [...new Set(
      all.map(e => e.note).filter(n => n && n.toLowerCase().includes(val.toLowerCase()))
    )].slice(0, 5);
    container.innerHTML = notes.map(n =>
      `<span class="suggestion-chip" onclick="document.getElementById('trackNote').value='${n.replace(/'/g, "\\'")}'; document.getElementById('noteSuggestions').innerHTML=''">${n}</span>`
    ).join("");
  }, 300);
}

function toggleRecurring(toggle) {
  toggle.classList.toggle("on");
  document.getElementById("recurringOpts").classList.toggle("hidden");
}

async function saveExpense() {
  const amount   = parseFloat(document.getElementById("trackAmount").value);
  const currency = document.getElementById("trackCurrency").value;
  const note     = document.getElementById("trackNote").value.trim();
  const date     = document.getElementById("trackDate").value || new Date().toISOString().split("T")[0];
  const subTag   = document.getElementById("subTagSelect").value;
  const recurringOptsEl = document.getElementById("recurringOpts");
  const isRecurring     = recurringOptsEl && !recurringOptsEl.classList.contains("hidden");
  const recurringFreq   = isRecurring ? document.getElementById("recurringFreq").value : null;

  if (!amount || amount <= 0) { showToast("Please enter an amount"); return; }

  const baseAmount = convertToBase(amount, currency);
  const month      = date.substring(0, 7);

  const expense = {
    id:           Date.now().toString(),
    amount,
    currency,
    baseAmount,
    category:     selectedCategory,
    subTag,
    note,
    date,
    month,
    recurring:    isRecurring,
    recurringFreq,
  };

  try {
    await dbSaveExpense(expense);
    showToast("Entry saved");
    document.getElementById("trackAmount").value   = "";
    document.getElementById("trackNote").value     = "";
    document.getElementById("noteSuggestions").innerHTML = "";
    document.getElementById("conversionPreview").textContent = "";
    setTodayDate();
    renderDashboard();
  } catch (err) {
    showToast("Error saving: " + err.message);
  }
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

  const [budget, expenses] = await Promise.all([
    dbGetBudget(month),
    dbGetExpensesByMonth(month),
  ]);

  const income      = parseFloat(budget.income)      || state.monthlyIncome || 0;
  const savingsGoal = parseFloat(budget.savings_goal) || state.savingsGoal  || 0;
  const available   = income - savingsGoal;
  const totalSpent  = expenses.reduce((s, e) => s + (parseFloat(e.base_amount) || 0), 0);

  document.getElementById("ledgerIncome").textContent      = formatMoney(income);
  document.getElementById("ledgerSavingsGoal").textContent = formatMoney(savingsGoal);
  document.getElementById("ledgerAvailable").textContent   = formatMoney(available);
  document.getElementById("ledgerTotalSpent").textContent  = formatMoney(totalSpent);

  document.getElementById("categoryBreakdown").innerHTML = Object.entries(CATEGORIES).map(([key, cat]) => {
    const catTotal = expenses
      .filter(e => e.category === key)
      .reduce((s, e) => s + (parseFloat(e.base_amount) || 0), 0);
    const pct = income > 0 ? Math.min(100, (catTotal / income) * 100) : 0;
    return `
      <div class="cat-breakdown-item">
        <div class="cat-breakdown-header">
          <div class="cat-breakdown-name"><span>${cat.icon}</span><span>${cat.label}</span></div>
          <div class="cat-breakdown-amount" style="color:${cat.color}">${formatMoney(catTotal)}</div>
        </div>
        <div class="cat-breakdown-bar">
          <div class="cat-breakdown-fill" style="width:${pct}%; background:${cat.color}"></div>
        </div>
      </div>`;
  }).join("");

  const filterVal = document.getElementById("ledgerFilter")?.value || "all";
  const filtered  = filterVal === "all" ? expenses : expenses.filter(e => e.category === filterVal);
  renderExpenseList("ledgerList", filtered, false);
}

function renderExpenseList(containerId, expenses, compact) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!expenses.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6"/><path d="M9 16h4"/></svg></div>
        <div>No entries yet</div>
        <div class="empty-sub">Tap + to log your first expense</div>
      </div>`;
    return;
  }
  container.innerHTML = expenses.map(e => {
    const cat  = CATEGORIES[e.category] || CATEGORIES.needs;
    const tag  = e.sub_tag ? ` · ${e.sub_tag}` : "";
    const diff = e.currency !== state.baseCurrency
      ? ` (${getCurrencySymbol(e.currency)}${e.amount})`
      : "";
    return `
      <div class="expense-item">
        <div class="expense-cat-dot" style="background:${cat.color}"></div>
        <div class="expense-info">
          <div class="expense-note">${e.note || "(no note)"}</div>
          <div class="expense-meta">${cat.icon} ${cat.label}${tag} · ${e.date}</div>
        </div>
        <div class="expense-amount">${formatMoney(e.base_amount)}${diff}</div>
        <button class="expense-delete" onclick="deleteExpense('${e.id}', event)" title="Delete">×</button>
      </div>`;
  }).join("");
}

async function deleteExpense(id, event) {
  event.stopPropagation();
  try {
    await dbDeleteExpense(id);
    showToast("Entry deleted");
    renderDashboard();
    renderLedger();
  } catch (err) {
    showToast("Error: " + err.message);
  }
}

// ══════════════════════════════════════════
// REFLECT
// ══════════════════════════════════════════
function switchReflectTab(btn, tab) {
  document.querySelectorAll(".reflect-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("weeklyReflect").classList.toggle("hidden",  tab !== "weekly");
  document.getElementById("monthlyReflect").classList.toggle("hidden", tab !== "monthly");
  if (tab === "weekly")  renderWeeklyReflect();
  else                   renderMonthlyReflect();
}

function getWeekRange(offset) {
  const now       = new Date();
  const monday    = new Date(now);
  monday.setDate(now.getDate() - now.getDay() + 1 + offset * 7);
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
  const label = state.currentWeekOffset === 0  ? "This Week"
    : state.currentWeekOffset === -1 ? "Last Week"
    : `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${end.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
  document.getElementById("weekLabel").textContent = label;

  const startStr = start.toISOString().split("T")[0];
  const endStr   = end.toISOString().split("T")[0];

  const [allExpenses, saved] = await Promise.all([
    dbGetAllExpenses(),
    dbGetReflection("weekly", startStr),
  ]);

  const weekExpenses = allExpenses.filter(e => e.date >= startStr && e.date <= endStr);
  const weekTotal    = weekExpenses.reduce((s, e) => s + (parseFloat(e.base_amount) || 0), 0);

  document.getElementById("weekSummary").innerHTML = weekExpenses.length
    ? `This week: <strong>${weekExpenses.length} entries</strong>, total <strong>${formatMoney(weekTotal)}</strong>`
    : "No expenses recorded this week.";

  const answers = saved ? saved.answers : {};
  document.getElementById("weeklyPrompts").innerHTML = WEEKLY_PROMPTS.map((q, i) => `
    <div class="prompt-item">
      <div class="prompt-question">${q}</div>
      <textarea class="prompt-answer" id="wp_${i}" placeholder="Write your reflection...">${answers[i] || ""}</textarea>
    </div>`).join("");
}

async function renderMonthlyReflect() {
  const month = state.currentDashMonth;
  const [expenses, budget, saved] = await Promise.all([
    dbGetExpensesByMonth(month),
    dbGetBudget(month),
    dbGetReflection("monthly", month),
  ]);

  const income = parseFloat(budget.income) || state.monthlyIncome || 0;
  const total  = expenses.reduce((s, e) => s + (parseFloat(e.base_amount) || 0), 0);
  const savedAmt = Math.max(0, income - total);

  document.getElementById("monthSummaryReflect").innerHTML = `
    <strong>${formatMonthDisplay(month)}</strong><br>
    Income: ${formatMoney(income)} · Spent: ${formatMoney(total)} · Saved: ${formatMoney(savedAmt)}`;

  const answers = saved ? saved.answers : {};
  document.getElementById("monthlyPrompts").innerHTML = MONTHLY_PROMPTS.map((q, i) => `
    <div class="prompt-item">
      <div class="prompt-question">${q}</div>
      <textarea class="prompt-answer" id="mp_${i}" placeholder="Write your reflection...">${answers[i] || ""}</textarea>
    </div>`).join("");
}

async function renderReflect() { renderWeeklyReflect(); }

async function saveWeeklyReflection() {
  const { start } = getWeekRange(state.currentWeekOffset);
  const period    = start.toISOString().split("T")[0];
  const answers   = {};
  WEEKLY_PROMPTS.forEach((_, i) => {
    const el = document.getElementById("wp_" + i);
    if (el) answers[i] = el.value;
  });
  try {
    await dbSaveReflection("weekly", period, answers);
    showToast("Weekly reflection saved");
  } catch (err) {
    showToast("Error: " + err.message);
  }
}

async function saveMonthlyReflection() {
  const month   = state.currentDashMonth;
  const answers = {};
  MONTHLY_PROMPTS.forEach((_, i) => {
    const el = document.getElementById("mp_" + i);
    if (el) answers[i] = el.value;
  });
  try {
    await dbSaveReflection("monthly", month, answers);
    showToast("Monthly reflection saved");
  } catch (err) {
    showToast("Error: " + err.message);
  }
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
  grid.innerHTML = icons.map(({ key, svg }) =>
    `<button type="button" class="emoji-btn ${svg === state.selectedGoalEmoji ? "active" : ""}"
      onclick="selectIcon(\`${svg.replace(/`/g, "\\`")}\`)">${svg}</button>`
  ).join("");
}

function selectIcon(svg) {
  state.selectedGoalEmoji = svg;
  document.getElementById("goalEmoji").value = svg;
  renderEmojiGrid();
}

function openGoalModal() {
  const defaultSvg = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="7.76" cy="7.76" r="2"/><circle cx="16.24" cy="16.24" r="2"/><circle cx="7.76" cy="16.24" r="2"/><circle cx="16.24" cy="7.76" r="2"/></svg>`;
  document.getElementById("goalCurrencyLabel").textContent = state.baseCurrency;
  document.getElementById("goalName").value     = "";
  document.getElementById("goalTarget").value   = "";
  document.getElementById("goalDeadline").value = "";
  document.getElementById("goalEmoji").value    = defaultSvg;
  state.selectedGoalEmoji = defaultSvg;
  renderEmojiGrid();
  showModal("goalModal");
}

async function saveGoal() {
  const name     = document.getElementById("goalName").value.trim();
  const target   = parseFloat(document.getElementById("goalTarget").value);
  const deadline = document.getElementById("goalDeadline").value;
  const emoji    = document.getElementById("goalEmoji").value || state.selectedGoalEmoji;

  if (!name)             { showToast("Please enter a goal name");   return; }
  if (!target || target <= 0) { showToast("Please enter a target amount"); return; }

  const goal = {
    id:       Date.now().toString(),
    name, target, deadline, emoji,
    current:  0,
    currency: state.baseCurrency,
  };

  try {
    await dbSaveGoal(goal);
    closeAllModals();
    renderGoals();
    showToast("Goal created!");
  } catch (err) {
    showToast("Error: " + err.message);
  }
}

async function renderGoals() {
  const goals = await dbGetGoals();
  const list  = document.getElementById("goalsList");
  if (!goals.length) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
        <div>No goals yet</div>
        <div class="empty-sub">Set your first savings goal above</div>
      </div>`;
    return;
  }
  list.innerHTML = goals.map(g => {
    const pct       = Math.min(100, (g.current / g.target) * 100);
    const completed = pct >= 100;
    const deadlineStr = g.deadline
      ? ` · Due ${new Date(g.deadline).toLocaleDateString("en-US", { month: "short", year: "numeric" })}`
      : "";
    return `
      <div class="goal-card ${completed ? "completed" : ""}">
        <div class="goal-card-header">
          <div class="goal-title-wrap">
            <span class="goal-emoji">${g.emoji || ""}</span>
            <div>
              <div class="goal-name">${g.name}</div>
              <div class="goal-deadline">${g.currency || state.baseCurrency}${deadlineStr}</div>
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
        ${!completed
          ? `<div class="goal-card-footer"><button class="goal-log-btn" onclick="openGoalLog('${g.id}')">+ Add Progress</button></div>`
          : `<div style="text-align:center;font-size:13px;color:var(--positive);margin-top:8px;display:flex;align-items:center;justify-content:center;gap:6px;"><svg viewBox='0 0 24 24' width='14' height='14' fill='none' stroke='currentColor' stroke-width='2'><polyline points='20 6 9 17 4 12'/></svg> Goal achieved!</div>`
        }
      </div>`;
  }).join("");
}

function openGoalLog(goalId) {
  document.getElementById("goalLogAmount").value = "";
  document.getElementById("goalLogId").value     = goalId;
  showModal("goalLogModal");
}

async function logGoalProgress() {
  const id     = document.getElementById("goalLogId").value;
  const amount = parseFloat(document.getElementById("goalLogAmount").value);
  if (!amount || amount <= 0) { showToast("Enter a valid amount"); return; }

  const goals = await dbGetGoals();
  const goal  = goals.find(g => g.id === id);
  if (!goal) return;

  goal.current = (parseFloat(goal.current) || 0) + amount;
  try {
    await dbSaveGoal(goal);
    closeAllModals();
    renderGoals();
    if (goal.current >= goal.target) {
      celebrate(goal.emoji, `${goal.name} Complete!`);
    } else {
      showToast(`Progress logged: ${formatMoney(amount)}`);
    }
  } catch (err) {
    showToast("Error: " + err.message);
  }
}

async function deleteGoal(id) {
  try {
    await dbDeleteGoal(id);
    renderGoals();
    showToast("Goal removed");
  } catch (err) {
    showToast("Error: " + err.message);
  }
}

// ══════════════════════════════════════════
// CSV IMPORT / EXPORT
// ══════════════════════════════════════════
async function exportCSV() {
  const all = await dbGetAllExpenses();
  if (!all.length) { showToast("No data to export"); return; }
  const header = "date,amount,currency,baseAmount,baseCurrency,category,subTag,note,recurring";
  const rows   = all.map(e => [
    e.date, e.amount, e.currency, e.base_amount, state.baseCurrency,
    e.category, e.sub_tag || "", (e.note || "").replace(/,/g, ""), e.recurring || false,
  ].join(","));
  downloadFile([header, ...rows].join("\n"), "kakeibo_export.csv", "text/csv");
  showToast("CSV exported");
}

function importCSV(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    const lines = e.target.result.split("\n").filter(l => l.trim());
    let count = 0;
    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(",");
      if (cols.length < 4) continue;
      const [date, amount, currency, baseAmount, , category, subTag, note] = cols;
      const month = (date || "").substring(0, 7);
      if (!month) continue;
      try {
        await dbSaveExpense({
          id:           Date.now().toString() + i,
          date:         date.trim(),
          amount:       parseFloat(amount),
          currency:     currency.trim(),
          baseAmount:   parseFloat(baseAmount),
          category:     (category || "needs").trim(),
          subTag:       (subTag  || "").trim(),
          note:         (note    || "").trim(),
          month,
          recurring:    false,
          recurringFreq: null,
        });
        count++;
      } catch (err) {
        console.error("Import row error:", err.message);
      }
    }
    showToast(`Imported ${count} entries`);
    renderDashboard();
    event.target.value = "";
  };
  reader.readAsText(file);
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ══════════════════════════════════════════
// CUSTOM TAGS (device-local — preferences only)
// ══════════════════════════════════════════
function openCustomTag() { showModal("customTagModal"); }

function saveCustomTag() {
  const val = document.getElementById("customTagInput").value.trim();
  if (!val) { showToast("Enter a tag name"); return; }
  const key      = "kakeibo_custom_tags_" + selectedCategory;
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  if (!existing.includes(val)) {
    localStorage.setItem(key, JSON.stringify([...existing, val]));
  }
  renderAllSubtags();
  closeAllModals();
  showToast(`Tag "${val}" added`);
}

// ══════════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════════
async function openSettings() {
  const sc = document.getElementById("settingsCurrency");
  if (sc) sc.value = state.baseCurrency;
  const month  = state.currentDashMonth;
  const budget = await dbGetBudget(month);
  const si = document.getElementById("settingsIncome");
  const ss = document.getElementById("settingsSavings");
  if (si) si.value = budget.income      || "";
  if (ss) ss.value = budget.savings_goal || "";
  showModal("settingsModal");
}

async function updateBaseCurrency(code) {
  state.baseCurrency = code;
  await dbSaveSettings({ base_currency: code });
  await fetchExchangeRates(code);
  renderDashboard();
}

async function updateMonthlyIncome(val) {
  const v = parseFloat(val) || 0;
  state.monthlyIncome = v;
  const month  = state.currentDashMonth;
  const budget = await dbGetBudget(month);
  await dbSaveBudget(month, v, parseFloat(budget.savings_goal) || 0);
  renderDashboard();
}

async function updateSavingsGoal(val) {
  const v = parseFloat(val) || 0;
  state.savingsGoal = v;
  const month  = state.currentDashMonth;
  const budget = await dbGetBudget(month);
  await dbSaveBudget(month, parseFloat(budget.income) || 0, v);
  renderDashboard();
}

async function clearAllData() {
  if (!confirm("This will delete ALL your data permanently. Are you sure?")) return;
  await Promise.all([
    supabaseClient.from("expenses").delete().eq("user_id", state.user.id),
    supabaseClient.from("goals").delete().eq("user_id", state.user.id),
    supabaseClient.from("reflections").delete().eq("user_id", state.user.id),
    supabaseClient.from("monthly_budgets").delete().eq("user_id", state.user.id),
    supabaseClient.from("user_settings").delete().eq("user_id", state.user.id),
  ]);
  localStorage.clear();
  setTimeout(() => location.reload(), 400);
}

// ══════════════════════════════════════════
// THEME
// ══════════════════════════════════════════
function toggleTheme() {
  const isDark   = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("kakeibo-theme", newTheme);
  dbSaveSettings({ theme: newTheme });
  const moonSvg = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" fill="#C0C0C0"/></svg>`;
  const sunSvg  = `<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="8" fill="#FF8C00"/></svg>`;
  const icon = newTheme === "dark" ? sunSvg : moonSvg;
  const tb1 = document.getElementById("themeBtn");
  const tb2 = document.getElementById("themeBtnMobile");
  if (tb1) tb1.innerHTML = icon;
  if (tb2) tb2.innerHTML = icon;
  setTimeout(() => renderDashboard(), 50);
}

// ══════════════════════════════════════════
// MODAL HELPERS
// ══════════════════════════════════════════
function showModal(id) {
  document.getElementById("modalOverlay").classList.remove("hidden");
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");
}

function closeAllModals() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("active"));
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

// ══════════════════════════════════════════
// CELEBRATION
// ══════════════════════════════════════════
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
// INIT
// ══════════════════════════════════════════
async function init() {
  // Restore theme immediately from localStorage (fast, no network)
  const savedTheme = localStorage.getItem("kakeibo-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const moonSvg = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" fill="#C0C0C0"/></svg>`;
  const sunSvg  = `<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="8" fill="#FF8C00"/></svg>`;
  const icon = savedTheme === "dark" ? sunSvg : moonSvg;
  const tb1 = document.getElementById("themeBtn");
  const tb2 = document.getElementById("themeBtnMobile");
  if (tb1) tb1.innerHTML = icon;
  if (tb2) tb2.innerHTML = icon;

  state.currentDashMonth   = getCurrentMonth();
  state.currentLedgerMonth = getCurrentMonth();

  // Auth state drives everything
  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    const onboarding = document.getElementById("onboarding");

    if (session) {
      state.user = session.user;

      // Load settings from Supabase
      const settings = await dbLoadSettings();

      if (settings) {
        state.baseCurrency  = settings.base_currency || "USD";
        // Sync theme from Supabase if available
        if (settings.theme) {
          document.documentElement.setAttribute("data-theme", settings.theme);
          localStorage.setItem("kakeibo-theme", settings.theme);
        }

        // Load this month's budget into state
        const budget = await dbGetBudget(state.currentDashMonth);
        state.monthlyIncome = parseFloat(budget.income)       || 0;
        state.savingsGoal   = parseFloat(budget.savings_goal) || 0;

        await fetchExchangeRates(state.baseCurrency);

        if (settings.onboarded) {
          if (onboarding) onboarding.classList.add("hidden");
          launchApp();
        } else {
          if (onboarding) onboarding.classList.remove("hidden");
          renderCurrencyList();
        }
      } else {
        // First ever login — no settings row yet
        if (onboarding) onboarding.classList.remove("hidden");
        renderCurrencyList();
      }

    } else {
      // Logged out
      state.user    = null;
      state.profile = null;
      const app = document.getElementById("app");
      if (app) app.classList.add("hidden");
      // Auth pages handle redirect — don't force here
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeAllModals(); });

const SUPABASE_URL = "https://ofzmavdcuqycdhryspmv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_06ZSEoZ3BEJdAYgibBkPxg_9lVaYQs6";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    const fullName = document.getElementById("fullName").value;
    await signUpNewUser(email, password, username, fullName);
  });
};



const signinForm = document.getElementById("login-form");
if (signinForm) {
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await signInUser(email, password);
  });
};

async function signUpNewUser(email, password, username, fullName) {
  // Step 1: Create the user account
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    showAuthToast("Error signing up: " + error.message, "error");
    return;
  } else {
    showAuthToast("Account created!");
  }

  // Step 2: If auth is successful, save their name and username to your table
  if (data.user) {
    const { error: profileError } = await supabaseClient
      .from("profiles")
      .insert([
        {
          id: data.user.id,
          username: username,
          full_name: fullName,
        },
      ]);

    if (profileError) {
      console.error("Error saving profile info:", profileError.message);
      showAuthToast("Error saving profile info: " + profileError.message, "error");
    } else {
      showAuthToast("Account created and profile saved!");
      setTimeout(() => {
        window.location.href = "signin.html";
      }, 2000);
    }
  }
};

async function signInUser(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    showAuthToast("Login failed: " + error.message, "error");
  } else {
    showAuthToast("Welcome back!");
    setTimeout(() => {
      window.location.href = "main.html";
    }, 20);
  }
};

async function signOutUser() {
  const { error } = await supabaseClient.auth.signOut();
  if (!error) {
    window.location.href = "signin.html";
  }
};

function showAuthToast(msg, type = "info") {
  let toast = document.getElementById("auth-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "auth-toast";
    toast.style.cssText = `
      position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
      background: var(--surface-0); color: var(--text-primary);
      border: 1px solid var(--border-strong); border-radius: 10px;
      padding: 12px 20px; font-size: 14px; font-family: 'DM Sans', sans-serif;
      box-shadow: var(--shadow-lg); z-index: 9999;
      transition: opacity 0.3s ease; min-width: 220px; text-align: center;
    `;
    document.body.appendChild(toast);
  }

  if (type === "error") toast.style.borderColor = "#c0392b";
  else if (type === "success") toast.style.borderColor = "var(--green-mid)";
  else toast.style.borderColor = "var(--border-strong)";
  toast.textContent = msg;
  toast.style.opacity = "1";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.style.opacity = "0", 3000);
};

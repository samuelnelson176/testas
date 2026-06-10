(async () => {
  const res = await fetch("/.netlify/functions/get-config");
  const config = await res.json();
  supabaseClient = supabase.createClient(config.supabaseUrl, config.supabaseKey);
})();

function showAlert(message) {
  document.getElementById("alertModalText").textContent = message;
  document.getElementById("alertModal").classList.add("visible");
}

function closeAlert() {
  document.getElementById("alertModal").classList.remove("visible");
}

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
}

const signinForm = document.getElementById("login-form");
if (signinForm) {
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await signInUser(email, password);
  });
}

async function signUpNewUser(email, password, username, fullName) {
  const { data, error } = await supabaseClient.auth.signUp({ email, password });

  if (error) {
    showAlert("Error signing up: " + error.message);
    return;
  }

  if (data.user) {
    const { error: profileError } = await supabaseClient
      .from("profiles")
      .insert([{ id: data.user.id, username, full_name: fullName }]);

    if (profileError) {
      console.error("Error saving profile:", profileError.message);
    }
  }

  setTimeout(() => { window.location.href = "main.html"; }, 1000);
}

async function signInUser(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if (error) {
    showAlert("Login failed: " + error.message);
  } else {
    setTimeout(() => { window.location.href = "main.html"; }, 1000);
  }
}

async function signOutUser() {
  const { error } = await supabaseClient.auth.signOut();
  if (!error) {
    window.location.href = "signin.html";
  }
}

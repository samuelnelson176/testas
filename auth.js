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
  // Step 1: Create the user account
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    showPopup("Error signing up: " + error.message, "error");
    return;
  } else {
    showPopup("Account created!");
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
      showPopup("Error saving profile info: " + profileError.message, "error");
    } else {
      showPopup("Account created and profile saved!");
      setTimeout(() => {
        window.location.href = "signin.html";
      }, 2000);
    }
  }
}

async function signInUser(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    showPopup("Login failed: " + error.message, "error");
  } else {
    showPopup("Welcome back!");
    window.location.href = "main.html";
  }
}

async function signOutUser() {
  const { error } = await supabaseClient.auth.signOut();
  if (!error) {
    window.location.href = "signin.html";
  }
}

function showPopup(message, type = "success") {
  const popup = document.getElementById("successPopup");
  const msg = document.getElementById("popupMessage");
  const icon = document.getElementById("popupIcon");

  msg.textContent = message;

  if (type === "error") {
    icon.textContent = "✕";
  } else {
    icon.textContent = "✓";
  }

  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("successPopup").classList.add("hidden");
}

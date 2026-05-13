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
    alert("Error signing up: " + error.message);
    return;
  } else {
    alert("Account created! Please check your email to confirm your account.");
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
    } else {
      alert("Account created and profile saved!");
      window.location.href = "signin.html";
    }
  }
}

async function signInUser(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    alert("Welcome back!");
    setTimeout(() => {
      window.location.href = "main.html";
    }, 1000);
  }
}

async function signOutUser() {
  const { error } = await supabaseClient.auth.signOut();
  if (!error) {
    window.location.href = "signin.html";
  }
}

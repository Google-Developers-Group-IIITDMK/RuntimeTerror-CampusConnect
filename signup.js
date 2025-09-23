document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
    
      window.location.href = "login.html"; 
    });
  }
});

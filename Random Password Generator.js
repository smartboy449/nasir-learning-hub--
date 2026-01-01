 // Characters sets
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    // include backslash as '\\' because backslash must be escaped inside string
    const symbols = "!@#$%^&*()-_=+[]{};:,.<>/?\\|`~";
    const allChars = letters + numbers + symbols;

    function generatePassword(length = 12) {
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
      }
      return password;
    }

    function showPassword() {
      const len = Math.max(4, Math.min(64, Number(document.getElementById("length").value) || 12));
      const pass = generatePassword(len);
      document.getElementById("result").textContent = pass;
    }

    function copyPassword() {
      const text = document.getElementById("result").textContent;
      if (!text) return alert("No password to copy");
      navigator.clipboard?.writeText(text).then(() => {
        alert("Password copied to clipboard");
      }, () => {
        alert("Copy failed");
      });
    }

    // Wire buttons
    document.getElementById("genBtn").addEventListener("click", showPassword);
    document.getElementById("copyBtn").addEventListener("click", copyPassword);

    // Optional: allow Enter key on length input to generate
    document.getElementById("length").addEventListener("keydown", (e) => {
      if (e.key === "Enter") showPassword();
    }); 
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");
    errorElement.textContent = "";
    
    try {
        const response = await fetch("http://localhost:8080/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            errorElement.textContent = "Login successful";
            // alert("Login successful");
            localStorage.setItem("token", data.token);
        } else {
            errorElement.textContent = data.message || "Login failed";
        }
    } catch (error) {
        errorElement.textContent = "Error connecting to the server";
    }
}
// Export the functions
export const initTheme = () => {
  const html = document.documentElement;

  // Get the stored theme from local storage
  const storedTheme = localStorage.getItem("theme");

  // Set theme on root element
  html.setAttribute("data-theme", storedTheme || "light");

  // Set theme in local storage
  localStorage.setItem("theme", storedTheme || "light");
};

export const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const targetTheme = currentTheme === "light" ? "dark" : "light";

  // Set theme on root element
  html.setAttribute("data-theme", targetTheme);

  // Set theme in local storage
  localStorage.setItem("theme", targetTheme);
};

// Initialize the theme when the page loads
initTheme();

// Add a click event listener to the "mode" element
document.getElementById("mode").addEventListener("click", toggleTheme);

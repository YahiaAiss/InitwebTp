document.addEventListener('DOMContentLoaded', function() {
    // Get references to the stylesheet links
    var defaultTheme = document.getElementById('default-theme');
    var darkTheme = document.getElementById('dark-theme');

    // Get reference to the button
    var themeToggleBtn = document.getElementById('theme-toggle');

    // Function to toggle between themes
    function toggleTheme() {
        if (defaultTheme.disabled) {
            defaultTheme.disabled = false;
            darkTheme.disabled = true;
            themeToggleBtn.textContent = 'Switch to Dark Theme';
        } else {
            defaultTheme.disabled = true;
            darkTheme.disabled = false;
            themeToggleBtn.textContent = 'Switch to Light Theme';
        }
    }

    // Add click event listener to the button
    themeToggleBtn.addEventListener('click', toggleTheme);
});
// Toggle between light and dark theme
function toggleTheme() {
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute('data-theme') === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
    }
}

// Function to show content in the overlay
function showContent(nodeId) {
    // Fetch the content file
    fetch(`content/${nodeId}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Content file not found');
            }
            return response.json();
        })
        .then(data => {
            const contentDisplay = document.getElementById('content-display');
            contentDisplay.innerHTML = `
                <h2>${data.title}</h2>
                ${data.content}
            `;
            
            document.getElementById('content-overlay').style.display = 'flex';
        })
        .catch(error => {
            console.error('Error loading content:', error);
            const contentDisplay = document.getElementById('content-display');
            contentDisplay.innerHTML = `
                <h2>Content Unavailable</h2>
                <div class="content-section">
                    <p>The requested content could not be loaded. Please try again later.</p>
                </div>
            `;
            document.getElementById('content-overlay').style.display = 'flex';
        });
}

// Function to hide the content overlay
function hideContent() {
    document.getElementById('content-overlay').style.display = 'none';
}

// Close the overlay when clicking outside of the content container
document.getElementById('content-overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        hideContent();
    }
});

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
    // Create the content directory if it doesn't exist
    // This would be handled server-side in a real application
    console.log('AI/ML Scientist Roadmap loaded');
});

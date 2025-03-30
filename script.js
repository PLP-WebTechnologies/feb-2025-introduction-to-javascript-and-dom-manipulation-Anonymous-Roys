// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Text Manipulation
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeableText = document.getElementById('changeable-text');
    
    changeTextBtn.addEventListener('click', function() {
        const textOptions = [
            "JavaScript makes webpages interactive!",
            "DOM stands for Document Object Model.",
            "Events allow JavaScript to respond to user actions.",
            "The DOM represents the page as nodes and objects.",
            "JavaScript can change HTML content dynamically."
        ];
        
        // Pick a random text from the options
        const randomIndex = Math.floor(Math.random() * textOptions.length);
        changeableText.textContent = textOptions[randomIndex];
    });
    
    // Style Manipulation
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleText = document.getElementById('style-text');
    
    changeStyleBtn.addEventListener('click', function() {
        // Toggle the highlight class
        styleText.classList.toggle('highlight');
        
        // Update button text based on current state
        if (styleText.classList.contains('highlight')) {
            changeStyleBtn.textContent = 'Remove Highlight';
        } else {
            changeStyleBtn.textContent = 'Apply Highlight';
        }
    });
    
    // Dark Mode Toggle
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    
    toggleDarkModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update button text based on current mode
        if (document.body.classList.contains('dark-mode')) {
            toggleDarkModeBtn.textContent = 'Switch to Light Mode';
        } else {
            toggleDarkModeBtn.textContent = 'Toggle Dark Mode';
        }
    });
    
    // Element Manipulation
    const addItemBtn = document.getElementById('add-item-btn');
    const removeItemBtn = document.getElementById('remove-item-btn');
    const itemList = document.getElementById('item-list');
    const itemInput = document.getElementById('item-input');
    
    // Add item function
    addItemBtn.addEventListener('click', function() {
        // Get input value
        const itemText = itemInput.value.trim();
        
        // Check if input is not empty
        if (itemText !== '') {
            // Create new element
            const newItem = document.createElement('div');
            newItem.className = 'list-item';
            newItem.textContent = itemText;
            
            // Add double-click event to remove specific item
            newItem.addEventListener('dblclick', function() {
                itemList.removeChild(newItem);
            });
            
            // Add to the list
            itemList.appendChild(newItem);
            
            // Clear input field
            itemInput.value = '';
            
            // Show a message that item was added
            alert('Item added! Double-click any item to remove it.');
        } else {
            alert('Please enter an item first!');
        }
    });
    
    // Remove last item function
    removeItemBtn.addEventListener('click', function() {
        // Check if there are items to remove
        if (itemList.children.length > 0) {
            // Remove the last child
            itemList.removeChild(itemList.lastChild);
        } else {
            alert('No items to remove!');
        }
    });
    
    // Event Handling - Mouse position
    const eventSection = document.getElementById('event-handling');
    const mousePosition = document.getElementById('mouse-position');
    
    eventSection.addEventListener('mousemove', function(event) {
        // Calculate position relative to the section
        const rect = eventSection.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        mousePosition.textContent = `X: ${Math.round(x)}px, Y: ${Math.round(y)}px`;
    });
    
    // Event Handling - Click counter
    const clickArea = document.getElementById('click-area');
    const clickCount = document.getElementById('click-count');
    let count = 0;
    
    clickArea.addEventListener('click', function(event) {
        // Increment counter
        count++;
        clickCount.textContent = `Click count: ${count}`;
        
        // Create a visual indicator where the click happened
        const clickIndicator = document.createElement('span');
        clickIndicator.textContent = '•';
        clickIndicator.style.position = 'absolute';
        clickIndicator.style.left = (event.pageX - 5) + 'px';
        clickIndicator.style.top = (event.pageY - 10) + 'px';
        clickIndicator.style.color = getRandomColor();
        clickIndicator.style.fontSize = '24px';
        document.body.appendChild(clickIndicator);
        
        // Remove the indicator after a short delay
        setTimeout(function() {
            document.body.removeChild(clickIndicator);
        }, 1000);
    });
    
    // Utility function to generate random colors
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Add a welcome message using DOM manipulation when the page loads
    const mainTitle = document.getElementById('main-title');
    const originalTitle = mainTitle.textContent;
    
    mainTitle.textContent = "Welcome to JavaScript DOM Demo!";
    
    // Revert back to original title after 2 seconds
    setTimeout(function() {
        mainTitle.textContent = originalTitle;
    }, 2000);
});
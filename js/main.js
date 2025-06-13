document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content && content.classList.contains('collapsible-content')) {
                header.classList.toggle('collapsed');
                content.classList.toggle('collapsed');
            }
        });

        // Initialize state based on class presence
        // If 'start-open' is present, ensure it's not collapsed.
        // Otherwise, ensure it is collapsed.
        const contentElement = header.nextElementSibling;
        if (contentElement && contentElement.classList.contains('collapsible-content')) {
            if (header.classList.contains('start-open')) {
                header.classList.remove('collapsed');
                contentElement.classList.remove('collapsed');
            } else {
                header.classList.add('collapsed');
                contentElement.classList.add('collapsed');
            }
        }
    });

    // Any other global JavaScript functions can be added here.
    // For example, the tap counter from swift-swiftui-cheatsheet.html if it were to be made global:
    // function updateTapCount() {
    //     const tapCountElement = document.getElementById('tap-count-output');
    //     if (tapCountElement) {
    //         const currentTaps = parseInt(tapCountElement.innerText.split(': ')[1] || 0);
    //         tapCountElement.innerText = `Taps: ${currentTaps + 1}`;
    //     }
    // }
    // // If you add functions like updateTapCount, ensure they are either globally accessible
    // // or attached to event listeners appropriately if elements are dynamically added.
    
    // Scroll-to-Top Button Functionality
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 100px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (scrollToTopBtn) { // Check if the button exists on the page
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    // This function needs to be globally accessible if called by inline onclick
    // or we can attach it via addEventListener if the button is guaranteed to exist at DOMContentLoaded
});

// Make scrollToTop globally accessible for inline onclick
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
// Re-check and attach event listener if button exists after DOM is loaded,
// this handles cases where the button might be added by other scripts or if inline onclick is removed.
document.addEventListener('DOMContentLoaded', function() {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn && !scrollToTopBtn.onclick) { // Check if onclick is not already set
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }
});

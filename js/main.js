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
});

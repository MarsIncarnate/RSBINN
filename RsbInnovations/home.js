import { timeline } from 'wix-animations';

$w.onReady(function () {
    // Array of texts to display
    const texts = [
        "Renovate your home",
        "to maximize sales value",
        "to sell faster",
        "to enjoy with family",
        "with confidence",
        "with peace of mind"
    ];

    // Function to handle text animation
    function animateText() {
        const textElement = $w("#textElement");

        // Rotate through the array of texts
        texts.push(texts.shift());

        // Update the text content
        textElement.text = texts[0];

        // Animate the text elements
        const revealTimeline = timeline()
            .add($w('#textElement'), { duration: 500, y: -40, opacity: 0, easing: 'easeOutBack' });

        revealTimeline.play();
        
        setTimeout(() => {
            // Reset position and opacity for the next iteration
            $w('#textElement').y = 0;
            $w('#textElement').opacity = 1;

            // Reverse the animation
            revealTimeline.reverse();
        }, 1000); // 1 second delay before sliding up
    }

    // Call the animateText function initially and set it to repeat
    animateText();
    setInterval(animateText, 4000); // 4 seconds interval (3 seconds + 1 second for animation)
});

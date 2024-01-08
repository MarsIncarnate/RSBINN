$w.onReady(function () {
    var states = ['box154', 'box153', 'box152'];
    var stateNum = 0;

    function slideShow() {
        updateButtonColors(stateNum); // Call a function to update button colors
        $w('#multiStateBox1').changeState(states[stateNum]);

        if (stateNum < states.length - 1) {
            stateNum++;
        } else {
            stateNum = 0;
        }

        setTimeout(slideShow, 7000);
    }

    function updateButtonColors(currentState) {
        // Reset button colors
        $w("#button19").style.backgroundColor = "white";
        $w("#button20").style.backgroundColor = "white";
        $w("#button21").style.backgroundColor = "white";

        // Set color for the button corresponding to the current slide
        switch (currentState) {
            case 0:
                $w("#button19").style.backgroundColor = "#297AB4";
                break;
            case 1:
                $w("#button20").style.backgroundColor = "#297AB4";
                break;
            case 2:
                $w("#button21").style.backgroundColor = "#297AB4";
                break;
            // Add more cases if you have additional slides
        }
    }

    $w("#button19").onClick(() => {
        showSlide(0); // Show the corresponding slide when button is clicked
    });

    $w("#button20").onClick(() => {
        showSlide(1);
    });

    $w("#button21").onClick(() => {
        showSlide(2);
    });

    function showSlide(slideIndex) {
        stateNum = slideIndex;
        updateButtonColors(stateNum);
        $w('#multiStateBox1').changeState(states[stateNum]);
    }

    slideShow();
    });


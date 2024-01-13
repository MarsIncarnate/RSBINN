$w.onReady(function () {
    // Set initial visibility for all boxes
    let allBoxes = ["#box366", "#box369", "#box371", "#box373", "#box375", "#box377", "#box379", "#box381", "#box383", "#box385"];
    allBoxes.forEach(box => $w(box).show());

    // Map each box to its corresponding text element
    const boxToTextMapping = {
        "#box366": "CAR ACCIDENTS",
        "#box369": "CAR ACCIDENTS",
        "#box371": "PREMISES LIABILITY",
        "#box373": "CAR ACCIDENTS",
        "#box375": "PREMISES LIABILITY",
        "#box377": "PEDESTRIAN ACCIDENTS",
        "#box379": "CONSUMER LAW",
        "#box381": "WORKERS COMPENSATION",
        "#box383": "LIABILITY",
        "#box385": "MEDICAL MALPRACTICE"
    };
	console.log(boxToTextMapping['CAR ACCIDENTS'])
	console.log(boxToTextMapping.findIndex(box => box.includes('CAR ACCIDENTS')))

    // Add onChange event to the dropdown
    $w("#dropdown5").onChange((event) => {
        // Get the selected category
        let selectedCategory = event.target.value.toUpperCase();
		console.log(selectedCategory)
        // Hide all boxes
        allBoxes.forEach(box => $w(box).hide());

        // Show the box corresponding to the selected category
        let selectedBox = `#${boxToTextMapping[`#box${allBoxes.findIndex(box => box.includes(selectedCategory)) + 367}`]}`;
        $w(selectedBox).show();
		
    });
});

$w.onReady(function () {
    // Get the current page URL
    const currentPageUrl = wixLocation.url;

    const headerElement = $w('#header');

    const activePageUrl = '/active-page-url';

    // Check if the current page is active
    const isPageActive = currentPageUrl.endsWith(activePageUrl);

    // Set the hover color based on the page's active status
    const hoverColor = isPageActive ? '#0000FF' : '#CCCCCC'; // Blue if active, gray otherwise

    // Set the hover color of the header element
    headerElement.onMouseIn(() => {
        headerElement.style.backgroundColor = hoverColor;
    });

    headerElement.onMouseOut(() => {
        headerElement.style.backgroundColor = ''; // Reset to default when not hovered
    });
});

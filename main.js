document.addEventListener("DOMContentLoaded", () => {
    const heroContainer = document.querySelector('.hero-container');
    const img = new Image();
    img.src = './images/image.png'; // Your image path

    img.onload = () => {
        const aspectRatio = img.width / img.height;
        heroContainer.style.height = `${heroContainer.offsetWidth / aspectRatio}px`;
    };
});

window.addEventListener('scroll', function () {
    // Target the scrolling text section

    const heroText = document.querySelector('#bg-txt');
    // console.log("h2: ",heroText)
    const scrollPosition = window.scrollY;
    const content = document.querySelector('#scroll-container');
    // console.log("content: ",content)
    const contentTop = content.offsetTop;
    const contentHeight = content.offsetHeight;
    const adjustedContentTop = contentTop + (contentHeight * 0.1); // Adjust start to 20% of content height
    const contentEnd = contentTop + contentHeight;

    // console.log("backgroundPositionY :",heroText.style.backgroundPositionY)

    // Calculate only if within the `.content` div range after 20%
    if (scrollPosition >= adjustedContentTop && scrollPosition <= contentEnd) {
        const maxScroll = contentEnd - adjustedContentTop;
        const scrollPercentage = (scrollPosition - adjustedContentTop) / maxScroll; // Between 0 and 1
        const backgroundPositionY = Math.min(scrollPercentage * 100, 100); // Clamp to 100%
        heroText.style.backgroundPositionY = `${backgroundPositionY}%`;
    } else if (scrollPosition < adjustedContentTop) {
        heroText.style.backgroundPositionY = "0%"; // Reset to 0% above adjusted start
    } else {
        heroText.style.backgroundPositionY = "100%"; // Set to 100% below content
    }
});

// Remove hash from the URL on page load
if (window.location.hash) {
    window.history.replaceState(null, null, ' ');
}

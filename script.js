
    document.addEventListener('DOMContentLoaded', () => {
        const paragraphs = document.querySelectorAll('.typing');
        let currentIndex = 0;

        function typeText(element, text, callback) {
            let index = 0;
            element.style.display = 'inline-block';
            element.textContent = ''; // Clear previous text before typing
            const interval = setInterval(() => {
                element.textContent += text[index];
                index++;
                if (index === text.length) {
                    clearInterval(interval);
                    setTimeout(callback, 1000);
                }
            }, 100);
        }

        function showParagraphs() {
            if (currentIndex < paragraphs.length) {
                const currentParagraph = paragraphs[currentIndex];
                const text = currentParagraph.getAttribute('data-text');
                currentParagraph.style.opacity = '1';
                typeText(currentParagraph, text, () => {
                    currentParagraph.style.opacity = '0';
                    setTimeout(() => {
                        currentParagraph.style.display = 'none';
                        currentIndex++;
                        if (currentIndex === paragraphs.length) {
                            currentIndex = 0; // Reset index for infinite loop
                        }
                        showParagraphs();
                    }, 1000);
                });
            }
        }

        showParagraphs();
    });

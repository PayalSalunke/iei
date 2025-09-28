document.addEventListener('DOMContentLoaded', function() {
    const roles = ["a Web Developer.", "a UI/UX Enthusiast.", "a Problem Solver.", "a Lifelong Learner."];
    let roleIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById('typing-effect');

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typingElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Speed of typing
        } else {
            setTimeout(erase, 2000); // Wait before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Speed of erasing
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500); // Wait before typing next role
        }
    }

    type(); // Start the animation
});
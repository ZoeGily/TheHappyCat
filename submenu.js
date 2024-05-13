function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.submenu button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = button.dataset.section;
            scrollToSection(sectionId);
        });
    });
});

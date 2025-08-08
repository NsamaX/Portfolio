// ==== Main Section Click Event ====
document.addEventListener('DOMContentLoaded', () => {
    const SELECTORS = {
        NAV_LINK: '.nav-link',
        SECTION: 'section',
        SUBSECTION: '.subsection',
        SUB_NAV_LINK: '.sub-nav-link'
    };

    // Cache selectors
    const navLinks = document.querySelectorAll(SELECTORS.NAV_LINK);
    const sections = document.querySelectorAll(SELECTORS.SECTION);
    const subsections = document.querySelectorAll(SELECTORS.SUBSECTION);
    const subNavLinksBySection = {
        about: document.querySelectorAll(`#about ${SELECTORS.SUB_NAV_LINK}`),
        projects: document.querySelectorAll(`#projects ${SELECTORS.SUB_NAV_LINK}`)
    };

    // Reusable function to toggle active class
    const toggleActiveClass = (links, activeId, dataAttribute) => {
        links.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[${dataAttribute}="${activeId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    };

    // Main section observer
    const sectionObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                toggleActiveClass(navLinks, entry.target.id, 'data-section');
            }
        });
    }, sectionObserverOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // Subsection observer
    const subsectionObserverOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.3
    };

    const subsectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parentSection = entry.target.closest('section')?.id;
                if (!parentSection) return;
                const currentSubNavLinks = subNavLinksBySection[parentSection] || [];
                toggleActiveClass(currentSubNavLinks, entry.target.id, 'data-subsection');
            }
        });
    }, subsectionObserverOptions);

    subsections.forEach(subsection => subsectionObserver.observe(subsection));
});

// ==== Skills Section Hover + Click Event ====
document.querySelectorAll('#skills .skill img').forEach(img => {
    const showDetail = () => {
        const name = img.getAttribute('data-name');
        const description = img.getAttribute('data-description');

        // Update the topic and description in detail
        document.querySelector('#skills .detail h2').textContent = name;
        document.querySelector('#skills .detail p').textContent = description;

        // Read the color from the attribute and change the icon.
        const colorName = img.getAttribute('color');
        const filterMap = {
            red:    'invert(80%) sepia(100%) saturate(3000%) hue-rotate(340deg)',
            orange: 'invert(60%) sepia(100%) saturate(2000%) hue-rotate(000deg)',
            yellow: 'invert(30%) sepia(100%) saturate(1000%) hue-rotate(008deg)',
            green:  'invert(40%) sepia(100%) saturate(1000%) hue-rotate(100deg)',
            blue:   'invert(40%) sepia(100%) saturate(1000%) hue-rotate(180deg)',
            purple: 'invert(40%) sepia(100%) saturate(1000%) hue-rotate(200deg)',
            pink:   'invert(40%) sepia(100%) saturate(2000%) hue-rotate(300deg)'
        };

        // Reset all icons
        document.querySelectorAll('#skills .skill img').forEach(icon => {
            icon.style.filter = 'none';
        });

        // Apply a filter to the selected item.
        img.style.filter = filterMap[colorName] || 'none';
    };

    // Show both when clicked and when mouse hovered.
    img.addEventListener('click', showDetail);
    img.addEventListener('mouseover', showDetail);
});
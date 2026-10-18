
async function copyEmail(button) {
    const email = "abdullah2309r@gmail.com";

    try {
        await navigator.clipboard.writeText(email);

        const originalIcon = button.innerHTML;

        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="14" height="14"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">
                <path d="m5 12 4 4L19 6"></path>
            </svg>
        `;

        button.title = "Copied!";
        button.setAttribute("aria-label", "Email copied");

        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.title = "Copy email";
            button.setAttribute("aria-label", "Copy email address");
        }, 1500);

    } catch (error) {
        alert("Copy failed. Please copy manually: " + email);
    }
}


document.querySelectorAll(".experience-toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const item = button.closest(".experience-item");
        const isExpanded = item.classList.toggle("active");

        button.setAttribute("aria-expanded", String(isExpanded));
        button.setAttribute(
            "aria-label",
            isExpanded ? "Collapse experience" : "Expand experience"
        );

        button.innerHTML = isExpanded
            ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg>'
            : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
    });
});


      const sidebar = document.getElementById("sidebar");
      const backdrop = document.getElementById("sidebarBackdrop");
      const menuBtn = document.getElementById("mobileMenuBtn");
      const ICON_OPEN =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      const ICON_CLOSE =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      function toggleSidebar(forceState) {
        if (!sidebar) return;
        let open =
          typeof forceState === "boolean"
            ? forceState
            : !sidebar.classList.contains("sidebar-open");
        if (open) {
          sidebar.classList.add("sidebar-open");
          backdrop.classList.add("sidebar-open");
          menuBtn.setAttribute("aria-expanded", "true");
          menuBtn.setAttribute("aria-label", "Close menu");
          menuBtn.innerHTML = ICON_CLOSE;
        } else {
          sidebar.classList.remove("sidebar-open");
          backdrop.classList.remove("sidebar-open");
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.setAttribute("aria-label", "Open menu");
          menuBtn.innerHTML = ICON_OPEN;
        }
      }
      function closeSidebarOnMobile() {
        if (window.innerWidth < 1024) toggleSidebar(false);
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) toggleSidebar(false);
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && sidebar.classList.contains("sidebar-open"))
          toggleSidebar(false);
      });

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      
      // Toggle menu visibility
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      
      // Animate menu
      if (!isExpanded) {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-20px)';
        mobileMenu.classList.remove('hidden');
        
        // Trigger animation
        setTimeout(() => {
          mobileMenu.style.transition = 'opacity 300ms ease-out, transform 300ms ease-out';
          mobileMenu.style.opacity = '1';
          mobileMenu.style.transform = 'translateY(0)';
        }, 10);
      }
      
      // Toggle button icon
      const icon = mobileMenuButton.querySelector('svg');
      if (icon) {
        if (!isExpanded) {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
        } else {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        }
      }
    });
  }
  
  // Close menu when clicking on a link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      
      // Reset button icon
      const icon = mobileMenuButton.querySelector('svg');
      if (icon) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
      }
    });
  });
});
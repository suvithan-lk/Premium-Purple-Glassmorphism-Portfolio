document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const animateOnScroll = () => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
      observer.observe(el);
      
      // Add delay based on data-delay attribute
      if (el.dataset.delay) {
        el.style.transitionDelay = `${el.dataset.delay}ms`;
      }
    });
  };
  
  // Initialize animations
  animateOnScroll();
  
  // Testimonial carousel
  const initTestimonialCarousel = () => {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;
    
    // Mock data - in a real app, this would come from an API or JSON file
    const testimonials = [
      {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CEO, TechStart',
        content: 'Alex delivered beyond our expectations. The project was completed ahead of schedule with exceptional quality.',
        avatar: '/assets/images/avatar-1.jpg'
      },
      {
        id: 2,
        name: 'Michael Chen',
        role: 'Product Manager, InnovateCo',
        content: 'Working with Alex was a pleasure. Their attention to detail and creative solutions elevated our product.',
        avatar: '/assets/images/avatar-2.jpg'
      },
      {
        id: 3,
        name: 'Emma Rodriguez',
        role: 'Design Director, CreativeMinds',
        content: 'Alex brings both technical expertise and artistic vision. They transformed our digital presence completely.',
        avatar: '/assets/images/avatar-3.jpg'
      }
    ];
    
    // Generate testimonial cards
    carousel.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${testimonials.map(testimonial => `
          <div class="glass-panel p-6" data-animate="fade-up">
            <div class="flex items-center mb-4">
              <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-medium">${testimonial.name}</h4>
                <p class="text-sm text-white/60">${testimonial.role}</p>
              </div>
            </div>
            <p class="text-white/80">${testimonial.content}</p>
          </div>
        `).join('')}
      </div>
    `;
  };
  
  initTestimonialCarousel();
  
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      
      try {
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        `;
        
        // In a real implementation, you would send the form data to your server
        // For this example, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        contactForm.innerHTML = `
          <div class="text-center py-8" data-animate="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-2xl font-bold mb-2">Message Sent!</h3>
            <p class="text-white/80 mb-6">Thank you for your message. I'll get back to you soon.</p>
            <button onclick="window.location.reload()" class="glass-button px-6 py-2 rounded-full font-medium">
              Send Another Message
            </button>
          </div>
        `;
      } catch (error) {
        console.error('Error submitting form:', error);
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        
        // Show error message
        const errorElement = document.createElement('div');
        errorElement.className = 'text-red-400 text-sm mt-4';
        errorElement.textContent = 'There was an error sending your message. Please try again.';
        contactForm.appendChild(errorElement);
      }
    });
  }
});
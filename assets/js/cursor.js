document.addEventListener('DOMContentLoaded', () => {
  const cursorDot = document.querySelector('[data-cursor-dot]');
  const cursorOutline = document.querySelector('[data-cursor-outline]');
  
  // Hide cursor if touch device
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  };
  
  if (isTouchDevice()) {
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }
  
  // Track mouse position
  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;
  
  // Animation frame for smooth movement
  const animateCursor = () => {
    // Ease for dot (fast)
    const dotX = mouseX;
    const dotY = mouseY;
    
    // Ease for outline (slower)
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    
    // Apply transforms
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
    
    requestAnimationFrame(animateCursor);
  };
  
  animateCursor();
  
  // Update mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Interactive elements effect
  const interactiveElements = [
    'a', 'button', 'input', 'textarea', 'select', 
    '[data-cursor-hover]', '[data-cursor-text]'
  ];
  
  document.querySelectorAll(interactiveElements.join(',')).forEach(el => {
    // Mouse enter
    el.addEventListener('mouseenter', () => {
      if (el.dataset.cursorText) {
        cursorDot.innerHTML = el.dataset.cursorText;
        cursorDot.classList.add('!w-auto', '!h-auto', '!px-2', '!py-1');
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        cursorDot.classList.add('!opacity-0');
      }
      
      cursorOutline.classList.add('!w-8', '!h-8', '!border-2', '!bg-transparent');
    });
    
    // Mouse leave
    el.addEventListener('mouseleave', () => {
      cursorDot.innerHTML = '';
      cursorDot.classList.remove('!w-auto', '!h-auto', '!px-2', '!py-1', '!opacity-0');
      cursorOutline.classList.remove('!w-8', '!h-8', '!border-2', '!bg-transparent');
    });
  });
  
  // Click effect
  document.addEventListener('mousedown', () => {
    cursorOutline.classList.add('!scale-75', '!bg-white/20');
  });
  
  document.addEventListener('mouseup', () => {
    cursorOutline.classList.remove('!scale-75', '!bg-white/20');
  });
});
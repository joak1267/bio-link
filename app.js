import CONFIG from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  initBioLink();
});

/**
 * Initializes and populates the bio link page with data from config.js
 */
function initBioLink() {
  // 1. Populate Profile Details
  const profileAvatar = document.getElementById('profileAvatar');
  const profileName = document.getElementById('profileName');
  const profileBio = document.getElementById('profileBio');
  
  if (CONFIG.profile) {
    if (CONFIG.profile.avatar) {
      profileAvatar.src = CONFIG.profile.avatar;
    }
    profileName.textContent = CONFIG.profile.name || 'Tu Nombre';
    profileBio.textContent = CONFIG.profile.bio || '';
  }

  // 2. Populate Links
  const linksContainer = document.getElementById('linksContainer');
  linksContainer.innerHTML = ''; // Clear fallback content
  
  if (CONFIG.links && CONFIG.links.length > 0) {
    CONFIG.links.forEach((link, index) => {
      const card = document.createElement('a');
      card.href = link.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.className = `link-card${link.highlight ? ' highlighted' : ''}`;
      
      // Premium staggered animation delay
      card.style.animationDelay = `${0.08 + index * 0.08}s`;
      
      // Dynamic link branding colors (Wow Factor)
      if (link.color) {
        const glowColor = hexToRgba(link.color, 0.2);
        const glowLight = hexToRgba(link.color, 0.04);
        const glowLightHover = hexToRgba(link.color, 0.08);
        
        card.style.setProperty('--link-color', link.color);
        card.style.setProperty('--link-glow', glowColor);
        card.style.setProperty('--link-glow-light', glowLight);
        card.style.setProperty('--link-glow-light-hover', glowLightHover);
      }
      
      // Card content
      const titleEl = document.createElement('div');
      titleEl.className = 'link-card-title';
      
      // Draw official SVG logo next to the centered text or anchored to the left
      const iconMarkup = link.icon ? getLinkIconSvg(link.icon, link.color) : '';
      
      // Classic layout: Left official icon, Centered text, Right arrow
      titleEl.innerHTML = `
        ${iconMarkup}
        <span>${link.title}</span>
        <i data-lucide="arrow-up-right" class="arrow-icon"></i>
      `;
      
      card.appendChild(titleEl);
      linksContainer.appendChild(card);
    });
  }

  // 3. Populate Social Networks in Footer
  const socialsContainer = document.getElementById('socialsContainer');
  socialsContainer.innerHTML = '';
  
  if (CONFIG.socials && CONFIG.socials.length > 0) {
    CONFIG.socials.forEach((social, index) => {
      const socialLink = document.createElement('a');
      socialLink.href = social.url;
      socialLink.target = '_blank';
      socialLink.rel = 'noopener noreferrer';
      socialLink.className = 'social-icon-btn';
      socialLink.ariaLabel = social.label || social.icon;
      socialLink.title = social.label || social.icon;
      
      // Delay after links
      const delay = 0.15 + (CONFIG.links ? CONFIG.links.length * 0.08 : 0) + (index * 0.04);
      socialLink.style.animationDelay = `${delay}s`;
      
      // Use official SVG logo in the social footer
      socialLink.innerHTML = getLinkIconSvg(social.icon, '#94a3b8');
      
      socialsContainer.appendChild(socialLink);
    });
  }

  // 4. Initialize Lucide Icons (handles the small arrow icons)
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Returns a pixel-perfect official SVG brand logo
 * @param {string} iconKey 
 * @param {string} color 
 * @returns {string}
 */
function getLinkIconSvg(iconKey, color) {
  const c = color || 'currentColor';
  const iconMap = {
    // Official Facebook Logo SVG
    'facebook': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${c}" class="link-card-icon"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    
    // Official TikTok Logo SVG
    'tiktok': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${c}" class="link-card-icon"><path d="M12.525.02c1.31-.032 2.614-.01 3.91-.02.08 1.53.84 2.9 2.05 3.74.84.55 1.8.84 2.8.88v3.9c-1.42-.05-2.78-.6-3.87-1.55-.26-.22-.5-.46-.72-.71v6.86c.03 2.1-.8 4.14-2.3 5.56-1.57 1.5-3.8 2.22-6 1.95-2.2-.28-4.14-1.68-5.06-3.7-1.04-2.28-.67-5.02 1-6.96 1.4-1.6 3.6-2.4 5.72-2.12v3.94c-1.12-.2-2.26.15-3 1-.76.8-.96 2.07-.48 3.06.44.92 1.4 1.5 2.4 1.5 1.37.07 2.56-1 2.6-2.37V.02z"/></svg>`,
    
    // Official Gmail Envelope M-Logo
    'mail': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${c}" class="link-card-icon"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.29 1.454-2.032 2.514-1.302L12 10.671l9.486-7.116c1.06-.73 2.514.012 2.514 1.302z"/></svg>`,
    
    // Official WhatsApp Brand Logo
    'message-circle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${c}" class="link-card-icon"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.722-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.905-6.99-1.876-1.875-4.353-2.907-6.992-2.908-5.441 0-9.87 4.422-9.873 9.866-.001 1.748.461 3.454 1.341 4.962l-.989 3.612 3.724-.977zm11.168-5.07c-.3-.15-1.774-.875-2.046-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.35.225-.65.075-.3-.15-1.27-.47-2.42-1.492-.89-.8-1.5-1.785-1.67-2.085-.18-.3-.02-.46.13-.61.135-.13.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.22 1.37.19 1.88.12.57-.08 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.07-.125-.27-.2-.57-.35z"/></svg>`,
    
    // Official Web Browser Globe
    'globe': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-card-icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    
    // Official Portfolio Folder
    'briefcase': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-card-icon"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    
    // Official Services Layers
    'layers': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-card-icon"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    
    // Official Google Forms Clipboard Logo
    'clipboard': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-card-icon"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14h6"></path><path d="M9 18h6"></path><path d="M9 10h6"></path></svg>`
  };
  return iconMap[iconKey] || '';
}

/**
 * Converts Hex code to RGBA string
 * @param {string} hex 
 * @param {number} alpha 
 * @returns {string}
 */
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

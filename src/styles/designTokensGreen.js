export const designTokens = {
  gradients: {
    hero: 'linear-gradient(135deg, #059669 0%, #0F766E 100%)',
    button: 'linear-gradient(135deg, #10B981 0%, #0a7855ff 100%)',
    heroV2: {
      // Soft radial glows + subtle dot grid  ─ composited as a CSS background shorthand
      background: `
                radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15) 0%, rgba(16, 185, 129, 0.05) 45%, transparent 70%),
                radial-gradient(circle at 20% 80%, rgba(5, 150, 105, 0.08) 0%, rgba(20, 184, 166, 0.02) 50%, transparent 80%),
                radial-gradient(rgba(16, 185, 129, 0.08) 1.5px, transparent 1.5px)
            `,
      backgroundSize: '100%, 100%, 24px 24px',
      // Gradient used for the headline text clip
      headlineText: 'linear-gradient(135deg, #059669 0%, rgba(20, 184, 166, 1) 100%)',
      // Primary CTA button gradient
      ctaPrimary: 'linear-gradient(135deg, #059669 0%, #0F766E 100%)',
      ctaPrimaryHover: 'linear-gradient(135deg, #047857 0%, #0E4B4B 100%)',
    },
  },
  shadows: {
    navbar: '0px 8px 24px rgba(15, 23, 42, 0.08)',
    navbar2: '0px 7px 24px rgba(55, 207, 141, 0.57)',
    heroBox: '0px 8px 44px rgba(66, 226, 208, 0.5)',
    card: '0px 4px 12px hsla(222, 47%, 11%, 0.06)',
    heroV2: {
      // Outer container shadow and border
      container: '0px 20px 40px rgba(15, 23, 42, 0.04)',
      containerBorder: '1px solid rgba(16, 185, 129, 0.12)',
      // Hero image shadow
      image: '0px 25px 50px -12px rgba(15, 23, 42, 0.15), 0px 0px 0px 1px rgba(15, 23, 42, 0.04)',
      // Primary CTA button glow
      ctaButton: '0px 8px 20px rgba(5, 150, 105, 0.2)',
      ctaButtonHover: '0px 12px 24px rgba(5, 150, 105, 0.3)',
    },
  },
  layout: {
    maxWidth: '1200px',
    sectionPaddingY: 10,
    header: {
      height: '64px',
      background: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(15, 23, 42, 0.1)',
    },
    footer: {
      height: '64px',
      background: '#FFFFFF',
      boxShadow: '0px -2px 4px rgba(15, 23, 42, 0.1)',
    },
  },
};

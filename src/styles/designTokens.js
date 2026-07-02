export const designTokens = {
  gradients: {
    hero: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
    button: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
    heroV2: {
      background: `
                radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.12) 0%, rgba(79, 70, 229, 0.05) 45%, transparent 70%),
                radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.08) 0%, rgba(124, 58, 237, 0.03) 50%, transparent 80%),
                radial-gradient(rgba(79, 70, 229, 0.08) 1.5px, transparent 1.5px)
            `,
      backgroundSize: '100%, 100%, 24px 24px',
      headlineText: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
      ctaPrimary: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
      ctaPrimaryHover: 'linear-gradient(135deg, #4338CA 0%, #6D28D9 100%)',
    },
  },
  shadows: {
    navbar: '0px 8px 24px rgba(15, 23, 42, 0.08)',
    navbar2: '0px 1px 14px rgba(160, 232, 246, 0.26)',
    heroBox: '0px 0px 30px rgba(141, 200, 251, 0.25)',
    card: '0px 4px 12px hsla(222, 47%, 11%, 0.06)',
    cardHover: '0px 8px 24px rgba(15, 23, 42, 0.08)',
    linkHoverShadow: 'rgba(79, 70, 229, 0.08)',
    heroV2: {
      container: '0px 20px 40px rgba(15, 23, 42, 0.04)',
      containerBorder: '1px solid rgba(79, 70, 229, 0.12)',
      image: '0px 25px 50px -12px rgba(15, 23, 42, 0.15), 0px 0px 0px 1px rgba(15, 23, 42, 0.04)',
      ctaButton: '0px 8px 20px rgba(79, 70, 229, 0.25)',
      ctaButtonHover: '0px 12px 24px rgba(79, 70, 229, 0.4)',
    },
  },
  layout: {
    maxWidth: '1350px',
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

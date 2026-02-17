export const siteConfig = {
  // Firmen-Daten
  companyName: 'Maler Mustermann',
  companySlogan: 'Ihr Experte für Farbe und Gestaltung',
  owner: 'Max Mustermann',

  // Kontakt
  phone: '+49 123 456789',
  phoneDisplay: '0123 456789',
  email: 'info@maler-mustermann.de',
  address: {
    street: 'Farbstraße 12',
    zip: '12345',
    city: 'Musterstadt',
  },

  // Öffnungszeiten
  openingHours: [
    { days: 'Montag – Freitag', hours: '08:00 – 17:00' },
    { days: 'Samstag', hours: 'nach Vereinbarung' },
    { days: 'Sonntag', hours: 'geschlossen' },
  ],

  // Social Media
  social: {
    instagram: 'https://instagram.com/malermustermann',
    facebook: 'https://facebook.com/malermustermann',
    // google: 'https://g.page/malermustermann',
  },

  // URLs
  siteUrl: 'https://www.maler-mustermann.de',

  // Analytics (Umami)
  umamiWebsiteId: '',
  umamiScriptUrl: '',

  // SEO Defaults
  defaultTitle: 'Maler Mustermann – Ihr Malermeisterbetrieb in Musterstadt',
  defaultDescription:
    'Professionelle Malerarbeiten in Musterstadt und Umgebung. Innenraumgestaltung, Fassadenarbeiten, Tapezierarbeiten und mehr.',
  defaultImage: '/images/og-image.jpg',

  // Rechtliches
  legal: {
    taxId: 'DE123456789',
    tradeRegister: 'HRB 12345, Amtsgericht Musterstadt',
    supervisoryAuthority: 'Handwerkskammer Musterstadt',
  },
};

export type SiteConfig = typeof siteConfig;

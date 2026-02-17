export const siteConfig = {
  // Firmen-Daten
  companyName: 'Brunk Garten',
  companySlogan: 'Garten- und Landschaftsbau',
  owner: 'Daniel Brunk',

  // Kontakt (TODO: echte Daten eintragen)
  phone: '+49 XXX XXXXXXX',
  phoneDisplay: '0XXX XXXXXXX',
  email: 'info@brunk-garten.de',
  address: {
    street: 'Musterstraße 1',
    zip: '78315',
    city: 'Radolfzell',
  },

  // Öffnungszeiten
  openingHours: [
    { days: 'Montag – Freitag', hours: '07:00 – 17:00' },
    { days: 'Samstag', hours: 'nach Vereinbarung' },
    { days: 'Sonntag', hours: 'geschlossen' },
  ],

  // Social Media
  social: {
    // instagram: 'https://instagram.com/brunkgarten',
    // facebook: 'https://facebook.com/brunkgarten',
  },

  // URLs
  siteUrl: 'https://brunk-garten.de',

  // Analytics (Umami)
  umamiWebsiteId: '',
  umamiScriptUrl: '',

  // SEO Defaults
  defaultTitle: 'Brunk Garten – Garten- und Landschaftsbau am Bodensee',
  defaultDescription:
    'Professioneller Garten- und Landschaftsbau in Radolfzell und am Bodensee. Gartengestaltung, Pflasterarbeiten, Bepflanzung und mehr.',
  defaultImage: '/images/og-image.jpg',

  // Rechtliches (TODO: echte Daten eintragen)
  legal: {
    taxId: '',
    tradeRegister: '',
    supervisoryAuthority: 'Handwerkskammer Konstanz',
  },
};

export type SiteConfig = typeof siteConfig;

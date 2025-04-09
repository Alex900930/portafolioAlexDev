// app/components/SeoJsonLd.tsx
export const SeoJsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alexander H. Herrera Millet',
    url: 'https://portafolioalexdev2025.vercel.app/',
    sameAs: ['https://www.linkedin.com/in/alexander-herrera-millet-8127b81b9/'],
    image: '/curriculum.jpg',
    jobTitle: 'Desarrollador Web',
    worksFor: 'Freelance',
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '',
        addressLocality: 'Caninde',
        addressRegion: 'Ceará',
        postalCode: '62700000',
        addressCountry: {
          '@type': 'Country',
          name: 'Brasil',
          '@id': 'https://schema.org/Brasil'
        }
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
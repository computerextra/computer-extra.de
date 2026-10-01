const schema = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  "@id": "https://computer-extra.de/#business",
  name: "Computer Extra GmbH",
  url: "https://computer-extra.de/",
  telephone: "+49 561 601440",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Harleshäuser Str. 8",
    postalCode: "34130",
    addressLocality: "Kassel",
    addressRegion: "Hessen",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "18:00",
    },
  ],
} as const

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  )
}

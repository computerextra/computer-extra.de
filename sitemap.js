import { writeFile } from "fs/promises";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const urls = [
  {
    url: "/",
    changefreg: "daily",
    priority: 1,
  },
  {
    url: "/Leistungen",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Partner",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Team",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Jobs",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Fernwartung",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/AGB",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Auftragsverarbeitung",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Bankverbindung",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Datenschutz",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Impressum",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Kontakt",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Erfolg",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Fehler",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/OEM",
    changefreq: "daily",
    priority: 1,
  },
  {
    url: "/Termin",
    changefreq: "daily",
    priority: 1,
  }
];

async function generateSitemap() {
  const stream = new SitemapStream({
    hostname: "https://computer-extra.de",
  });
  return streamToPromise(Readable.from(urls).pipe(stream)).then((data) =>
    data.toString(),
  );
}

async function main() {
  await writeFile("./public/sitemap.xml", await generateSitemap());
}

void main();

import { writeFile } from "node:fs/promises"
import { isProduction } from "./build-context"

const outputFile = new URL("../dist/.htaccess", import.meta.url)

const betaHeaders = isProduction
  ? ""
  : `
<IfModule mod_headers.c>
  Header always set X-Robots-Tag "noindex, nofollow, noarchive"
</IfModule>
`
const content = `# Generated during build.
# Environment: ${isProduction ? "production" : "beta"}

ErrorDocument 404 /404.html

<IfModule mod_alias.c>
  RedirectMatch 301 ^/Leistungen/?$ /leistungen/
  RedirectMatch 301 ^/AGB/?$ /agb/
  RedirectMatch 301 ^/Auftragsdaten/?$ /auftragsdaten/
  RedirectMatch 301 ^/Datenschutz/?$ /datenschutz/
  RedirectMatch 301 ^/Erfolg/?$ /erfolg/
  RedirectMatch 301 ^/Fehler/?$ /fehler/
  RedirectMatch 301 ^/Fernwartung/?$ /fernwartung/
  RedirectMatch 301 ^/Impressum/?$ /impressum/
  RedirectMatch 301 ^/Jobs/?$ /jobs/
  RedirectMatch 301 ^/Kontakt/?$ /kontakt/
  RedirectMatch 301 ^/OEM/?$ /oem/
  RedirectMatch 301 ^/Partner/?$ /partner/
  RedirectMatch 301 ^/Team/?$ /team/
  RedirectMatch 301 ^/Termin/?$ /termin/

  RedirectMatch 301 ^/Phonedocs/?$ /phonedocs/
  RedirectMatch 301 ^/Phonedocs/Anfrage/?$ /phonedocs/anfrage/
  RedirectMatch 301 ^/Phonedocs/Preise/?$ /phonedocs/preise/
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/rss+xml
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(css|js|mjs|woff|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>

  <FilesMatch "\\.(ico|jpg|jpeg|gif|png|pdf|mp3|mp4|webp)$">
    Header set Cache-Control "public, max-age=31536000, no-transform"
  </FilesMatch>

  <FilesMatch "\\.(html|htm)$">
    Header set Cache-Control "no-cache, must-revalidate"
  </FilesMatch>

  <FilesMatch "\\.(xml|txt|xsl)$">
    Header set Cache-Control "public, max-age=3600, must-revalidate"
  </FilesMatch>
</IfModule>
${betaHeaders}
GeoIPEnable On
SetEnvIf GEOIP_CONTINENT_CODE AF BlockContinent
SetEnvIf GEOIP_CONTINENT_CODE AN BlockContinent
SetEnvIf GEOIP_CONTINENT_CODE AS BlockContinent
SetEnvIf GEOIP_CONTINENT_CODE NA BlockContinent
SetEnvIf GEOIP_CONTINENT_CODE OC BlockContinent
SetEnvIf GEOIP_CONTINENT_CODE SA BlockContinent
Deny from env=BlockContinent
`

await writeFile(outputFile, content.trimStart(), "utf8")

console.log(`Generated .htaccess for ${isProduction ? "production" : "beta"}`)

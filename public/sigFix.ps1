#Requires -RunAsAdministrator

$scriptName = "MS Outlook Roaming Signaturen Fix"
$author = "Computer Extra GmbH"
$description = "Dieses Skript schreibt Registrierungseinträge in Windows um Roaming Signaturen in MS Outlook zu aktivieren."

Write-Host "===============================" -ForegroundColor Cyan
Write-Host " Skript: $scriptName" -ForegroundColor Yellow
Write-Host " Autor : $author" -ForegroundColor Yellow
Write-Host " Info  : $description" -ForegroundColor Yellow
Write-Host "===============================" -ForegroundColor Cyan

Start-Sleep -Seconds 2

$istAdmin = ([Security.Principal.WindowsPrincipal] `
        [Security.Principal.WindowsIdentity]::GetCurrent() `
).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $istAdmin) {
    Write-Host "Dieses Skript muss als Administrator ausgeführt werden!" -ForegroundColor Red
    Write-Host "Drücken Sie Enter zum beenden."
    Read-Host
    exit
}

$path = "HKCU:\SOFTWARE\Microsoft\Office\16.0\Outlook\Setup"

if (-not (Test-Path $path)) {
    Write-Host "Registry Pfad wird angelegt."
    New-Item -Path $path
}

try {
    Get-ItemProperty -Path $path -ErrorAction Stop | Select-Object -ExpandProperty DisableRoamingSignatures -ErrorAction Stop | Out-Null
    Write-Host "Registry Patch ist bereits installiert."
}
catch {
    Write-Host "Registry Pfad wird angelegt."
    New-ItemProperty -path $path -name DisableRoamingSignatures -PropertyType DWORD -Value 1
}


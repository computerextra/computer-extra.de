#Requires -RunAsAdministrator

$scriptName = "Terminal Server Remote Desktop Fix"
$author = "Computer Extra GmbH"
$description = "Dieses Skript schreibt Registrierungseinträge in Windows um die aktuellen Sicherheitsmechanismen von Microsoft für Remote Desktop Verbindungen zu umgehen. Hierbei handelt es sich um einen temorären Fix."

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

$path = "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services\Client"

if (-not (Test-Path $path)) {
    Write-Host "Registry Pfad wird angelegt."
    New-Item -Path $path
}

try {
    Get-ItemProperty -Path $path -ErrorAction Stop | Select-Object -ExpandProperty RedirectionWarningDialogVersion -ErrorAction Stop | Out-Null
    Write-Host "Registry Patch ist bereits installiert."
}
catch {
    Write-Host "Registry Pfad wird angelegt."
    New-ItemProperty -path $path -name RedirectionWarningDialogVersion -PropertyType DWORD -Value 1
}


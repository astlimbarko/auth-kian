# Script de despliegue para Firebase Hosting
# Este script limpia, construye y despliega la aplicación

Write-Host "=== Limpiando caché y dependencias ===" -ForegroundColor Cyan
npm cache clean --force

# Limpiar directorio dist
if (Test-Path -Path ".\dist") {
    Remove-Item -Path ".\dist\*" -Recurse -Force
}

Write-Host "`n=== Instalando dependencias ===" -ForegroundColor Cyan
npm install

Write-Host "`n=== Construyendo la aplicación ===" -ForegroundColor Cyan
npm run build

# Verificar que la carpeta dist existe y tiene contenido
if (-not (Test-Path -Path ".\dist\index.html")) {
    Write-Host "Error: No se encontró el archivo index.html en la carpeta dist" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== Iniciando despliegue en Firebase ===" -ForegroundColor Cyan
firebase deploy --only hosting:login-kian

# Mostrar enlace al sitio
Write-Host "`n=== Despliegue completado ===" -ForegroundColor Green
Write-Host "Puedes acceder a tu sitio en: https://login-kian.web.app" -ForegroundColor Green

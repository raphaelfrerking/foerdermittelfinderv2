# 🎯 Fördermittelfinder V2

**KI-gestützter Antrags-Assistent für deutsche und EU-Fördermittel**

Ein professionelles SaaS-Tool, das KMUs bei der Beantragung von Fördermitteln unterstützt - von der Suche bis zum fertigen Antragsdokument.

---

## 🚀 Features

✅ **Intelligente Fördermittel-Suche** - Passende Programme finden  
✅ **Dynamischer Wizard** - Schritt-für-Schritt durch den Antrag  
✅ **KI-Textgenerierung** - Professionelle Antragstexte (OpenAI GPT-4)  
✅ **Automatische Berechnungen** - CO₂-Einsparungen, Förderquoten, etc.  
✅ **Multi-Format-Export** - PDF, DOCX (bearbeitbar), Excel  
✅ **Smart Copy-Paste** - Feld-für-Feld Ausfüllhilfe für Portale  
✅ **User Authentication** - Sicherer Login mit Clerk  
✅ **Zahlungsintegration** - Stripe (Freemium + Pay-as-you-go + Pro)  
✅ **DSGVO-konform** - EU-Hosting, Datenschutz-ready  

---

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Datenbank:** Supabase (PostgreSQL)
- **Auth:** Clerk
- **Zahlungen:** Stripe
- **KI:** OpenAI GPT-4
- **Exports:** 
  - PDF: `jsPDF` + `html2canvas`
  - DOCX: `docx` library
  - Excel: `exceljs`
- **Deployment:** Vercel (EU-Region)

---

## 🗂️ Projekt-Struktur

Wird automatisch erstellt bei Setup:
```
foerdermittelfinderv2/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React-Komponenten
│   ├── lib/              # Utilities & Configs
│   ├── schemas/          # Förderprogramm-Definitionen
│   └── types/            # TypeScript-Typen
├── public/               # Statische Dateien
├── docs/                 # Dokumentation
└── scripts/              # Setup-Skripte
```

---

## ⚙️ Installation (Schritt-für-Schritt)

### Voraussetzungen

✅ Node.js v18+ (du hast v22.19.0 ✓)  
✅ Git (du hast v2.50.1 ✓)  
✅ VS Code (installiert ✓)

### Schnellstart
```bash
# 1. Dependencies installieren
npm install

# 2. Umgebungsvariablen konfigurieren
npm run setup

# 3. Entwicklungsserver starten
npm run dev
```

Öffne: http://localhost:3000

---

## 🔑 Benötigte Accounts (alle kostenlos)

Du brauchst Accounts bei:

1. **Supabase** (Datenbank) - https://supabase.com
2. **Clerk** (Login) - https://clerk.com
3. **Stripe** (Zahlungen) - https://stripe.com
4. **OpenAI** (KI-Texte) - https://platform.openai.com

→ Keine Sorge: Der Setup-Assistent führt dich durch alles!

---

## 📚 Dokumentation

- [Komplette Installations-Anleitung](docs/INSTALLATION.md) ← Kommt als nächstes
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Schema-Erstellung](docs/SCHEMAS.md)
- [API-Referenz](docs/API.md)

---

## 🎨 Demo-Programme

Im MVP enthalten:

1. **BAFA Unternehmensberatung** (einfach)
2. **BAFA Energieeffizienz** (mit Berechnungen)
3. **KfW 295** (Bundesförderung Energie-/Ressourceneffizienz)
4. **KfW 067** (ERP-Gründerkredit)
5. **KfW 270/280** (Erneuerbare Energien)

---

## 💰 Geschäftsmodell

- **Free:** Suche + Vorschau (Watermark)
- **Pay-as-you-go:** €99-199 pro Antrag
- **Pro:** €299/Monat (unbegrenzt)
- **White-Label:** Ab €5.000/Jahr

---

## 🚀 Deployment
```bash
# Auf Vercel deployen (EU-Region)
vercel deploy --prod
```

Domain-Konfiguration für: **foedermittelfinder.de**

---

## 📄 Lizenz

Proprietär - Alle Rechte vorbehalten  
© 2024 Fördermittelfinder

---

## 🆘 Support

Bei Problemen:
1. Prüfe [Troubleshooting](docs/TROUBLESHOOTING.md)
2. Nutze Debug-Dashboard: http://localhost:3000/debug
3. Erstelle GitHub Issue

---

**Version:** 2.0.0-MVP  
**Status:** In Entwicklung  
**Letztes Update:** Dezember 2024
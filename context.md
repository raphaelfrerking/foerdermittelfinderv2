# 🎯 Fördermittelfinder - Projekt-Kontext

**Erstellt:** 27. Dezember 2024  
**Entwickler:** Raphael Frerking  
**GitHub:** https://github.com/raphaelfrerking/foerdermittelfinderv2

---

## 🚀 PROJEKT-VISION

### **Was ist Fördermittelfinder?**
Ein **KI-gestützter SaaS-Dienst**, der KMUs, Berater und Selbstständige bei der Beantragung von Fördermitteln unterstützt - von der Suche bis zum fertigen, exportfertigen Antragsdokument.

### **Kernproblem das wir lösen:**
- ❌ Fördermittel-Anträge dauern **3-5 Tage** Recherche + Formulierung
- ❌ Professionelle Berater kosten **€1.500+**
- ❌ Selbst ausfüllen hat **hohes Ablehnungsrisiko**
- ❌ Portale sind kompliziert und unübersichtlich

### **Unsere Lösung:**
- ✅ **15 Minuten** statt 3 Tage
- ✅ **€99-199** statt €1.500
- ✅ **KI schreibt professionell** (OpenAI GPT-4)
- ✅ **Sofort exportfertig** (PDF/DOCX/Excel)

---

## 💡 UNIQUE SELLING POINT (USP)

**🤖 KI-GESTÜTZTE ANTRAGSERSTELLUNG**

Das unterscheidet uns von Wettbewerbern:
1. **Nutzer beantwortet einfache Fragen** im Wizard
2. **KI generiert professionelle Antragstexte** (nicht nur Vorlagen!)
3. **Nutzer kann Texte überarbeiten** vor Export
4. **Exportiert fertige Dokumente** (PDF/DOCX/Excel)

**WICHTIG:** Dieser USP MUSS vor Launch funktionieren!

---

## 🎯 ZIELGRUPPE

### **Primär:**
- KMUs (5-250 Mitarbeiter) in Deutschland/Österreich/EU
- Freiberufler & Selbstständige
- Start-ups

### **Sekundär:**
- Unternehmensberater (White-Label-Potenzial)
- Steuerberater
- IHK/Wirtschaftsförderungen

---

## 📋 FÖRDERPROGRAMME (Scope)

### **NICHT nur EU!**
Wichtig: Branding sollte klar machen, dass wir abdecken:
- 🇪🇺 EU-Programme (Horizon, EFRE, ESF, etc.)
- 🇩🇪 Deutschland (BAFA, KfW, Bundesländer)
- 🇦🇹 Österreich (AWS, FFG, etc.)
- Andere EU-Länder

### **MVP-Programme (Start mit 2-3):**
1. **BAFA Unternehmensberatung** (einfach, viele Nutzer)
2. **BAFA Energieeffizienz** (komplex, CO₂-Berechnungen)
3. **KfW 295** (Bundesförderung Energie-/Ressourceneffizienz)

### **Später erweitern:**
- KfW 067 (ERP-Gründerkredit)
- KfW 270/280 (Erneuerbare Energien)
- BAFA Innovation
- EU Horizon Europe
- Landesförderprogramme

---

## 💰 GESCHÄFTSMODELL

### **4 Pakete:**

**1. FREE (€0)**
- Förderprogramme suchen
- Vorschau auf Wizard
- Export mit Watermark
- Max. 1 Projekt

**2. PAY-AS-YOU-GO (€99-199 pro Antrag)**
- Vollständiger Zugriff auf 1 Antrag
- KI-Textgenerierung
- Alle Exporte (PDF/DOCX/Excel)
- Sofortiger Download
- **Preise anpassbar** (Start niedrig, später erhöhen)

**3. PRO (€299-599/Monat)**
- Unbegrenzte Projekte
- Alle Programme
- Priority Support (24h)
- Archivierung
- Multi-User (später)

**4. WHITE-LABEL (€5.000-20.000/Jahr)**
- Eigenes Branding (Logo, Farben, Domain)
- Reporting & Analytics
- AVV-Vertrag (DSGVO)
- Dedizierter Support

---

## 🛠️ TECH-STACK

### **Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (EU-Farben: #003399 Blau, #FFCC00 Gelb)
- React

### **Backend & Services:**
- Supabase (PostgreSQL, EU-Server)
- Clerk (Authentication)
- Stripe (Payments, automatic tax)
- OpenAI GPT-4 (KI-Texte)

### **Export:**
- jsPDF (PDF-Generierung)
- docx library (DOCX-Erstellung)
- exceljs (Excel-Berechnungen)

### **Deployment:**
- Vercel (Start, EU-Region)
- Azure (später bei Skalierung)
- Domain: foedermittelfinder.de

---

## 🎨 DESIGN & BRANDING

### **Farben:**
- **Primär:** #003399 (EU-Blau) - Vertrauen, Stabilität
- **Akzent:** #FFCC00 (EU-Gelb) - Optimismus, Handlung
- **Neutral:** Grautöne für Text/Hintergründe

### **Logo:**
- Aktuell: 💰 Emoji-Platzhalter
- Später: Professionelles Icon/Logo-Design

### **Tonalität:**
- Professionell aber zugänglich
- Klar und direkt
- Keine Bürokratie-Sprache
- "Du" statt "Sie" (zuerst, später A/B-testen)

---

## 🚀 LAUNCH-STRATEGIE

### **Zeitplan:**
- **Woche 1-2:** Frontend + KI-Integration
- **Woche 3:** Export + Payment
- **Woche 4:** Polish + Deployment
- **= 3-4 Wochen bis Beta-Launch**

### **Must-Have Features (vor Launch):**
- ✅ KI-Wizard (2-3 Programme)
- ✅ KI-Textgenerierung (erkennbar besser als ChatGPT)
- ✅ Editing-Interface
- ✅ PDF/DOCX-Export
- ✅ Stripe Payment (PAYG)
- ✅ Landing Page mit Demo

### **Nice-to-Have (Phase 2):**
- Browser-Extension (Auto-Fill in Portale)
- 10+ Programme
- Blog/SEO
- White-Label-System

---

## ⚖️ RECHTLICHES & COMPLIANCE

### **DSGVO:**
- EU-Hosting (Supabase EU, Vercel EU)
- Cookie-Banner (minimal)
- Datenschutzerklärung (Platzhalter, später Anwalt)
- Löschfristen automatisiert

### **Haftung:**
- **KEIN Auto-Submit** zu Portalen (Nutzer reicht selbst ein)
- Disclaimer: "KI-generierte Texte müssen geprüft werden"
- Nutzer ist verantwortlich für finale Einreichung

### **Steuern:**
- Entwickler wohnt in Sierra Leone
- Stripe `automatic_tax` für EU-MwSt.
- Später evtl. deutsche UG gründen

---

## 👤 ENTWICKLER-PROFIL

**Raphael Frerking:**
- ❌ KEIN Software-Developer
- ✅ Braucht Schritt-für-Schritt-Anleitung
- ✅ Windows 11, PowerShell
- ✅ Node.js v22.19.0, Git v2.50.1
- ✅ VS Code installiert
- ✅ GitHub: raphaelfrerking

**Wichtig für Claude:**
- Einen Schritt nach dem anderen
- Screenshots nach jedem Schritt validieren
- Kompletten Code geben (nicht Zeilen ändern)
- KEINE Befehle in Code-Blöcken
- Präzise Anweisungen ("Klicke ans Ende von Zeile X")

---

## 📂 WICHTIGE DATEIEN

1. **PROGRESS.md** - Aktueller Entwicklungsstand
2. **CONTEXT.md** - Dieses Dokument (Vision & Kontext)
3. **README.md** - Projekt-Übersicht
4. **docs/INSTALLATION.md** - Setup-Anleitung

---

## 🎯 ERFOLGS-METRIKEN (für später)

### **Launch-Ziel:**
- 10 Beta-Tester (Monat 1)
- 50 zahlende Kunden (Monat 3)
- €5.000 MRR (Monat 6)

### **Langfristig:**
- 500+ aktive Kunden
- €50.000+ MRR
- 20+ Förderprogramme
- White-Label-Kunden

---

**Stand:** Tag 1 abgeschlossen, bereit für Tag 2  
**Nächstes Ziel:** KI-Integration + Wizard-System
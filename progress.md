# 🚀 Fördermittelfinder V2 - Entwicklungsstand

**Letztes Update:** 28. Dezember 2024  
**Status:** MVP in Entwicklung (Tag 1 abgeschlossen)  
**Entwickler:** Raphael Frerking (Nicht-Developer, braucht Schritt-für-Schritt-Anleitung)

---

## ✅ FERTIGGESTELLT

### **Basis-Setup (Tag 1)**
- ✅ GitHub Repository: `raphaelfrerking/foerdermittelfinderv2`
- ✅ Node.js v22.19.0 installiert
- ✅ Git v2.50.1 installiert
- ✅ VS Code installiert und konfiguriert
- ✅ npm install erfolgreich (384 packages)
- ✅ Next.js 14.2.15 läuft lokal
- ✅ Tailwind CSS konfiguriert
- ✅ TypeScript konfiguriert

### **Projektstruktur**
```
foerdermittelfinderv2/
├── docs/
│   └── INSTALLATION.md ✅
├── public/ (leer)
├── scripts/ (leer)
├── src/
│   ├── app/
│   │   ├── globals.css ✅
│   │   ├── layout.tsx ✅ (Header + Footer)
│   │   └── page.tsx ✅ (Startseite mit Buttons)
│   ├── components/
│   │   └── Button.tsx ✅ (Wiederverwendbare Komponente)
│   ├── lib/ (leer)
│   ├── schemas/ (leer)
│   └── types/ (leer)
├── .gitignore ✅
├── next.config.js ✅
├── package.json ✅ (Minimale Pakete)
├── postcss.config.js ✅
├── readme.md ✅
├── tailwind.config.ts ✅ (EU-Farben: Blau #003399, Gelb #FFCC00)
└── tsconfig.json ✅
```

### **Design & Branding**
- ✅ Farbschema: EU-Blau (#003399) + Gelb (#FFCC00)
- ✅ Logo: 💰 Platzhalter (später echtes Logo)
- ✅ Header: Navigation (Start, Suche, Dashboard)
- ✅ Footer: Copyright-Hinweis
- ✅ Responsive Design (Tailwind)

### **Komponenten**
- ✅ `Button.tsx` - 3 Varianten (primary, secondary, outline), 3 Größen

---

## 🎯 STRATEGISCHE ENTSCHEIDUNGEN

### **Produkt-Fokus**
- ❌ NICHT nur EU - auch Deutschland, Österreich, andere EU-Länder
- ✅ USP: **KI-gestützte Textgenerierung** (muss vor Launch fertig sein!)
- ✅ Zielgruppe: KMUs, Berater, Selbstständige

### **Launch-Strategie**
- ✅ MVP-Zeitplan: **3-4 Wochen** bis Beta-Launch
- ✅ KI-Integration: **MUSS vor Launch** fertig sein (OpenAI GPT-4)
- ✅ Mindest-Features für Launch:
  - KI-Wizard (2-3 Förderprogramme)
  - PDF/DOCX-Export (mit KI-Texten)
  - Login (Clerk)
  - Payment (Stripe PAYG: €99-199)

### **Tech-Stack Entscheidungen**
- ✅ Hosting: **Vercel** (Start), später Azure bei Skalierung
- ✅ Datenbank: **Supabase** (PostgreSQL, EU-Server)
- ✅ Auth: **Clerk** (kostenlos bis 10k User)
- ✅ Payment: **Stripe** (automatic tax)
- ✅ KI: **OpenAI GPT-4** (€0.10-0.50 pro Antrag)
- ✅ Browser-Extension: **Phase 2** (nicht im MVP)

### **Preismodell**
- Free: Suche + Vorschau (Watermark)
- PAYG: €99-199 pro Antrag (anpassbar)
- Pro: €299/Monat (unbegrenzt)
- White-Label: Später (€5k+/Jahr)

---

## 📋 NÄCHSTE SCHRITTE (Priorität)

### **Sofort (nächste Session):**
1. **Card-Komponente** erstellen (für Programm-Übersicht)
2. **Input-Komponente** erstellen (für Formulare)
3. **Suche-Seite** anlegen (`/suche`)

### **Diese Woche (Tag 2-3):**
4. **Schema-System** aufbauen
   - JSON-Schema für BAFA Unternehmensberatung
   - Schema-Parser erstellen
5. **Wizard-Komponente** bauen
   - Dynamische Felder basierend auf Schema
   - Fortschrittsbalken
   - Validierung

### **Woche 2:**
6. **OpenAI Integration**
   - API-Key Setup
   - Prompt-Engineering
   - KI-Textgenerierung testen
7. **Export-System**
   - PDF-Generierung (jsPDF)
   - DOCX-Export (docx library)
   - Excel-Berechnungen (exceljs)

### **Woche 3-4:**
8. Supabase + Clerk einrichten
9. Stripe Payment
10. Deployment auf Vercel
11. Domain verbinden (foedermittelfinder.de)

---

## ⚠️ BEKANNTE PROBLEME & LÖSUNGEN

### **Problem 1: npm install Fehler**
**Symptom:** `ETARGET` Fehler bei Paket-Installation  
**Lösung:** Minimale `package.json` verwenden (nur Next.js, React, TypeScript, Tailwind)  
**Status:** ✅ Gelöst

### **Problem 2: Import/Export Fehler**
**Symptom:** `'import' cannot be used outside of module code`  
**Lösung:** Import MUSS **vor** `export default function` stehen  
**Status:** ✅ Gelöst

### **Problem 3: Dateien vs. Ordner**
**Symptom:** Ordner wurden als Dateien erstellt  
**Lösung:** In VS Code: "New **Folder**" statt "New File" nutzen  
**Status:** ✅ Gelöst

---

## 🔧 ENTWICKLUNGS-WORKFLOW

### **Projekt starten:**
```bash
cd C:\Users\Raphael\foerdermittelfinderv2
npm run dev
```
Browser: http://localhost:3000

### **Änderungen speichern (Git):**
```bash
git add .
git commit -m "Beschreibung"
git push
```

### **Server stoppen:**
Terminal: `Strg + C`

---

## 📝 WICHTIGE HINWEISE FÜR CLAUDE

### **Kommunikations-Regeln (aus Fehlern gelernt!):**
1. ✅ **NUR reiner Code** in Code-Blöcke - KEINE Anweisungen!
2. ✅ **Screenshots nach jedem Schritt** verlangen und prüfen
3. ✅ **Präzise Anweisungen:** "Klicke ans Ende von Zeile X" statt "füge hinzu"
4. ✅ **Kompletten Code geben** statt einzelne Zeilen ändern (fehleranfälliger)
5. ✅ **Sich merken** was bereits erstellt wurde
6. ✅ **Paket-Versionen vorher prüfen** (nicht blind kopieren)

### **Raphael ist Nicht-Developer:**
- ❌ Keine Befehle in Kopier-Blöcken!
- ❌ Nicht mehrere Schritte gleichzeitig!
- ✅ Einen Schritt → Screenshot → Validierung → Nächster Schritt
- ✅ Immer erklären WARUM etwas gemacht wird

---

## 🎯 ZIEL-FEATURES FÜR MVP

### **Must-Have (vor Launch):**
- [ ] KI-Wizard (3 Programme)
- [ ] KI-Textgenerierung (OpenAI)
- [ ] PDF/DOCX-Export
- [ ] Login (Clerk)
- [ ] Payment (Stripe)
- [ ] Dashboard (Projekt-Übersicht)

### **Nice-to-Have (nach Launch):**
- [ ] Browser-Extension
- [ ] 10+ Programme
- [ ] Blog-System
- [ ] White-Label
- [ ] Analytics

---

## 📊 FÖRDERPROGRAMME (geplant)

### **MVP (2-3 Programme):**
1. BAFA Unternehmensberatung (einfach)
2. BAFA Energieeffizienz (mit Berechnungen)
3. KfW 295 (Bundesförderung Energie)

### **Phase 2 (erweitern):**
4. KfW 067 (ERP-Gründerkredit)
5. KfW 270/280 (Erneuerbare Energien)
6. BAFA Innovation
7. Und weitere...

---

## 💾 WICHTIGE DATEIEN ZUM SICHERN

Falls Chat neu startet:
1. Diese Datei: `PROGRESS.md`
2. `package.json` (Paket-Versionen)
3. `src/app/page.tsx` (Startseite)
4. `src/components/Button.tsx` (Komponenten-Beispiel)

---

## 🆘 TROUBLESHOOTING

**VS Code Terminal öffnen:** `Strg + Ö` oder `View → Terminal`  
**Server läuft nicht:** `npm run dev` im Terminal  
**Änderungen nicht sichtbar:** Browser mit `F5` aktualisieren  
**Git-Fehler:** Screenshot machen und Claude zeigen  

---

**Letzter erfolgreicher Stand:**  
✅ Startseite mit Buttons funktioniert  
✅ Projekt auf GitHub gesichert  
✅ Bereit für nächste Komponenten  

**Nächster Schritt:** Card-Komponente + Input-Komponente erstellen
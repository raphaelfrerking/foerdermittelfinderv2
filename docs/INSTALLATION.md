# 📦 Installation - Schritt für Schritt

**Vollständige Anleitung für Nicht-Entwickler**

Diese Anleitung führt dich durch die komplette Installation - **ohne Vorkenntnisse nötig**.

---

## ✅ Voraussetzungen (bereits erledigt!)

- ✅ Node.js v22.19.0 installiert
- ✅ Git v2.50.1 installiert
- ✅ VS Code installiert
- ✅ Projekt-Ordner erstellt

---

## 🚀 Installation in 6 Schritten

### **SCHRITT 1: Terminal in VS Code öffnen**

1. **In VS Code** (mit deinem Projekt geöffnet):

2. Klicke oben im Menü auf **"Terminal"**

3. Klicke auf **"New Terminal"** (oder "Neues Terminal")

4. Unten öffnet sich ein **blaues Fenster** (PowerShell)

5. Du solltest sehen:
```
   PS C:\Users\Raphael\foerdermittelfinderv2>
```

---

### **SCHRITT 2: Dependencies installieren**

**Was passiert:** Alle Pakete aus `package.json` werden heruntergeladen.

**Im Terminal tippe:**
```bash
npm install
```

**Drücke Enter.**

---

**Was du siehst:**
```
npm WARN deprecated ...
added 324 packages in 45s
```

⚠️ **WICHTIG:** 
- Das dauert **2-5 Minuten**
- Du siehst viele Zeilen durchlaufen
- Warnungen (WARN) sind **normal** - ignorieren!
- Nur **Errors (ERR!)** sind Probleme

---

**✅ FERTIG wenn du siehst:**
```
added XXX packages in XXs
```

**Dann antwortest du hier mit:** "npm install fertig"

---

### **SCHRITT 3: Umgebungsvariablen vorbereiten**

**Im Terminal tippe:**
```bash
copy .env.example .env.local
```

**WICHTIG für Windows:** Falls das nicht funktioniert, tippe stattdessen:
```bash
Copy-Item .env.example .env.local
```

---

**✅ FERTIG wenn:** Keine Fehlermeldung kommt

---

### **SCHRITT 4: Accounts erstellen (noch nicht jetzt!)**

Du brauchst später Accounts bei:

1. **Supabase** → Datenbank (kostenlos)
2. **Clerk** → Login-System (kostenlos bis 10.000 User)
3. **Stripe** → Zahlungen (kostenlos, nur bei Verkauf Gebühr)
4. **OpenAI** → KI-Texte (€5-20/Monat Kosten)

**→ Das machen wir später gemeinsam!**

---

### **SCHRITT 5: Entwicklungsserver testen**

**Im Terminal tippe:**
```bash
npm run dev
```

**Was passiert:**
```
  ▲ Next.js 14.2.21
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.3s
```

---

**✅ WENN DAS ERSCHEINT:**

1. **Halte Strg gedrückt**

2. **Klicke auf** `http://localhost:3000`

3. Dein **Browser öffnet sich**

4. Du siehst (wahrscheinlich): **"404 | This page could not be found"**

**→ DAS IST NORMAL!** Wir haben noch keine Seiten erstellt.

---

**WICHTIG:** Um den Server zu **stoppen**:
- Klicke ins Terminal
- Drücke **Strg + C**
- Bestätige mit **J** (für Ja) falls gefragt

---

### **SCHRITT 6: Git-Repository initialisieren**

**Im Terminal (Server sollte gestoppt sein!):**
```bash
git init
git add .
git commit -m "Initial commit - Projekt-Grundstruktur"
```

---

**Was passiert:**
```
Initialized empty Git repository...
[main (root-commit) abc1234] Initial commit
 10 files changed, 500 insertions(+)
```

---

**✅ FERTIG!** 

Du hast jetzt:
- ✅ Alle Pakete installiert
- ✅ Git initialisiert
- ✅ Projekt getestet

---

## 🔧 Häufige Probleme & Lösungen

### **Problem 1: "npm: command not found"**

**Lösung:**
1. Schließe VS Code komplett
2. Öffne VS Code neu
3. Versuche nochmal

Wenn immer noch Fehler:
- Node.js neu installieren (siehe README.md)

---

### **Problem 2: "EACCES: permission denied"**

**Lösung (Windows):**
```bash
npm cache clean --force
npm install
```

---

### **Problem 3: Port 3000 bereits belegt**

**Lösung:**
```bash
npm run dev -- -p 3001
```
(Startet auf Port 3001 statt 3000)

---

### **Problem 4: Viele rote Fehler nach npm install**

**Lösung:**
1. Lösche Ordner `node_modules`:
```bash
   Remove-Item -Recurse -Force node_modules
```

2. Installiere neu:
```bash
   npm install
```

---

## 📞 Hilfe bekommen

**Bei Problemen:**

1. **Screenshot vom Fehler machen**
2. **Komplette Fehlermeldung kopieren**
3. **Hier im Chat posten**

Ich helfe sofort! 🚀

---

## ✅ Nächste Schritte

Nach erfolgreicher Installation:

1. **Accounts einrichten** → `docs/ACCOUNTS.md` (erstellen wir gleich!)
2. **Erste Seite erstellen** → `docs/FIRST_PAGE.md`
3. **Schemas hinzufügen** → `docs/SCHEMAS.md`

---

**Letzte Aktualisierung:** Dezember 2024  
**Version:** 2.0.0
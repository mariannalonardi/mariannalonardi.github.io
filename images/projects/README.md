# 📁 Cartella Immagini dei Progetti

Questa cartella contiene tutte le immagini dei tuoi progetti di portfolio.

## 📂 Struttura

```
/public/images/projects/
├── moonymate/          # Immagini progetto MoonyMate
├── bob/                # Immagini progetto bob
└── other/              # Altre immagini progetti
```

## 🎯 Come usare questa cartella

### 1. Carica le tue immagini
Trascina le tue foto nelle cartelle corrispondenti:
- `/public/images/projects/moonymate/` → foto di MoonyMate
- `/public/images/projects/bob/` → foto di bob
- `/public/images/projects/other/` → altre foto

### 2. Nomina i file
Usa nomi semplici e descrittivi:
```
moonymate-1.jpg
moonymate-2.jpg
moonymate-prototipo.jpg
bob-interface.png
bob-character.png
```

### 3. Nel codice usa questi percorsi
Nel file `/src/app/pages/ProjectDetail.tsx`, sostituisci gli URL con:

```javascript
gallery: [
  "/images/projects/moonymate/moonymate-1.jpg",
  "/images/projects/moonymate/moonymate-2.jpg",
  "/images/projects/moonymate/moonymate-3.jpg",
],
```

## ✅ Formati supportati
- `.jpg` / `.jpeg` (migliore per foto)
- `.png` (migliore per screenshot con trasparenza)
- `.webp` (ottimizzato per web)

## 💡 Suggerimenti
- Ottimizza le immagini prima di caricarle (max 2-3 MB)
- Usa nomi senza spazi (usa `-` o `_`)
- Mantieni la stessa dimensione per tutte le foto di un progetto

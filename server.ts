import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

// API de contact d'affaires anonyme ou de messages (conservation simple locale en mémoire si nécessaire, ou simple retour OK)
app.post("/api/contact", (req, res) => {
  const { name, email, company, message, targetDeposit } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: "L'adresse email et le message sont obligatoires." });
  }
  // Ici, nous simulons l'enregistrement du message de contact de manière élégante et professionnelle
  console.log("Nouveau contact d'investisseur reçu sur SCI Mining Gold :", { name, email, company, message, targetDeposit });
  res.json({ success: true, message: "Votre demande de rendez-vous d'affaires a été transmise avec succès aux administrateurs de SCI Mining." });
});

import fs from "fs";

// Configure Vite middleware en développement, ou sert les fichiers statiques du dossier dist
async function startServer() {
  const distPath = path.join(process.cwd(), "dist");
  const hasDist = fs.existsSync(path.join(distPath, "index.html"));
  
  if (process.env.NODE_ENV !== "production" || !hasDist) {
    console.log("Démarrage du serveur avec le middleware Vite...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Sert l'application statique pré-construite depuis le dossier dist...");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

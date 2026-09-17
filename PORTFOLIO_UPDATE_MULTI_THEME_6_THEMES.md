# 🎨 Ajout d’un système multi‑thèmes (6+ thèmes) — Instructions pour l’IA

Ces instructions doivent être appliquées directement au portfolio existant.  
Ne pas régénérer le portfolio.  
Ajouter uniquement un système de **sélection de thème multi‑thèmes**, compatible déploiement, basé sur cookies.

---

# 1. Créer un composable global pour gérer les thèmes
Créer :

`composables/useTheme.js`

Ce composable doit :

- stocker le thème dans un **cookie** (pas localStorage)
- appliquer le thème via une classe sur `<html>`
- exposer la liste des thèmes disponibles
- permettre de changer de thème

2. Ajouter les classes Tailwind pour chaque thème

3. Ajouter un Theme Switcher dans la Navbar

4. Appliquer le thème dans app.vue

5. Ajouter les classes CSS pour chaque thème

Voici les thèmes : 

Light

Dark

Sensara (rose poudré / luxe)

DevOps (bleu / gris / néon)

Minimal (blanc / pastel)

Orange (énergie / moderne)

Green (nature / tech)

6. Adapter les sections principales
Chaque section doit utiliser les variables CSS 

Adapter :

Hero

About

Projects

Contact

Footer

Navbar

7. Ne pas modifier :
Le contenu textuel

Les animations 3D

Les images de fond des cards

Le formulaire de contact

La structure des pages
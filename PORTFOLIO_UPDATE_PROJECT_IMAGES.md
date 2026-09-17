# 🖼️ Correction des images de fond des cards de projets — Instructions pour l’IA

Ces instructions doivent être appliquées directement au portfolio déjà existant.  
Ne pas régénérer le portfolio.  
Corriger uniquement l’affichage des images de fond dans les cards de projets.

---

## 1. Vérifier l’emplacement des images
Les images doivent être présentes dans :

/assets/images/projects/


Si les images n’existent pas, les créer ou en ajouter (même des placeholders).

---

## 2. Modifier le composant ProjectCard.vue
Le composant doit utiliser une **image de fond** au lieu d’un simple bloc blanc.

Mettre à jour `components/ProjectCard.vue` pour :

- accepter une propriété `image`
- appliquer l’image en background
- ajouter un overlay sombre pour lisibilité
- supprimer le lien “Voir projet”

3. Mettre à jour la page projects.vue
Chaque card doit maintenant fournir une image 

4. Supprimer tout lien “Voir projet”
Si un lien existe encore dans ProjectCard.vue ou projects.vue, le supprimer.

5. Vérifier le chemin Nuxt
Nuxt doit charger les images via :

/assets/images/projects/nom-image.jpg


Si les images ne s’affichent pas :

vérifier que les fichiers sont bien dans assets/images/projects/

vérifier l’orthographe exacte des noms

vérifier l’extension (.jpg, .png, .webp)

6. Redémarrer le serveur
Après modifications :

npm run dev
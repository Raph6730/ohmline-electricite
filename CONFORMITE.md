# Mise en conformité légale — OhmLine Électricité (23/10/2026)

Cas vérifié dans le code : site vitrine d'artisan électricien (3 pages), Thibaut, entrepreneur individuel (SIRET 993 629 740 00016), clients particuliers et professionnels. Rien n'est vendu en ligne. Formulaire de devis qui prépare un message envoyé par le visiteur lui-même (WhatsApp, SMS ou e-mail). Hébergement actuel : GitHub Pages. Très petite entreprise.

Ce document n'est pas un avis juridique.

## Fichiers créés ou modifiés

| Fichier | Changement |
|---|---|
| `mentions-legales.html` | Nouvelle page : éditeur, hébergeur, créateur, propriété intellectuelle, avis, médiateur |
| `confidentialite.html` | Nouvelle page : traitements réels du site, destinataires, transferts hors UE, stockage, droits |
| `index.html` | Polices Google retirées, carte chargée seulement au clic, case « J'accepte » remplacée par une information, source des avis, liens légaux, Open Graph, données structurées, noindex provisoire |
| `realisations.html`, `elax.html` | Polices Google retirées, liens légaux, Open Graph, noindex provisoire, accessibilité |
| `style.css` | Polices hébergées sur le site, styles des pages légales, bleu Facebook plus foncé (contraste) |
| `fonts/` | Nouveau : Archivo, Public Sans, IBM Plex Mono + licences SIL OFL |
| `llms.txt`, `robots.txt`, `sitemap.xml` | Nouveaux : fichiers pour moteurs de recherche et assistants IA |

## Point par point

1. **Mentions légales — s'applique (il n'y en avait pas).** Page créée, lien dans le pied de page des 5 pages.
2. **Confidentialité — s'applique (il n'y en avait pas).** Traitements identifiés : demande de devis (préparée sur l'appareil du visiteur, envoyée par lui), appels et e-mails, journaux de l'hébergeur, carte au clic, préférence de thème.
3. **Cookies — pas de bandeau.** Les polices Google, chargées à chaque visite, transmettaient l'adresse IP à Google sans consentement : elles sont maintenant hébergées sur le site. La carte OpenStreetMap se chargeait toute seule en défilant : elle ne se charge plus qu'au clic. Il ne reste aucune requête vers un autre site à l'ouverture d'une page (vérifié dans le navigateur).
4. **CGV — non applicable sur le site** (pas de vente en ligne). Voir le point 13 pour les devis.
5. **CGU — non applicable.**
6. **Médiateur — s'applique.** Obligatoire dès qu'on travaille pour des particuliers, même sans vente en ligne. Emplacement `[MÉDIATEUR À CHOISIR]` dans les mentions légales et le pied de page.
7. **Formulaire de devis.** La case « J'accepte que mes informations soient utilisées… » était obligatoire : le consentement n'est pas la bonne base pour répondre à une demande de devis, et une case obligatoire fausse ce consentement. Remplacée par une information claire avec lien vers la confidentialité. Champs obligatoires signalés. Aucun champ superflu.
8. **Services tiers :**

| Service | Avant | Après | Verdict |
|---|---|---|---|
| Google Fonts | Chargé à chaque page (IP envoyée à Google) | Polices hébergées sur le site | Remplacé |
| OpenStreetMap | Chargé automatiquement au défilement | Au clic, avec avertissement | Conforme |
| WhatsApp / SMS / e-mail | Choix du visiteur | Déclarés | Conforme |
| Web3Forms | Prévu, inactif (clé vide) | Avertissement dans le code | À déclarer si activé |
| Facebook, Google Maps, Elax | Simples liens | — | Conforme |

9. **Accessibilité (recommandée).** Corrigé : nom du bouton Menu, contraste du bouton Facebook, nom des boutons photo (texte visible inclus), titre manquant sur Réalisations, barre de contact mobile dans une zone nommée, tableaux défilables au clavier. Contrôle automatique : plus aucune erreur sur les 5 pages, en clair et en sombre.
10. **Agents IA.** llms.txt, robots.txt, sitemap.xml, Open Graph, données structurées « Electrician » (zone, téléphone, disponibilité 24h/24). Les adresses utilisent pour l'instant raph6730.github.io : **à remplacer par le nom de domaine définitif**, et ajouter alors une balise canonique.
11. **Contenu :**
    - Avis Google : source et absence de vérification indiquées. Vérifier que la note 5,0 et les 6 avis sont toujours exacts.
    - « Dépannage 24h/24 – 7j/7, week-ends et jours fériés » : promesse forte, répétée partout. À garder seulement si Thibaut répond vraiment à toute heure ; sinon pratique commerciale trompeuse.
    - « Installations conformes NF C 15-100 » : acceptable si c'est la pratique réelle.
    - Logo et chiffres Elax : attribués à Elax ; confirmer que le partenariat autorise leur usage.
    - Photos : prises par Thibaut (à confirmer).
12. **Coordonnées.** Cohérentes entre pied de page, mentions légales et accueil. Il manque l'adresse complète et le nom de famille (obligatoires).
13. **Autres risques :**
    - **Bornes de recharge (IRVE)** : la loi impose une qualification IRVE pour installer une borne de plus de 3,7 kW. Si Thibaut ne l'a pas, retirer « Bornes de recharge (IRVE) » du site.
    - **Assurance décennale** : obligatoire pour un électricien et à indiquer sur chaque devis et facture (assureur, couverture géographique). Pas obligatoire sur le site, mais à vérifier sur ses documents.
    - **Messagerie Gmail** : les demandes arrivent sur un compte Gmail personnel. Acceptable, mais une adresse sur le nom de domaine serait plus professionnelle.
    - **Noindex provisoire** : ajouté tant que le site n'est pas validé par Thibaut. À retirer à la mise en ligne.

## À faire par un humain

- [ ] Thibaut : nom de famille, adresse complète, régime (micro-entreprise ?), TVA (franchise ou numéro), artisan au RNE.
- [ ] **Médiateur de la consommation** : en choisir un dans la liste officielle (economie.gouv.fr), y adhérer, remplacer `[MÉDIATEUR À CHOISIR]` (mentions légales + pied de page de chaque page).
- [ ] Hébergeur définitif et nom de domaine : mettre à jour mentions légales, llms.txt, robots.txt, sitemap.xml, Open Graph ; ajouter la balise canonique ; vérifier le téléphone de GitHub si le site reste sur GitHub Pages.
- [ ] Confirmer : dépannage réellement 24h/24 – 7j/7, qualification IRVE, usage du logo Elax, photos prises par Thibaut.
- [ ] Si Web3Forms est activé : l'ajouter à la politique de confidentialité.
- [ ] Retirer les lignes `noindex` à la mise en ligne.

## Jugé non applicable (contredis-moi si besoin)

- **Bandeau cookies** : plus aucun traceur non nécessaire.
- **CGV en ligne** : rien n'est vendu sur le site ; les conditions figurent sur les devis.
- **CGU** : pas de compte ni de contenu publié par les visiteurs.
- **Déclaration d'accessibilité** : très petite entreprise.

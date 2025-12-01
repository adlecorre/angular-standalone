# 🟢 Mon Application Angular

Cette application contient trois fonctionnalités distinctes développées en **Angular 17+** avec **composants standalone**, **Bootstrap 5** et **FontAwesome** :  

1. **Calculatrice** – un simple calcul interactif (à compléter selon ton implémentation).  
2. **Primeur** – gestion de produits avec ajout dynamique et calcul du total.  
3. **Clavier** – clavier interactif avec textarea et boutons alphabétiques.

---

## 🔹 Fonctionnalités

### 1. Calculatrice
- Entrée de nombres et opérations de base.
- Affichage du résultat en temps réel.

### 2. Primeur
- Liste initiale de produits (`banane`, `fraise`, `poivron`, etc.).
- Formulaire pour ajouter de nouveaux produits (nom, prix, quantité).  
- Achat de produits via boutons, mise à jour du stock et du total.  
- Interface Bootstrap avec cartes et badges pour chaque produit.

### 3. Clavier
- Affiche un textarea et 26 boutons pour les lettres a-z.  
- Chaque bouton ajoute la lettre correspondante dans le textarea.  
- Composants parent/enfant (`ClavierComponent` et `ToucheComponent`) avec `@Input` et `@Output`.

---

## 🏗️ Structure du projet

src/app/  
  calcul/                  # Composant Calculatrice  
  primeur/                 # Composant Primeur  
    primeur.component.ts  
    primeur.component.html  
    produit.component.ts  
  clavier/                 # Composant Clavier  
    clavier.component.ts  
    touche.component.ts  
  app.routes.ts            # Routing des composants  
  main.ts                  # Bootstrap standalone avec provideRouter  

---

## ⚡ Installation & Lancement

1. Cloner le dépôt :  
   `git clone https://github.com/<votre-utilisateur>/<nom-du-repo>.git`  
   `cd <nom-du-repo>`

2. Installer les dépendances :  
   `npm install`

3. Lancer l’application :  
   `ng serve`

4. Accéder aux composants dans le navigateur :  
- Calculatrice → `http://localhost:4200/calcul`  
- Primeur → `http://localhost:4200/primeur`  
- Clavier → `http://localhost:4200/clavier`

---

## 🎨 Technologies utilisées

- Angular 17+ (standalone components)  
- TypeScript  
- Bootstrap 5  
- FontAwesome  
- Angular Router pour navigation entre les composants  

---

## 🔹 Remarques

- Tous les composants enfants sont **standalone** et communiquent avec leur parent via `@Input` / `@Output`.  
- Le projet est conçu pour être responsive et lisible sur mobile et desktop.  
- Les données ne sont pas persistées : **le refresh de la page réinitialise tout**.

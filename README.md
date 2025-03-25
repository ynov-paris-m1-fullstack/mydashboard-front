Exercice : 
1. Créer un composant Notification 
    - Puisse être réutilisé pour des message d'erreur et de succès.
    - Utiliser ce composant pour le formulaire Login & register
2. Faire fonctionner le formulaire LOGIN= 
    - Controller (voir les commentaires)
    - Form 
3. Faire fonctionner le bouton LOGOUT : 
    - Retirer le token des cookies
    - Rediriger sur login
4. Créer une page profil qui affichage les informations de l'utilisateur
    - Possiblité de modifier les informations de l'utilisateurs (form + un controller + route)
    - Route + controller => getMe 
    - Route + controller => updateMe
5. Côté API : middleware pour vérifier le token entre la route et le controller.
6. Dans le middleware FRONT: utiliser une route de l'API qui va s'assurer que le token soit toujours valide 
    - Créer un  controller getMe /
    - GET 
    - Qui récupère le token dans le headers "Authorization" => renvoyer les informations d'un utilisateur

fetch(ENPOINT, {
    method: POST,
    body: BODY,
    headers: {
        content: "Application/json",
        authorization: Bearer + token
    }
})

Côté API : req.headers.authorization;

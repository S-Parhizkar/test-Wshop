LEVEL 1 :

Images: Il faut fournir une alternative textuelle nulle (alt="") lorsque le seul but d'une image est d'ajouter une décoration visuelle à la page, plutôt que de transmettre des informations importantes pour comprendre la page.

ID: Un ID ne doit pas être la chaîne vide. Nous ne pouvons pas attribuer plusieurs ID avec une chaîne de caractère, dans ce cas, il faut utiliser la class.

LEVEL 2 :

JQuery utilisé.

$(".montres").on("click", function () {$(".sub-menu ").css("display", "block");});

En cliquant sur navbar “MONTRES” , la liste de TOP MARQES affiche avec la class=“sub-menu”.

En cliquant sur un des élément de li dans cette liste l’utilisateur est censé naviguer dans la page de l’élément souhaité.

Intégrer le rollover de connexion :

Une formulaire est ajouté avec le display : none;

En utilisant JQuery et cliquant sur le bouton de “.log-button” la formulaire affiche et on peut la fermer en cliquant sur le bouton "log-button\_close"intégré dans la formulaire.

$(".log-button").on("click", function () {$(".modal").css("display", "block");});

$(".log-button\_close").on("click", function () {$(".modal").css("display", "none");});

LEVEL 3:

Il y avait le mail validateur de HTML par default mais j’ai utilisé la mail validateur regex en utilisant jquery.

Le code commence en ligne 31 du fichier.

Si le mail est valide, on le voit affiché une fois qu’on clique sur le bouton OK sinon le message "EMAIL NOT VALID" affiche à sa place et la page reload pour recommencer.

En cliquant sur le bouton “power”, si l’utilisateur est connecté on voit son mail sinon la formulaire affiche pour une nouvelle connection.

PS:

Pour les boutons “log-button” j’ai utilisé le même bouton que celui de “sprite-header\_02” et j’ai changé la background-color à différent besoin.



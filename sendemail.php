<?php
if(isset($_POST))
{

    $to  = 'l.guedj@demyfildemenagements.com' . ', '; // notez la virgule
    $to .= 'f.tolba@demyfildemenagements.com';
      
    // Pour envoyer un mail HTML, l'en-tête Content-type doit être défini
     $headers  = 'MIME-Version: 1.0' . "\r\n";
     $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
     $headers .='Content-Transfer-Encoding: 8bit' . "\r\n"; // ici on précise qu'il y a des caractères accentués

     // En-têtes additionnels
     $headers .= 'To: Laetitia GUEDJ <l.guedj@demyfildemenagements.com>, Faouzi TOLBA <f.tolba@demyfildemenagements.com>' . "\r\n";
     $headers .= 'From: CONTACT - Demyfil Déménagements<contact@demyfildemenagements.com>' . "\r\n";

    $nom = @trim(stripslashes($_POST['nom']));
    $prenom = @trim(stripslashes($_POST['prenom']));
    $email = @trim(stripslashes($_POST['email']));
    $msg = utf8_decode($_POST['message']);

     // Sujet
     $subject = 'Demande de contact sur demyfildemenagements.com';

     // message
     $message = '
     <html>
      <head>
       <title>Demande de contact sur demyfildemenagements.com</title>
      </head>
      <body>
       <p>Bonjour,</p>
       <p>Vous trouverez ci-dessous une demande d\'information depuis le site demyfildemenagements.com.
       <br/>Voici les coordonnees de l\'expediteur :</p>
       <p><b>Nom :</b> '. $nom .'</p>
       <p><b>Prenom :</b> '. $prenom .'</p>
       <p><b>Email :</b> '. $email .'</p>
       <p><b>Message :</b> '. $msg .'</p>
       <p><b>DEMYFIL DEMENAGEMENTS</b>
       <br/>Demenagement et transport de marchandises en Ile de France et a Paris
       <br/>8 Rue Louis ARMAND
       <br/>95600 EAUBONNE
       <br/>01 76 54 47 58
       <br/>contact@demyfildemenagements.com
       <br/>www.demyfildemenagements.com</p>
      </body>
     </html>
     ';

     // Envoi
     mail($to, $subject, $message, $headers);
     header('location:contact.php');
}
?>
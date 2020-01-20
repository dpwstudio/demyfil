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
    $adresse = utf8_decode($_POST['adresse']);
    $cp = @trim(stripslashes($_POST['cp']));
    $ville = @trim(stripslashes($_POST['ville']));
    $email = @trim(stripslashes($_POST['email']));
    $telephone = @trim(stripslashes($_POST['telephone']));
    $detail = utf8_decode($_POST['detail']);

     // Sujet
     $subject = 'Demande de devis sur demyfildemenagements.com';

     // message
     $message = '
     <html>
      <head>
       <title>Demande de devis sur demyfildemenagements.com</title>
      </head>
      <body>
       <p>Bonjour,</p>
       <p>Vous trouverez ci-dessous une demande de devis depuis le site demyfildemenagements.com.
       <br/>Voici le detail de la demande ainsi que les coordonnees de l\'expediteur :</p>
       <p><b>Nom :</b> '. $nom .'
       <br/><b>Prenom :</b> '. $prenom .'
       <br/><b>Adresse :</b> '. $adresse .'
       <br/><b>Code postal :</b> '. $cp .'
       <br/><b>Ville :</b> '. $ville .'</p>
       <p><b>Email :</b> '. $email .'
       <br/><b>Telephone :</b> '. $telephone .'</p>
       <p><b>Detail :</b> '. $detail .'</p>
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
     header('location:devis.php');
}
?>
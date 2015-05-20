function construitxml()
{
	var requete;
	requete="<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/1999/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/1999/XMLSchema\"><soap:Body>";
	
	
	requete = requete + "<pMailEmetteur xsd:type=\"xsd:string\" xmlns=\"urn:AVEIS_SITE\">";
	requete = requete + document.valeur.pMailEmetteur.value;
	requete = requete + "</pMailEmetteur>";
	
	requete = requete + "<pMailDestinataire xsd:type=\"xsd:string\" xmlns=\"urn:AVEIS_SITE\">";
	requete = requete + document.valeur.pMailDestinataire.value;
	requete = requete + "</pMailDestinataire>";
	
	requete = requete + "<pSujet xsd:type=\"xsd:string\" xmlns=\"urn:AVEIS_SITE\">";
	requete = requete + document.valeur.pSujet.value;
	requete = requete + "</pSujet>";
	
	requete = requete + "<pCorpsmail xsd:type=\"xsd:string\" xmlns=\"urn:AVEIS_SITE\">";
	requete = requete + document.valeur.civilite.value;
        requete = requete + " " + document.valeur.nom.value;
        requete = requete + " " + document.valeur.prenom.value;
        requete = requete + " de la société " + document.valeur.societe.value;
        requete = requete + " \rProvenance du mail: " + document.valeur.pSujet.value+".";
	requete = requete + "\r" + document.valeur.pCorpsmail.value;
	requete = requete + "</pCorpsmail>";
	
	requete = requete + "<pMailCopie xsd:type=\"xsd:string\" xmlns=\"urn:AVEIS_SITE\">";
	requete = requete + document.valeur.pMailEmetteur.value;
	requete = requete + "</pMailCopie>";
	
	requete = requete + "<pFichierjoint xsd:type=\"xsd:string\" xmlns=\"urn:AVEIS_SITE\">";
	requete = requete + document.valeur.pFichierjoint.value;
	requete = requete + "</pFichierjoint>";
	
	
	requete = requete + "</soap:Body></soap:Envelope>";
	document.xmlform.xml.value=requete;
	document.xmlform.action.value="urn:AVEIS_SITE/Email_Envoyer";
	document.xmlform.submit();
}
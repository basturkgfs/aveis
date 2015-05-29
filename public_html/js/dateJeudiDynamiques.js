var date = new Date();
date.setHours(12);

var jeudi = [],
jeudi_temp = new Date(date.getTime() + ((11 - date.getDay())%7) * 86400000);    // 1er jeudi on ajoute (11-x)%7 jours à aujourd'hui (le tout en milisecondes)

for (var k=0; k<=2; k++) {   // on ajoutes k semaines au 1er jeudi pour avoir le 1er (k=0), le 2eme (k=1), et le 3eme (k=2)
    var d = new Date(jeudi_temp.getTime() + k * 604800000), // 604800000 = 7*24*60*60*1000
    d_j = d.getDate(),
    d_m = d.getMonth() + 1,
    d_a = d.getFullYear();
    if (d_j < 10) d_j = '0'+ d_j;
    if (d_m < 10) d_m = '0'+ d_m;

    jeudi[k] = d_j +'/'+ d_m +'/'+ d_a; // création de la date sous forme jj/mm/aaaa
}

            //alert('1er jeudi: '+ jeudi[0] +'\n2ème jeudi: '+ jeudi[1] +'\n3ème jeudi: '+ jeudi[2]);
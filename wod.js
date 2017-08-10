function reader(s){
  var k =s.toLowerCase();
  var chr ='abcdefghijklmopqrstuvwxyz' ;

 for ( var i =0 ; i<k.length ; i++){
     if (k.indexOf(chr.charAt(i)) == -1){
       return 'Not pangram';
     }
  }
  return 'pangram';
}

document.write(reader("The promptly judged antique ivory buckles for the next prize"));

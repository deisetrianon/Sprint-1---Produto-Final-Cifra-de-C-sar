function cipher(insertCipherPhrase) {
  if (insertCipherPhrase.length === 0) {
  return cipher(prompt("Campo vazio! Digite uma frase para criptografá-la."));
  }
  
  var asciiNumber = 0;
  var cipherPrase = "";
  
  for (var i = 0; i < insertCipherPhrase.length; i++) {
    asciiNumber = insertCipherPhrase.charCodeAt(i);
    if (asciiNumber >= 65 && asciiNumber <= 90) {
      asciiNumber = (asciiNumber - 65 + 33) % 26 + 65;
      asciiNumber = String.fromCharCode(asciiNumber);
      cipherPrase += asciiNumber;
    } else if (asciiNumber >= 97 && asciiNumber <= 122) {
        asciiNumber = (asciiNumber - 97 + 33) % 26 + 97;
        asciiNumber = String.fromCharCode(asciiNumber);
        cipherPrase += asciiNumber;
      }
  }
  return alert(cipherPrase);
}
  
function deCipher(insertDecipherPhrase){
  if (insertDecipherPhrase.length === 0) {
    return deCipher(prompt("Campo vazio! Digite uma frase para descriptografá-la."));
  } 
  
  var asciiNumber2 = 0;
  var deCipherPhrase = "";
  
  for (var i = 0; i < insertDecipherPhrase.length; i++) {
    asciiNumber2 = insertDecipherPhrase.charCodeAt(i);
    if (asciiNumber2 >= 65 && asciiNumber2 <= 90) {
      asciiNumber2 = (asciiNumber2 + 65 - 33) % 26 + 65;
      asciiNumber2 =  String.fromCharCode(asciiNumber2);
      deCipherPhrase += asciiNumber2;
    } else if (asciiNumber2 >= 97 && asciiNumber2 <= 122) {
        asciiNumber2 = (asciiNumber2 + 97 - 45) % 26 + 97;
        asciiNumber2 = String.fromCharCode(asciiNumber2);
        deCipherPhrase += asciiNumber2;
      }
  }
  return alert(deCipherPhrase);
}
  
cipher(prompt("Digite uma frase para criptografá-la."));
deCipher(prompt("Digite uma frase para descriptografá-la."));
  
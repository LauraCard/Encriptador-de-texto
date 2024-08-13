function encriptarTexto() {
  let texto = document.getElementById("texto").value;  // Captura el texto del textarea
  let textoEncriptado = encriptar(texto);  // Aplica la función encriptar
  document.getElementById("resultado").innerText = textoEncriptado;  // Muestra el resultado encriptado
}

function desencriptarTexto() {
  let texto = document.getElementById("texto").value;  // Captura el texto del textarea
  let textoDesencriptado = desencriptar(texto);  // Aplica la función desencriptar
  document.getElementById("resultado").innerText = textoDesencriptado;  // Muestra el resultado desencriptado
}

function encriptar(texto) {
  let textoEncriptado = texto
      .replace(/a/g, "ai")
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  return textoEncriptado;
}

function desencriptar(textoEncriptado) {
  let textoOriginal = textoEncriptado
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  return textoOriginal;
}

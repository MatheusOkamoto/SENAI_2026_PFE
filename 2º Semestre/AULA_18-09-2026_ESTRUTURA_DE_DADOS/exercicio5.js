let documentos = [];

documentos.push("Documento 1");
documentos.push("Documento 2");
documentos.push("Documento 3");
documentos.push("Documento 4");
documentos.push("Documento 5");

while (documentos.length > 0) {
    console.log("Imprimindo:", documentos.shift());
}
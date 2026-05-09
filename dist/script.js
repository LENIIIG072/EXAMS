function downloadFile(filename) {
  // Simule le téléchargement d’un fichier PDF
  const link = document.createElement('a');
  link.href = "pdfs/" + filename; // dossier "pdfs" où tu mets tes fichiers
  link.download = filename;
  link.click();
}

// Fonction pour imprimer directement
function printFile(filename) {
  const win = window.open("pdfs/" + filename, "_blank");
  win.print();
}
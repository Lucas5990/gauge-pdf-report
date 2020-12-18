const { debug } = require('console');
var fs = require('fs');
var pdf = require('html-pdf');
var ejs = require('ejs');
var html = fs.readFileSync('./utils/index.html', 'utf8');
var options = { format: 'Letter' };

function generatePdf(){
  debugger;
  console.log("GERANDO PDF...")
  ejs.renderFile('./utils/index.ejs', {
    name: "Lucas Oliveira Andrade",
  }, {},(err, html) => {
    if (err) console.log(`Erro ao compilar EJS: ${err}`);
    else{
      pdf.create(html, options)
      .toFile('./teste.pdf', (errPdf, res) => {
        if (errPdf) return console.log(`Erro ao gerar o PDF: ${errPdf}`);
        console.log(res);
        console.log("PDF GERADO!")
      })
    }
  });
};

module.exports = generatePdf
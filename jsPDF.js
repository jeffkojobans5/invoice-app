var doc = new jsPDF("p","mm","a4");
var invoiceName="INVOICENAMEINVOICENAME";

var XinvoiceName = doc.splitTextToSize( invoiceName, (30) );

doc.text( XinvoiceName , 205, 20, {
    align: 'right',
});
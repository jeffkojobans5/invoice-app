var doc = new jsPDF("p", "mm", "a4");
var invoiceName = "INVOICE";

var SplitinvoiceName = doc.splitTextToSize(invoiceName, (30));

doc.text(SplitinvoiceName, 205, 20, {
    align: 'right',
});

var SplitinvoiceNamelinePositionFromTop = doc.getLineHeight(SplitinvoiceName) 

var SplitinvoiceNameLineHeight = doc.getTextDimensions(SplitinvoiceName);

//doc.text('yooo' , 160 , SplitinvoiceNamelinePositionFromTop + SplitinvoiceNameLineHeight.h)



var invoiceNumber = '# ' + '34738478'
var invoiceNumberLineHeight = doc.getTextDimensions(invoiceNumber);

var SplitinvoiceNumberlinePositionFromTop = doc.getLineHeight(invoiceNumber) 

doc.text( invoiceNumber , 205, SplitinvoiceNamelinePositionFromTop + SplitinvoiceNameLineHeight.h + 2, {
    align: 'right',
});


var date = ' Apr 05, 2022'
var dateLineHeight = doc.getTextDimensions(date);

var dateFromTop = doc.getLineHeight(invoiceNumber) 
doc.text(date, 205, dateFromTop + SplitinvoiceNameLineHeight.h + invoiceNumberLineHeight.h + 4 , {
    align: 'right',
});

var dateValue = 'Date:'
var dateValueFromTop = doc.getLineHeight(invoiceNumber) 
doc.text(dateValue, 170, dateFromTop + SplitinvoiceNameLineHeight.h + invoiceNumberLineHeight.h + 4 , {
    align: 'right',
});

var dueDateValue = 'Due Date:'
var dueDateValueFromTop = doc.getLineHeight(dueDateValue) 
doc.text(dueDateValue, 170, dateFromTop + SplitinvoiceNameLineHeight.h + invoiceNumberLineHeight.h + dateLineHeight.h + 7 , {
    align: 'right',
});

var dateDueFromTop = doc.getLineHeight(invoiceNumber) 
doc.text(date, 205, dateFromTop + SplitinvoiceNameLineHeight.h + invoiceNumberLineHeight.h + dateLineHeight.h + 7 , {
    align: 'right',
});





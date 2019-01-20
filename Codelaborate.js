function onOpen() {
  var ui = DocumentApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Languages')
      .addItem('Python', 'python')
      .addToUi();
}

function python() {
  DocumentApp.getUi() // Or DocumentApp or FormApp.
     .alert(getAllText());
}


function getAllText(){
  const body = DocumentApp.getActiveDocument();
  var style = {};
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Courier New';
  body.editAsText().setAttributes(style);
  //return body;
}
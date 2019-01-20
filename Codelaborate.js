function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Languages')
      .addItem('Python', 'python')
      .addToUi();
}

function python() {
  DocumentApp.getUi() 
     .alert(getAllText())
  
}

function getAllText(){
  const body = DocumentApp.getActiveDocument().getBody();
  var styleF = {};
  var style = {};
  styleF[DocumentApp.Attribute.FONT_FAMILY] = 'Courier New';
  style[DocumentApp.Attribute.BACKGROUND_COLOR] = "#000000";
  body.setAttributes(style);
  var text = body.editAsText().setForegroundColor("#FFFFFF").setAttributes(styleF);
}

function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Languages')
      .addItem('Python', 'python')
      .addToUi();
}

//const keywords = ['False','class','finally','is','return','None','continue','for','lambda','try','True','def','from','nonlocal','while','and','del','global','not','with','as','elif','if','or','yield','assert','else','import','pass','break','except','in','raise'];

function python() {
  const body = DocumentApp.getActiveDocument().getBody();
  var styleF = {};
  var style = {};
  styleF[DocumentApp.Attribute.FONT_FAMILY] = 'Courier New';
  style[DocumentApp.Attribute.BACKGROUND_COLOR] = "#000000";
  body.setAttributes(style);
  var text = body.editAsText().setForegroundColor("#FFFFFF").setAttributes(styleF);
  //colorCode();
  //changeTextColor();
}
/*
function colorCode(){
  const body = DocumentApp.getActiveDocument();
  var text = body.getBody().editAsText();
  var word = body.getBody().findText("cod").getElement().asText();
  word.setForegroundColor("#0000FF");
}

function changeTextColor(){
  var background = "#FFA500";
  var body = DocumentApp.getActiveDocument();
  /*var searching = body.findText(/con/);

  while (searching !== null){
    var element =  searching.getElement();
    var elementText = element.asText();
  
    elementText.setForegroundColor(background);
    searching = body.findText(/con/,searching);
  var word = body.getBody().findText("code");
  var rangeBuilder = body.newRange();
  if(word !== null)
  {
    var length = word.getEndOffsetInclusive() - word.getStartOffset();
    for(var i = 0; i < length; i++)
    {
      rangeBuilder.addElement(word.getElement());
    }
    body.setSelection(rangeBuilder.build());
    var text = getWord();
    for(var k = 0; k < text.length; k++)
    {
       text[k].getBody().getText().setForegroundColor("#0000FF");
    }
  }
}

function getWord() {
  var selection = DocumentApp.getActiveDocument().getSelection();
  if (selection) {
    var text = [];
    var elements = selection.getSelectedElements();
    for (var i = 0; i < elements.length; ++i) {
      if (elements[i].isPartial()) {
        var element = elements[i].getElement().asText();
        var startIndex = elements[i].getStartOffset();
        var endIndex = elements[i].getEndOffsetInclusive();

        text.push(element.getText().substring(startIndex, endIndex + 1));
      } else {
        var element = elements[i].getElement();
        // Only translate elements that can be edited as text; skip images and
        // other non-text elements.
        if (element.editAsText) {
          var elementText = element.asText().getText();
          // This check is necessary to exclude images, which return a blank
          // text element.
          if (elementText) {
            text.push(elementText);
          }
        }
      }
    }
  return text;
  }
}

function replaceText(newText) {
  var selection = DocumentApp.getActiveDocument().getSelection();
  if (selection) {
    var replaced = false;
    var elements = selection.getSelectedElements();
    if (elements.length === 1 && elements[0].getElement().getType() ===
        DocumentApp.ElementType.INLINE_IMAGE) {
      throw new Error('Can\'t insert text into an image.');
    }
    for (var i = 0; i < elements.length; ++i) {
      if (elements[i].isPartial()) {
        var element = elements[i].getElement().asText();
        var startIndex = elements[i].getStartOffset();
        var endIndex = elements[i].getEndOffsetInclusive();
        element.deleteText(startIndex, endIndex);
        if (!replaced) {
          element.insertText(startIndex, newText);
          replaced = true;
        } else {
          // This block handles a selection that ends with a partial element. We
          // want to copy this partial text to the previous element so we don't
          // have a line-break before the last partial.
          var parent = element.getParent();
          var remainingText = element.getText().substring(endIndex + 1);
          parent.getPreviousSibling().asText().appendText(remainingText);
          // We cannot remove the last paragraph of a doc. If this is the case,
          // just remove the text within the last paragraph instead.
          if (parent.getNextSibling()) {
            parent.removeFromParent();
          } else {
            element.removeFromParent();
          }
        }
      } else {
        var element = elements[i].getElement();
        if (!replaced && element.editAsText) {
          // Only translate elements that can be edited as text, removing other
          // elements.
          element.clear();
          element.asText().setText(newText);
          replaced = true;
        } else {
          // We cannot remove the last paragraph of a doc. If this is the case,
          // just clear the element.
          if (element.getNextSibling()) {
            element.removeFromParent();
          } else {
            element.clear();
          }
        }
      }
    }
  } else {
    var cursor = DocumentApp.getActiveDocument().getCursor();
    var surroundingText = cursor.getSurroundingText().getText();
    var surroundingTextOffset = cursor.getSurroundingTextOffset();

    // If the cursor follows or preceds a non-space character, insert a space
    // between the character and the translation. Otherwise, just insert the
    // translation.
    if (surroundingTextOffset > 0) {
      if (surroundingText.charAt(surroundingTextOffset - 1) != ' ') {
        newText = ' ' + newText;
      }
    }
    if (surroundingTextOffset < surroundingText.length) {
      if (surroundingText.charAt(surroundingTextOffset) != ' ') {
        newText += ' ';
      }
    }
    cursor.insertText(newText);
  }
}
*/
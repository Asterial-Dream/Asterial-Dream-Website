const textAnimation = ["Asterial Dream"];
let iterator = 0;
let currentString = 0;
let deletionFlag = false;
const ticker = document.querySelector(".tickerBar");
const textAddition = document.querySelector(".textAdder");

ticker.addEventListener("animationiteration", function oneTime(e) {
  console.log(e);

  if (deletionFlag == true) {
    ticker.removeEventListener("animationiteration", oneTime)

    // deleteText(textAddition);

    // if (textAddition.textContent.length == 0) {
    //   deletionFlag = false;
    //   iterator = 0;
    //   ++currentString;

    //   if (currentString >= textAnimation.length) {
    //     currentString = 0;
    //   }
    // }
  }

  if (iterator < textAnimation[currentString].length && deletionFlag == false) {
    addText(textAddition, textAnimation[currentString], iterator);
    ++iterator;

    if (iterator >= textAnimation[currentString].length) {
      deletionFlag = true;
    }
  }


})


function addText(nodeToManipulate, stringToAdd, iteration) {
  nodeToManipulate.textContent = nodeToManipulate.textContent + stringToAdd[iteration];
}


function deleteText(nodeToManipulate) {
  nodeToManipulate.textContent = nodeToManipulate.textContent.slice(0, -3);
}
class ConfirmDialog {
  constructor(message) {
    this.message = message;
  }

  show() {
    const confirmation = confirm(this.message);

    if (confirmation) {
      document.body.style.backgroundColor = "black";
    }
  }
}

function showConfirmDialog() {
    const dialog = new ConfirmDialog("Backgroundu dəyişmək istəyirsiz?");
    dialog.show();
}



// prompt ilə olan

class AgeChecker {
    checkAge() {
        const age = prompt("Yaşını qeyd et");

        if (age === null) {
            
            this.showAlert("Ləğv edildi");
        } else if (isNaN(age)) {
            
            this.showAlert("Düzügün yazı qeyd et");
        } else if (parseInt(age) < 18) {
            
            this.showAlert("Hələ cavansan");
        } else {
           
            this.showAlert("Xoş gəldin qoca qurd");
        }
    }

    showAlert(message) {
        
        alert(message);
    }
}

function checkUserAge() {
  const ageChecker = new AgeChecker();
  ageChecker.checkAge();
}




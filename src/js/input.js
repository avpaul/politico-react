export default class Input {
  constructor(elements) {
    this.elements = elements;
    this.boundAction();
  }

  raiseLabel() {
    this.elements.inputField.classList.add('active', 'focus');
    this.elements.inputField.children[2].classList.add('active');
  }

  lowerLabel() {
    if (!this.elements.inputField.children[1].value) {
      this.elements.inputField.classList.remove('active');
      this.elements.inputField.children[2].classList.remove('active');
    }
    this.elements.inputField.classList.remove('focus');
  }

  boundAction() {
    this.elements.inputField.children[1].addEventListener('focus', () => {
      this.raiseLabel();
    });

    this.elements.inputField.children[1].addEventListener('focusout', () => {
      this.lowerLabel();
    });
  }
}

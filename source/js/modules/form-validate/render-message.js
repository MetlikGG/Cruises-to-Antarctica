export class Message {
  constructor() {
    this._baseErrorText = 'Это поле является обязательным';
  }

  _messageTemplate(message, state) {
    const cssClass = state === 'valid' ? 'is-valid' : 'is-invalid';
    return `<span class="booking__message ${cssClass}">${message}</span>`;
  }

  removeMessage(parent) {
    const parentMessage = parent.querySelector('.booking__message');
    if (parentMessage) {
      parentMessage.remove();
    }
  }

  renderMessage(parent, message, state) {
    this.removeMessage(parent);
    parent.insertAdjacentHTML('beforeend', this._messageTemplate(message, state));
  }
}

import Input from './input';

const inputFields = document.getElementsByClassName('input-field');
for (let i = 0; i < inputFields.length; i += 1) {
  console.log(inputFields);
  const input = new Input({
    inputField: inputFields[i],
  });
}

import {decode} from 'github:indicjs/katapayadi@master';

document.querySelector('#convert').addEventListener('click', (e) => {
  document.querySelector('#decoded').value = decode(document.querySelector('#encoded').value);
});

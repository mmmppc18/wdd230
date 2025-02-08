const input = document.querySelector('#facChap');
const button = document.querySelector('button');
const list = document.querySelector('chaplist');

button.addEventListener('click', () {
    if (input.value != '')
    {

    }
})

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '✖️';
li.append(deleteButton);
list.append(li);

deleteButton.addEventListener('click', function()
{
    chaplist.removeChild(li);
    input.focus();
});

input.focus();
input.value = '';

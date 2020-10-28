function handleDeleteItem() {
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(event.currentTarget).closest('li').css('display', 'none');
  });
}

function handleCheckItem() {
  $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(event.currentTarget).closest('li').toggleClass('shopping-item__checked');
  });

}

function addItem(userInput) {
  $('ul').append(`
  <li>
    <span class="shopping-item">${userInput}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
       
      <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
}

function validateInput(userInput) {
  if (userInput !== '') {
    addItem(userInput);
  } else {
    throw new Error('Input field cannot be blank.');
  } 
}

function handleSubmit() {
  $('form').submit( event => {
    event.preventDefault();
    const userInput = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    validateInput(userInput);
  });
}
// listen to submit
// save input value
// create new <li>
// add value to <li>
function main() {
  handleSubmit();
  handleCheckItem();
  handleDeleteItem();
}

$(main);
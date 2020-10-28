function handleSubmit() {
  $('form').submit( event => {
    event.preventDefault();
    const userInput = $('#shopping-list-entry').val();
    addItem(userInput);
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

function handleCheckItem() {
  $('button.shopping-item-toggle').click( event => {
    $('span.shopping-item').toggleClass('shopping-item__checked');
  });

}

function handleDeleteItem() {
  $('.shopping-item-delete').click( event => {
    $(event.currentTarget).closest("li").css('display', 'none');
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
const STORE = [
  {id: cuid(), name: "apples", checked: false},
  {id: cuid(), name: "oranges", checked: false},
  {id: cuid(), name: "milk", checked: true},
  {id: cuid(), name: "bread", checked: false}
];

function toggleDelete(itemId) {
  const itemIndex = STORE.findIndex(item => item.id === itemId); // find index for item in array where IDs match
  STORE.splice(itemIndex, 1); // start splice at that index and move 1 to remove item
}

function toggleCheck(itemId) {
  const item = STORE.find(item => item.id === itemId); // find item in array where IDs match
  item.checked = !item.checked; // negate checked value where IDs match
}

function getItemId(item) {
  return $(item).closest('li').data('item-id'); // get 'data-item-id' value from li closest to clicked element
}

function handleDelete() {
  $('.js-shopping-list').on('click', `.js-item-delete`, event => {
    const id = getItemId(event.currentTarget);
    toggleDelete(id);
    renderList();
  });
}

function handleCheck() {
  $('.js-shopping-list').on('click', `.js-item-toggle`, event => { // listen for check button click on ul
    const id = getItemId(event.currentTarget); 
    toggleCheck(id);
    renderList();
  });
}

function addItem(itemName) {
  STORE.push({id: cuid(), name: itemName, checked: false}); // add new item with user input to array
}

function handleSubmit() {
  $('#js-shopping-list-form').submit(function(event) { // listen for submit event on form
    event.preventDefault();  // prevent default behavior
    const newItemName = $('.js-shopping-list-entry').val(); // get value of user input
    if (newItemName !== '') { // so long as value is not blank (spaces allowed)
      $('.js-shopping-list-entry').val(''); // clear input field for new entry
      addItem(newItemName);
      renderList();
    }
  });
}

function generateItemElement(item) { //convert STORE object to li element
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

function generateItemsString(shoppingList) {
  const items = shoppingList.map((item) => generateItemElement(item)); //create array of li elements
  return items.join(''); //convert array of li elements to undelimited string
}

function renderList() {
  const listItemsString = generateItemsString(STORE); //convert STORE to string collection of li elements 
  $('.js-shopping-list').html(listItemsString); //add li collection to ul
}

function main() {
  renderList();
  handleSubmit();
  handleCheck();
  handleDelete();
}

$(main);
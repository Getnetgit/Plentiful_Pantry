const newFormHandler = async (event) => {
  event.preventDefault();

  const grocery_name = document.querySelector('#grocery-name').value.trim();
  const category = document.querySelector('#grocery-category').value.trim();


  if (grocery_name && category) {
    const response = await fetch(`/api/groceries`, {
      method: 'POST',
      body: JSON.stringify({ grocery_name, category }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/api/users/profile');
    } else {
      alert('Failed to create grocery');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/groceries/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/api/users/profile');
    } else {
      alert('Failed to delete grocery');
    }
  }
};

const updateButtonHandler = async (event) => {


  if (event.target.hasAttribute('data-idUpdate')) {
    const id = event.target.getAttribute('data-idUpdate');
    const quantity_avilable = document.querySelector(`#quantity-${id}`).value.trim();
    const quantity_min = document.querySelector(`#minQuantity-${id}`).value.trim();
    const response = await fetch(`/api/groceries/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity_min, quantity_avilable }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      document.location.replace('/api/users/profile');
    } else {
      alert('Failed to update grocery');
    }
  }
};
document
  .querySelector('.new-grocery-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.pantry-list')
  .addEventListener('click', delButtonHandler);
document
  .querySelector('.shoping-list')
  .addEventListener('click', delButtonHandler);
document
  .querySelector('.shoping-list')
  .addEventListener('click', updateButtonHandler);

document
  .querySelector('.pantry-list')
  .addEventListener('click', updateButtonHandler);

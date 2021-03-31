// When user clicks add-btn
const submitPostBtn = document.getElementById('post-submit');
submitPostBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const newPost = {
    author: document.getElementById('author').value.trim(),
    body: document.getElementById('input-box').value.trim(),
    created_at: new Date(),
  };

  fetch('/api/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success!', data);
      const row = document.createElement('div');
      const feed = document.getElementById('feed');
      row.classList.add('post');

      let id = data.id;
      console.log(id);

      const postAuthor = document.createElement('small');
      const separator = document.createElement('hr');
      const postBody = document.createElement('p');
      const postDate = document.createElement('small');
      var deleteBtn = document.createElement('BUTTON');
      deleteBtn.innerHTML = `<span class="material-icons thistle" style="font-size: 18px" data-value="${id}">delete_outline</span>`
      deleteBtn.setAttribute('class', 'btn btn-sm btn-outline-secondary float-right delete');

      postAuthor.textContent = `${data.author} posted: `;
      postBody.textContent = `${data.body}`;
      postDate.textContent = `${new Date(
        data.created_at
      ).toLocaleDateString()}`;

      row.appendChild(postAuthor);
      row.appendChild(postBody);
      row.appendChild(postDate);
      row.appendChild(deleteBtn);
      row.append(separator);

      feed.prepend(row);
    });

  // Empty the input box
  document.getElementById('author').value = '';
  document.getElementById('input-box').value = '';
});

fetch('/api/all', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Current Posts in DB: ', data);
    data.map(({ id, author, body, createdAt }) => {
      const row = document.createElement('div');
      const feed = document.getElementById('feed');
      row.classList.add('post');

      const postAuthor = document.createElement('small');
      const separator = document.createElement('hr');
      const postBody = document.createElement('p');
      const postDate = document.createElement('small');
      var deleteBtn = document.createElement('BUTTON');
      deleteBtn.innerHTML = `<span class="material-icons thistle" style="font-size: 18px" data-value="${id}">delete_outline</span>`
      deleteBtn.setAttribute('class', 'btn btn-sm btn-outline-secondary float-right delete');

      postAuthor.textContent = `${author} posted: `;
      postBody.textContent = `${body}`;
      postDate.textContent = `${new Date(createdAt).toLocaleDateString()}`;

      row.appendChild(postAuthor);
      row.appendChild(postBody);
      row.appendChild(postDate);
      row.appendChild(deleteBtn);
      row.append(separator);

      feed.prepend(row);
    });
  })
  .catch((err) => console.error(err));

    // DELETE
    const deleteBtns = document.querySelectorAll('.delete');
  
    // Set up the event listeners for each delete button
    deleteBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        let id = $(this).data('value');
  
        // Send the delete request
        fetch(`/api/all/${id}`, {
          method: 'DELETE',
        }).then((res) => {
          console.log(res);
          console.log(`Deleted Post: ${id}`);
  
          // Reload the page
          location.reload();
        });
      });
    });

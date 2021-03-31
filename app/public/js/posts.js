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

      const postAuthor = document.createElement('small');
      const separator = document.createElement('hr');
      const postBody = document.createElement('p');
      const postDate = document.createElement('small');

      postAuthor.textContent = `${data.author} posted: `;
      postBody.textContent = `${data.body}`;
      postDate.textContent = `${new Date(
        data.created_at
      ).toLocaleDateString()}`;

      row.appendChild(postAuthor);
      row.appendChild(postBody);
      row.appendChild(postDate);
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
    console.log('Successful GET all posts:', data);
    data.map(({ author, body, createdAt }) => {
      const row = document.createElement('div');
      const feed = document.getElementById('feed');
      row.classList.add('post');

      const postAuthor = document.createElement('small');
      const separator = document.createElement('hr');
      const postBody = document.createElement('p');
      const postDate = document.createElement('small');
      postAuthor.textContent = `${author} posted: `;
      
      postBody.textContent = `${body}`;
      postDate.textContent = `${new Date(createdAt).toLocaleDateString()}`;

      row.appendChild(postAuthor);
      row.appendChild(postBody);
      row.appendChild(postDate);
      row.append(separator);

      feed.prepend(row);
    });
  })
  .catch((err) => console.error(err));

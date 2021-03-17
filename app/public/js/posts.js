// When user clicks add-btn
const submitChirpBtn = document.getElementById('post-submit');
submitChirpBtn.addEventListener('click', (e) => {
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
      console.log('Success in posting chirp!', data);
      const row = document.createElement('div');
      const feed = document.getElementById('feed');
      row.classList.add('post');

      const postAuthor = document.createElement('p');
      const postBody = document.createElement('p');
      const postDate = document.createElement('p');

      postAuthor.textContent = `${data.author} posted: `;
      postBody.textContent = `${data.body}`;
      postDate.textContent = `at ${new Date(
        data.created_at
      ).toLocaleDateString()}`;

      row.appendChild(postAuthor);
      row.appendChild(postBody);
      row.appendChild(postDate);

      feed.prepend(row);
    });

  // Empty the input box
  document.getElementById('author').value = '';
  document.getElementById('chirp-box').value = '';
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
    data.map(({ author, body, created_at }) => {
      const row = document.createElement('div');
      const feed = document.getElementById('feed');
      row.classList.add('post');

      const postAuthor = document.createElement('p');
      const postBody = document.createElement('p');
      const postDate = document.createElement('p');
      postAuthor.textContent = `${author} posted: `;
      postBody.textContent = `${body}`;
      postDate.textContent = `at ${new Date(created_at).toLocaleDateString()}`;

      row.appendChild(postAuthor);
      row.appendChild(postBody);
      row.appendChild(postDate);

      feed.prepend(row);
    });
  })
  .catch((err) => console.error(err));

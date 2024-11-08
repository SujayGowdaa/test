export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
}

export async function createPost(formData) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error('Failed to edit post');
  }

  const data = await res.json();
  return data;
}

export async function editPost({ id, formData }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formData }),
  });

  if (!res.ok) {
    throw new Error('Failed to edit post');
  }

  const data = await res.json();
  return data;
}

export async function deletePost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to delete post');
  }

  const data = await res.json();
  return data;
}

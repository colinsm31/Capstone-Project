const BASE_URL = 'https://capstone-project-server-aa069cbf5e62.herokuapp.com';
const LOCAL_URL = 'http://localhost:8080';

export const fetchReviews = async () => {
  const response = await fetch(`${BASE_URL}/reviews`);
  const result = await response.json();
  // console.log(result);
  return result;
};

export const searchReviews = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/search?query=${query}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error('An error has occured during the search:', error);
    return { success: false };
  }
};

export const fetchSingleReview = async (id) => {
  const response = await fetch(`${BASE_URL}/reviews/${id}`);
  const result = await response.json();

  // console.log(result);
  return result;
};

export const createReview = async (title, message, rating, author) => {
  try {
    console.log('Author ID: ', author._id);
    const response = await fetch(`${BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, message, rating, author }),
    });
    const result = await response.json();

    console.log(result);
    return result;
  } catch (error) {
    console.error('Error occurred while creating review: ', error);
    return { success: false };
  }
};

export const updateReview = async (id, title, message, rating) => {
  try {
    // If no new title or message, just return with no changes
    if (!title && !message && !rating) {
      return;
    }

    // If no new title is present only update message
    if (!title && !rating) {
      const response = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const result = await response.json();
      console.log('Result of PATCH request: ', result);
      return result;
    }

    // If no new message is present only update title
    if (!message && !rating) {
      const response = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      const result = await response.json();
      console.log('Result of PATCH request: ', result);
      return result;
    }

    // If no new message is present only update title
    if (!message && !title) {
      const response = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating }),
      });
      const result = await response.json();
      console.log('Result of PATCH request: ', result);
      return result;
    }

    // If no new message is present only update title
    if (!message) {
      const response = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, rating }),
      });
      const result = await response.json();
      console.log('Result of PATCH request: ', result);
      return result;
    }

    // If no new message is present only update title
    if (!title) {
      const response = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, rating }),
      });
      const result = await response.json();
      console.log('Result of PATCH request: ', result);
      return result;
    }

    // If no new message is present only update title
    if (!rating) {
      const response = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, message }),
      });
      const result = await response.json();
      console.log('Result of PATCH request: ', result);
      return result;
    }

    // Otherwise update both title and message
    else {
      const response = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, message, rating }),
      });
      const result = await response.json();
      console.log('Result of PATCH request: ', result);
      return result;
    }
  } catch (error) {
    console.error('Error occured updating review: ', error);
    return { success: false };
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 204) {
      // Status code 204 indicates a successful deletion with no content.
      return { success: true };
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error('An error occurred while deleting the review:', error);
    return { success: false };
  }
};
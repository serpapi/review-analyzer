document.getElementById('analyze').addEventListener('click', () => {
  const inputReviews = document.getElementById('input-reviews').value;
  const parsedReviews = parseReviews(inputReviews);

  if (parsedReviews.error) {
    document.getElementById('error-message').innerText = parsedReviews.error;
  } else {
    const formattedPrompt = createPrompt(parsedReviews);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'setPrompt',
        prompt: formattedPrompt,
      });
    });
  }
});

function parseReviews(input) {
  try {
    const jsonInput = JSON.parse(input);
    if (Array.isArray(jsonInput.reviews) && jsonInput.reviews.length > 0) {
      return jsonInput.reviews.map(review => review.snippet || review.text || (review.comment && review.comment.text));
    } else if (jsonInput.reviews_results && Array.isArray(jsonInput.reviews_results.reviews) && jsonInput.reviews_results.reviews.length > 0) {
      return jsonInput.reviews_results.reviews.map(review => review.content);
    } else if (jsonInput.reviews_results && jsonInput.reviews_results.reviews && Array.isArray(jsonInput.reviews_results.reviews.customer_reviews) && jsonInput.reviews_results.reviews.customer_reviews.length > 0) {
      return jsonInput.reviews_results.reviews.customer_reviews.map(review => review.text);
    } else if (Array.isArray(jsonInput) && jsonInput.length > 0) {
      return jsonInput;
    }
  } catch (error) {
    return { error: 'Failed to parse input' };
  }

  return { error: 'Failed to parse input' };
}

function createPrompt(reviews) {
  let prompt = 'Reviews:\n';
  for (const review of reviews) {
    prompt += `- ${review}\n`;
  }
  prompt += '\nCreate 10 most common labels for these reviews and give percentages based on their occurrence rate, and also if the label is negative or positive.';
  return prompt;
}

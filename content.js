chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'setPrompt') {
    setPrompt(request.prompt);
  }
});

function setPrompt(prompt) {
  const chatGPTPromptBar = document.querySelector('textarea');

  if (chatGPTPromptBar) {
    chatGPTPromptBar.value = prompt;
    chatGPTPromptBar.dispatchEvent(new Event('input', { bubbles: true }));
    triggerSendButton();
  } else {
    const observer = new MutationObserver((mutations) => {
      const chatGPTPromptBar = document.querySelector('textarea');
      if (chatGPTPromptBar) {
        chatGPTPromptBar.value = prompt;
        chatGPTPromptBar.dispatchEvent(new Event('input', { bubbles: true }));
        triggerSendButton();
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
}

function triggerSendButton() {
  const sendButton = document.querySelector('button.absolute');
  if (sendButton) {
    sendButton.click();
  }
}

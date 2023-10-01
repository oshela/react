class Status {
  constructor(text, expirationTime) {
    this.text = text;
    this.expirationTime = expirationTime;
    this.createdAt = new Date();
  }

  isExpired() {
    const currentTime = new Date();
    return currentTime - this.createdAt > this.expirationTime;
  }
}

function postStatus(text, expirationTime) {
  const status = new Status(text, expirationTime);

  // Simulate posting status
  console.log(`Posted status: "${status.text}"`);

  // Check if the status is expired after 24 hours
  setTimeout(() => {
    if (status.isExpired()) {
      console.log(`Status "${status.text}" has expired after 24 hours.`);
    }
  }, expirationTime);
}

// Example usage:
const statusText = "Hello, this is my status!";
const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

postStatus(statusText, expirationTime);

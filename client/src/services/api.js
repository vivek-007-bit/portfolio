
const API_BASE_URL = (
    import.meta.env.VITE_API_URL || "http://localhost:5000"
  ).replace(/\/+$/, "");
  
  export async function sendContactMessage(formData) {
    let response;
  
    try {
      response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch {
      throw new Error(
        "Unable to connect to the server. Please check your connection and try again."
      );
    }
  
    const result = await response.json().catch(() => ({}));
  
    if (!response.ok) {
      throw new Error(
        result.message ||
          (response.status === 429
            ? "Too many messages. Please try again later."
            : "Unable to send your message.")
      );
    }
  
    return result;
  }
  
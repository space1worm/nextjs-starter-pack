export const apiRequest = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json", // Default content type, can be overridden
      ...options.headers, // Allow overriding or adding more headers
    },
  });

  if (!res.ok) {
    // Handle non-2xx HTTP responses
    const errorBody = await res.text();
    throw new Error(`Network response was not ok. Status: ${res.status}. Body: ${errorBody}`);
  }

  try {
    return (await res.json()) as T; // Type-safe JSON parsing
  } catch (error) {
    throw new Error("Failed to parse response as JSON.");
  }
};

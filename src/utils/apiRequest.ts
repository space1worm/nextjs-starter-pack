export const apiRequest = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Network response was not ok. Status: ${res.status}. Body: ${errorBody}`);
  }

  try {
    return (await res.json()) as T;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to parse response as JSON.");
  }
};

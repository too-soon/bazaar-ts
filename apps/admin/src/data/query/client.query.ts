import { API_URL } from "../type/constants";

interface ApiCallOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  body?: any;
  headers?: Record<string, string>;
}

interface ApiCallResponse<T> {
  success: boolean;
  data: T | Record<string, string[] | null>;
  status?: string;
}

export const apiCall = async <T = any>({
  method,
  body,
  path,
}: ApiCallOptions): Promise<ApiCallResponse<T>> => {
  const response = await fetch(`${API_URL}/${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  /** @todo Role based auth */
  const data = await response.json();
  console.log("API Response:", data); // Debug log @TODO: remove

  let status = "Unknown status";
  let success = false;

  switch (response.status) {
    case 200:
      success = true;
      status = "OK";
      break;
    case 201:
      success = true;
      status = "Created";
      break;
    case 401:
      status = "Unauthorized";
      break;
    case 403:
      status = "Forbidden";
      break;
    case 404:
      status = "Not Found";
      break;
    case 400:
      status = "Bad Request";
      break;
    case 422:
      status = "Unprocessable Entity";
      break;
    case 500:
      status = "Internal Server Error";
      break;
    case 503:
      status = "Service Unavailable";
      break;
    default:
      status = `Unexpected status code: ${response.status}`;
      break;
  }

  return {
    success,
    data,
    status,
  };
};

export default async function login(credentials) {
  const csrftoken = getCookie("csrftoken");
  const res = await fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken, 
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    console.log(res);
    throw {
      message: "Invalid credentials",
      status: res.status,
    };
  }

  const responseData = await res.json();
  return responseData;
}

function getCookie(name) {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : "";
}
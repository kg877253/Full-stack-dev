
const BASE_URL = "http://localhost:3000";
export const getPasswords = async () => {
    const response = await fetch(BASE_URL + "/");
    return response.json();
};

export const addPassword = async (data) => {
    return fetch(BASE_URL + "/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
};

export const deletePasswordById = async (id) => {
    return fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
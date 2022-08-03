const url = "https://api.github.com/users/romeojeremiah/followers?per_page=100";

export const fetchUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    return users;
};

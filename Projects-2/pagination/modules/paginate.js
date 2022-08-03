export const paginate = (users) => {
    //create 10 arrays from users
    const usersPerPage = 10;
    const usersOnPages = [];

    for (let i = 0; i < users.length / usersPerPage; i++) {
        let start = i * 10;
        let end = (i + 1) * (users.length / usersPerPage);
        usersOnPages.push(users.slice(start, end));
    }

    return usersOnPages;
};

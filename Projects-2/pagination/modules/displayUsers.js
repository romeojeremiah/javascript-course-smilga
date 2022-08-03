const cardContainer = document.querySelector(".card-container");

export const displayUsers = (users) => {
    const usersDOM = users
        .map((user) => {
            const {
                avatar_url: img,
                login: userName,
                html_url: profilePage,
            } = user;
            return `<article class="card" ">
                    <img src="${img}" class="profile-img" />
                    <h2 class="profile-name">${userName}</h2>
                   <a href="${profilePage}" class="btn-profile">view profile</a>
                </article>`;
        })
        .join("");

    cardContainer.innerHTML = usersDOM;
};

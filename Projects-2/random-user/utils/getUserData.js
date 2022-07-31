export const getUserData = (user) => {
    const {
        email,
        phone,
        picture: { large: img },
        login: { password },
    } = user;
    const { age } = user.dob;
    const { number, name } = user.location.street;
    const { first, last } = user.name;
    const street = `${number} ${name}`;
    const fullName = `${first} ${last}`;

    return {
        img,
        name: fullName,
        email,
        age,
        street,
        phone,
        password,
    };
};

const generateUserHelpers = (bcrypt, listOfUsers) => {
  const authenticateUser = (email, password) => {
    if (!listOfUsers[email]) {
      return { error: "BAD EMAIL", data: null };
    }

    if (!bcrypt.compareSync(password, listOfUsers[email].password)) {
      return { error: "BAD PASSWORD", data: null };
    }

    const currentUser = listOfUsers[email];
    return { error: null, data: currentUser };
  };

  const createUser = (email, name, password, secret) => {
    if (!email || !name || !password || !secret) {
      return { error: "BAD FIELD", data: null };
    }

    if (listOfUsers[email]) {
      return { error: "BAD EMAIL EXISTS", data: null };
    }

    const newUser = {
      email,
      name,
      secret,
      password: bcrypt.hashSync(password, salt),
    };

    listOfUsers[email] = newUser;

    return newUser;
  };

  return { authenticateUser, createUser };
};

module.exports = generateUserHelpers;

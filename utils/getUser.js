const getUser = async (username) => {
    const responseUser = await fetch(`https://api.github.com/users/${username}`);
    const user = await responseUser.json();

    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repository = await response.json();
    const filterFork = repo => !repo.fork;

    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language
    });

    const repos = repository
        .filter(filterFork)
        .map(extractData);

    return {
        repos,
        user
    }
}

export default getUser;
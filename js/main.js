const searchUser = () => {
    const userInput = document.getElementById('user-input').value;
    console.log(userInput);

    const url = `https://api.github.com/users/${userInput}`
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data))

}

const showDynamicData = (id, text) => {
    document.getElementById(id).innerHTML = text;
}

const displayUser = (show) => {
    showDynamicData('repo', show.public_repos);
    showDynamicData('follower', show.followers);
    showDynamicData('following', show.following);
    showDynamicData('username', show.name);
    showDynamicData('location', show.location);
    showDynamicData('bio', show.bio);

    const avatar_url = `https://avatars.githubusercontent.com/u/${show.id}?v=4`;
    const userImg = document.getElementById('user-img');
    userImg.setAttribute('src', avatar_url);

    const user_profile_link = `https://github.com/${show.login}`;
    const userProfile = document.getElementById('view-profile');
    userProfile.setAttribute('href', user_profile_link);

}
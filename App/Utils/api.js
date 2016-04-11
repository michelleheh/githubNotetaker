var api = {
  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  getNoes(username){
    username = username.toLowerCase().trim();
    var url = `https://github-notetaker-rn.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json());
  },
  addNote(username, note){
    username = username.toLowerCase().trim();
    var url = `https://github-notetaker-rn.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringigy(note)
    }).then((res) => res.json());
  }
}

module.exports = api;
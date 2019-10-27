const rootEl = document.getElementById('root');

const post = {
    id: 999,
    content: 'Первый пост в моей соц.сети',
    url: 'https://placekitten.com/300/300',
    likes: 5,
    dislikes: 4,
};

const postVideo = {
    id: 123,
    content: 'Первый видеопост',
    url: 'http://www.youtube.com/embed/DkaUsBwe0fo',
    likes: 9,
    dislikes: 3,
}

const postAudio = {
    id: 333,
    content: 'Первый аудиопост',
    url: 'https://music.yandex.ru/iframe/#track/57730/4766',
    likes: 66,
    dislikes: 23,
}

const postEl = document.createElement('div');
postEl.className = 'card';

const postVideoEl = document.createElement('div');
postVideoEl.className = 'card';

const postAudioEl = document.createElement('div');
postAudio.className = 'card';


const imgEl = document.createElement('img');
imgEl.src = post.url;
imgEl.className = 'card-img-top';
postEl.appendChild(imgEl);

const postBodyEl = document.createElement('div');
postBodyEl.className = 'card-body';
postEl.appendChild(postBodyEl);

const postContentEl = document.createElement('p');
postContentEl.textContent = post.content;
postBodyEl.appendChild(postContentEl);

const likesEl = document.createElement('button');
likesEl.className = 'btn btn-primary';
likesEl.textContent = '❤ ' + post.likes;

const dislikesEl = document.createElement('button');
dislikesEl.className = 'btn btn-primary';
dislikesEl.textContent = '💔 ' + post.dislikes;

likesEl.onclick = function () {
    post.likes = post.likes + 1;
    likesEl.textContent = '❤ ' + post.likes;
};

dislikesEl.onclick = () => {
    post.dislikes = post.dislikes+1;
    dislikesEl.textContent = '💔 '+post.dislikes;
}


const videoEl = document.createElement('iframe');
videoEl.src = postVideo.url;
videoEl.className = 'card-img-top';
videoEl.width = '800px';
videoEl.height = '800px';
postVideoEl.appendChild(videoEl);

const videoBodyEl = document.createElement('div');
videoBodyEl.className = 'card-body';
postVideoEl.appendChild(videoBodyEl);

const postVideoContentEl = document.createElement('p');
postVideoContentEl.textContent = postVideo.content;
videoBodyEl.appendChild(postVideoContentEl);

const likesVideoEl = document.createElement('button');
likesVideoEl.className = 'btn btn-primary';
likesVideoEl.textContent = '❤ ' + postVideo.likes;

const dislikesVideoEl = document.createElement('button');
dislikesVideoEl.className = 'btn btn-primary';
dislikesVideoEl.textContent = '💔 '+postVideo.dislikes;


const audioEl = document.createElement('iframe');
audioEl.src = postAudio.url;
audioEl.className = 'card-img-top';
postAudioEl.appendChild(audioEl);

const audioBodyEl = document.createElement('div');
audioBodyEl.className = 'card-body';
postAudioEl.appendChild(audioBodyEl);

const postAudioContentEL = document.createElement('p');
postAudioContentEL.textContent = postAudio.content;
audioEl.appendChild(postAudioContentEL);

const likesAudioEl = document.createElement('button');
likesAudioEl.className = 'btn btn-primary';
likesAudioEl.textContent = '❤ ' + postAudio.likes;

const dislikesAudioEl = document.createElement('button');
dislikesAudioEl.className = 'btn btn-primary';
dislikesAudioEl.textContent = '💔 '+postAudio.dislikes;


likesAudioEl.onclick = function () {
    postAudio.likes = postAudio.likes + 1;
    likesAudioEl.textContent = '❤ ' + postAudio.likes;
};

dislikesAudioEl.onclick = () => {
    postAudio.dislikes = postAudio.dislikes+1;
    dislikesAudioEl.textContent = '💔 '+postAudio.dislikes;
}

likesVideoEl.onclick = function () {
    postVideo.likes = postVideo.likes + 1;
    likesVideoEl.textContent = '❤ ' + postVideo.likes;
};

dislikesVideoEl.onclick = () => {
    postVideo.dislikes = postVideo.dislikes+1;
    dislikesVideoEl.textContent = '💔 '+postVideo.dislikes;
}


audioBodyEl.appendChild(likesAudioEl);
audioBodyEl.appendChild(dislikesAudioEl);

videoBodyEl.appendChild(likesVideoEl);
videoBodyEl.appendChild(dislikesVideoEl);

postBodyEl.appendChild(likesEl);
postBodyEl.appendChild(dislikesEl);

rootEl.appendChild(postEl);
rootEl.appendChild(postVideoEl);
rootEl.appendChild(postAudioEl);


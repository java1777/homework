const wrapperEl = document.querySelector('#wrapper');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => print(res))
    .catch((err) => console.error('Fetch error: ', err));

function print(data) {
    data.forEach((post) => {
        const textEl = document.createElement('h1');
        textEl.textContent = post.title;
        textEl.classList.add('box');
        wrapperEl.append(textEl);
    });
}

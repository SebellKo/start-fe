const url = document.querySelector('#url');
const btn = document.querySelector('#btn');
const log = document.querySelector('#log');

url.addEventListener('keypress', clickEnter);
btn.addEventListener('click', fetchUrl);

function clickEnter(event) {
    if (event.keyCode === 13) {
        fetchUrl();
    }
}

function success(response) {
    response.text().then(function(str) {
        log.value = str;
    });
}

function fail(error) {
    log.value = error;
}

function fetchUrl() {
    const urlInput = url.value;
    log.value = '';

    if (!urlInput) {
        window.alert('잘못된 입력입니다.');
    }
    else {
        fetch(urlInput).then(success).catch(fail)
    }
}
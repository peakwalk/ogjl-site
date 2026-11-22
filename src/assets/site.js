const feedChoices = document.querySelectorAll('[data-feed-choice]');
const feeds = document.querySelectorAll('[data-feed]');
function showFeed(choice) {
  feedChoices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.feedChoice === choice)));
  feeds.forEach(feed => { feed.hidden = feed.dataset.feed !== choice; });
}
feedChoices.forEach(button => button.addEventListener('click', () => showFeed(button.dataset.feedChoice)));
document.querySelector('#preview-preferred').addEventListener('click', () => showFeed('preferred'));

const exampleJobLinks = document.querySelectorAll('[data-preview-open]');
function markExampleJobRead() {
  exampleJobLinks.forEach(link => link.classList.remove('is-unread'));
  document.querySelectorAll('[data-today-count]').forEach(count => {
    const feed = count.closest('[data-feed]');
    const rows = [...feed.querySelectorAll('[data-today]')];
    const unread = rows.filter(row => row.classList.contains('is-unread')).length;
    count.textContent = `${unread}/${rows.length}`;
  });
}
exampleJobLinks.forEach(link => link.addEventListener('click', markExampleJobRead));

const appStoreDialog = document.querySelector("#app-store-release");
document.querySelector("#app-store-card").addEventListener("click", () => appStoreDialog.showModal());

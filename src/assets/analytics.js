(() => {
  const isPublicPage = location.protocol === 'https:' && location.hostname !== 'localhost';
  if (!isPublicPage) return;

  const measurementId = 'G-RNYP065SYV';
  const preferenceKey = 'oilfield-jobs:analytics';
  const settings = document.querySelector('#analytics-settings');
  const panel = document.querySelector('#analytics-panel');
  let preference;
  let tag;

  try {
    preference = localStorage.getItem(preferenceKey);
  } catch {
    // The controls also work for the current page when browser storage is unavailable.
  }

  function setPanel(open) {
    panel.hidden = !open;
    settings.setAttribute('aria-expanded', String(open));
  }

  function enableAnalytics() {
    window[`ga-disable-${measurementId}`] = false;

    if (tag) {
      tag('consent', 'update', { analytics_storage: 'granted' });
      return;
    }

    window.dataLayer = window.dataLayer || [];
    tag = function () { window.dataLayer.push(arguments); };
    tag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    tag('js', new Date());
    tag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: location.origin + location.pathname,
    });

    const loader = document.createElement('script');
    loader.async = true;
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(loader);
  }

  function choose(value) {
    preference = value;
    try {
      localStorage.setItem(preferenceKey, value);
    } catch {
      // Keep the visitor's decision for this page.
    }

    if (value === 'allow') {
      enableAnalytics();
    } else if (tag) {
      window[`ga-disable-${measurementId}`] = true;
      tag('consent', 'update', { analytics_storage: 'denied' });
    }

    setPanel(false);
    settings.focus();
  }

  settings.hidden = false;
  setPanel(!preference);
  settings.addEventListener('click', () => {
    setPanel(panel.hidden);
    if (!panel.hidden) document.querySelector('#analytics-decline').focus();
  });
  document.querySelector('#analytics-allow').addEventListener('click', () => choose('allow'));
  document.querySelector('#analytics-decline').addEventListener('click', () => choose('decline'));
  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-download-channel]');
    if (link && preference === 'allow') {
      tag('event', 'download_click', { download_channel: link.dataset.downloadChannel });
    }
  });

  if (preference === 'allow') enableAnalytics();
})();

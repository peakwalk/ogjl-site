# Oilfield Jobs website

The public website for Oilfield Jobs. It follows the WCQ Site pattern of a static source directory, a `public/` build and deployment through GitHub Actions.

## Build

Use Node.js 24 and run `npm run build`. Open `public/index.html` to review the site locally. The GitHub Pages workflow builds and publishes `public/` on pushes to `main`. Relative asset and page links support the GitHub Pages project path.

## Download channels

- App Store uses Apple app ID `6833812733` and shows the current pending-release message.
- Google Play links to `tech.peakwalk.apps.joblist.drilling`, currently listed as Drilling Jobs.
- The APK card stays disabled until a publicly distributed production APK is available. Use a direct HTTPS link to that version’s APK file.

Operational support, privacy questions and account-deletion requests use `matt@eaxmarketplace.com`. Technical support uses `hydra1983@gmail.com`. Account-deletion requests are handled manually after account ownership is verified. The website privacy notice covers website analytics. Publishing the approved Oilfield Jobs app privacy policy and terms is a separate release step.

## Google Analytics

The website uses the Web Measurement ID `G-RNYP065SYV` from the legacy Drilling Jobs production configuration in `joblistexpo`. A GA4 property can receive data from separate Web, iOS and Android streams. The current `joblistmobile` Firebase configuration is for notifications. Joining reports for that app requires GA4 instrumentation and native streams in the same property. The app's Firebase service configuration stays with the app.

Google Analytics loads after consent on the HTTPS homepage. It records page views and the `download_click` event with `download_channel` values `app_store` and `google_play`. Visitors can change their choice using **Analytics settings**. Verify the hostname and stream in the GA4 Realtime report when Analytics console access is available.

## Assets

The [Anacortes Refinery photograph](https://commons.wikimedia.org/wiki/File:Anacortes_Refinery_31904.JPG) by Walter Siegmund is cropped and color-treated under [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/). The [Oswald font license](src/assets/oswald-license.txt) is included with the source. The download icons are shared with WCQ Site.

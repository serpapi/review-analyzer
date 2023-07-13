<h1 align="center">SerpApi's ChatGPT Review Analyzer Chrome Extension</h1>
<h4 align="center">A Chrome Extension for extracting valuable insights from reviews, generating concise summaries, sentiment analysis, and keyword extraction</h4>


<div align="center">

  <a href="">[![Contributors][contributors-shield]][contributors-url] </a>
  <a href="">[![Forks][forks-shield]][forks-url]</a>
  <a href="">[![Stargazers][stars-shield]][stars-url]</a>
  <a href="">[![Issues][issues-shield]][issues-url]</a>
  <a href="">[![Issues][issuesclosed-shield]][issuesclosed-url]</a>
  <a href="">[![MIT License][license-shield]][license-url]</a>

</div>


<p align="center">
  <img width="317" src="https://user-images.githubusercontent.com/73674035/235039615-af02e454-283f-4818-be9e-58c060e4b257.png" alt="review-analyzer"/>
</p>

<p align="center">
  A Blog Post with example usecases and deeper explanation: <a href="https://serpapi.com/blog/review-analyzer">Open Source Review Analyzer Chrome Extension for ChatGPT</a>
</p>

</br>
<h3 align="center">Installation</h3>

The extension isn’t published under Chrome Web Store yet, so the only web page you can access is the GitHub Repository for the moment. It doesn’t have support for Firefox yet. You will need a Chrome or a Brave Browser to use it.

1. Download the repository as a ZIP file and extract it, or just clone it.
2. In your Chrome or Brave browser, open the Extensions page (`chrome://extensions` for Chrome Browser, `brave://extensions` for Brave Browser).
3. Enable "Developer mode" in the top right corner of the page.
4. Click "Load unpacked" and select the extracted folder from your computer.

---

<h3 align="center">Usage</h3>

1. Navigate to ChatGPT webpage.
2. Navigate to [SerpApi Playground](https://serpapi.com/playground?engine=google_maps_reviews&data_id=0x89c259af336b3341%3A0xa4969e07ce3108de&hl=en) to filter the review results you desire.
3. Click on the SerpApi's ChatGPT Review Analyzer icon in your browser.
4. A popup window will open. Copy the review results you gathered from SerpApi in JSON format. (Do not try to trim the unnecessary parts.)
5. Click on the Analyze Button.
6. The extension will automatically process and display insights from the reviews, providing you with the 10 most common labels and their percentages based on occurrence rate. It will also indicate whether a label is positive or negative.

---

<h3 align="center">Example with a Cafe in New York</h3>

<p align="center">
<img width="337" alt="image" src="https://user-images.githubusercontent.com/73674035/235038667-22abacae-679f-4aec-8e9d-d0a8ad6e52a0.png">
</p>

<h3 align="center">Output</h3>

```bash
    Quality of coffee (70% positive)
    Service (40% positive, 30% negative)
    Ambiance/decor (60% positive)
    Availability of snacks/food options (40% positive, 20% negative)
    Price (20% negative)
    Seating/WiFi (60% positive)
    Milk options (30% positive, 10% negative)
    Accessibility (10% positive)
    Cleanliness (20% positive)
    Location (10% positive)
```

---

<h3 align="center">Example with a Custom Array containing reviews of SerpApi</h3>

<p align="center">
<img width="337" alt="image" src="https://user-images.githubusercontent.com/73674035/235040189-a5a3f1fe-3934-47c5-85a9-b60cb75856b6.png">
</p>

<h3 align="center">Output</h3>

```bash
Ease of Use (Positive) - 23%
Fast and Responsive API (Positive) - 20%
Excellent Customer Support (Positive) - 18%
Comprehensive and Versatile (Positive) - 15%
Pricing Concerns (Negative) - 10%
Documentation Quality (Mixed) - 7% (Positive: 5%, Negative: 2%)
Integration Issues (Negative) - 3%
Wide Range of Features (Positive) - 2%
Real-time Results (Positive) - 1%
Wish for More Free Credits (Negative) - 1%
```

---

<h3 align="center">Example Prompt on ChatGPT</h3>

<p align="center">
<img width="1130" alt="image" src="https://user-images.githubusercontent.com/73674035/235040592-239a6015-bde4-4175-9fdc-f968b385354a.png">
</p>

[contributors-shield]: https://img.shields.io/github/contributors/serpapi/review-analyzer.svg
[contributors-url]: https://github.com/serpapi/review-analyzer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/serpapi/review-analyzer.svg
[forks-url]: https://github.com/serpapi/review-analyzer/network/members
[stars-shield]: https://img.shields.io/github/stars/serpapi/review-analyzer.svg
[stars-url]: https://github.com/serpapi/review-analyzer/stargazers
[issues-shield]: https://img.shields.io/github/issues/serpapi/review-analyzer.svg
[issues-url]: https://github.com/serpapi/review-analyzer/issues
[issuesclosed-shield]: https://img.shields.io/github/issues-closed/serpapi/review-analyzer.svg
[issuesclosed-url]: https://github.com/serpapi/review-analyzer/issues?q=is%3Aissue+is%3Aclosed
[license-shield]: https://img.shields.io/github/license/serpapi/uule_converter.svg
[license-url]: https://github.com/serpapi/review-analyzer/blob/master/LICENSE


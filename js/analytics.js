(function () {
    'use strict';

    // This file is deployed from a branch-specific pipeline:
    // prod uses the production measurement ID; main uses the test ID.
    var measurementId = 'G-E9QS6YVW3V';

    if (document.querySelector('script[data-inbr-ga]')) {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
        window.dataLayer.push(arguments);
    };
    window.__INBR_GA_MEASUREMENT_ID__ = measurementId;

    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    script.setAttribute('data-inbr-ga', measurementId);
    document.head.appendChild(script);
}());

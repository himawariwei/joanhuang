(function () {
    'use strict';

    // 本機 file:/// 預覽時使用內建備用元件；正式網站仍由 components 載入。
    var localComponents = {
        header: "<div class=\"site-header__inner\">\n\n    <a class=\"site-header__brand\" href=\"./index.html\" aria-label=\"統一資訊首頁\">\n        <img src=\"./images/logo-uniopen.svg\" alt=\"uniopen 統一資訊\" loading=\"eager\" decoding=\"async\">\n    </a>\n\n    <nav class=\"site-header__nav\" aria-label=\"主選單\">\n        <a href=\"./index.html\" rel=\"noopener noreferrer\">i 住家 首頁</a>\n        <a href=\"./event-overview.html\">最新活動</a>\n    </nav>\n\n    <a class=\"site-header__download\" href=\"https://link.openpoint.com.tw/l3GdxYqA\" target=\"_blank\" rel=\"noopener noreferrer\">OPENPOINT APP下載</a>\n\n    <a class=\"site-header__home\" href=\"./index.html\" aria-label=\"回首頁\">\n        <img src=\"images/icon-home.svg\" alt=\"回i住家首頁\">\n    </a>\n\n    <details class=\"site-header__menu\">\n        <summary aria-label=\"開啟選單\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </summary>\n\n        <nav class=\"site-header__panel\" aria-label=\"手機選單\">\n            <a href=\"./index.html\">i 住家 首頁</a>\n            <a href=\"./event-overview.html\">最新活動</a>\n            <a href=\"https://link.openpoint.com.tw/l3GdxYqA\" target=\"_blank\" rel=\"noopener noreferrer\">OPENPOINT APP下載</a>\n        </nav>\n    </details>\n</div>\n",
        footer: "<div class=\"site-footer__inner\">\n    <div class=\"site-footer__brand\" aria-label=\"uniopen i住家 AI智慧生活服務平台\">\n        <a class=\"site-footer__logo-main\" href=\"./index.html\" aria-label=\"統一資訊首頁\">\n            <img src=\"./images/inbrLogo.png\" alt=\"uniopen i住家\" loading=\"lazy\" decoding=\"async\">\n        </a>\n        <span class=\"site-footer__logo-divider\" aria-hidden=\"true\"></span>\n        <a class=\"site-footer__logo-service\" href=\"./index.html\" aria-label=\"i住家 AI智慧生活服務平台\">\n            <img src=\"./images/logo-smart-home.svg\" alt=\"i住家 AI智慧生活服務平台\" loading=\"lazy\" decoding=\"async\">\n        </a>\n    </div>\n\n    <!-- <nav class=\"site-footer__nav\" aria-label=\"頁尾功能連結\">\n        <a href=\"https://link.openpoint.com.tw/l3GdxYqA\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"./images/icon-guide.svg\" alt=\"\" loading=\"lazy\" decoding=\"async\"><span>常見問題</span></a>\n        <a href=\"https://link.openpoint.com.tw/l3GdxYqA\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"./images/icon-report.svg\" alt=\"\" loading=\"lazy\" decoding=\"async\"><span>隱私權政策</span></a>\n        <a href=\"https://link.openpoint.com.tw/l3GdxYqA\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"./images/icon-partner.svg\" alt=\"\" loading=\"lazy\" decoding=\"async\"><span>與我合作</span></a>\n    </nav> -->\n\n    <div class=\"site-footer__download\">\n        <p>立即下載 OPENPOINT APP</p>\n        <div class=\"site-footer__store\">\n            <a href=\"https://link.openpoint.com.tw/l3GdxYqA\" target=\"_blank\" aria-label=\"前往 Google Play 下載\" rel=\"noopener noreferrer\"><img src=\"./images/google-play.svg\" alt=\"Get it on Google Play\" width=\"132\" height=\"40\" loading=\"lazy\" decoding=\"async\"></a>\n            <a href=\"https://link.openpoint.com.tw/l3GdxYqA\" target=\"_blank\" aria-label=\"前往 App Store 下載\" rel=\"noopener noreferrer\"><img src=\"./images/app-store.svg\" alt=\"Download on the App Store\" width=\"120\" height=\"40\" loading=\"lazy\" decoding=\"async\"></a>\n        </div>\n    </div>\n</div>\n\n<p class=\"site-footer__copyright\">統一資訊股份有限公司 President Information CORP.　©2026 President Information CORP. All Rights Reserved.</p>\n"
    };

    function loadComponent(element, url, kind) {
        if (window.location.protocol === 'file:') {
            element.innerHTML = localComponents[kind];
            return Promise.resolve();
        }
        return fetch(url)
            .then(function (response) {
                if (!response.ok) throw new Error('Component HTTP ' + response.status);
                return response.text();
            })
            .then(function (html) { element.innerHTML = html; });
    }

    var header = document.querySelector('[data-component="header"]');
    var footer = document.querySelector('[data-component="footer"]');
    var loads = [];

    if (header) { loads.push(loadComponent(header, './components/header.html', 'header')); }
    if (footer) { loads.push(loadComponent(footer, './components/footer.html', 'footer')); }

    Promise.all(loads).then(function () {
        document.dispatchEvent(new Event('components:loaded'));
    });
}());

(function () {
    'use strict';

    var carousels = document.querySelectorAll('[data-partner-carousel]');

    function getScrollStep(track) {
        var item = track.querySelector('.home-partners__item');

        if (!item) {
            return track.clientWidth;
        }

        var style = window.getComputedStyle(track);
        var gap = parseFloat(style.columnGap || style.gap) || 0;

        return item.getBoundingClientRect().width + gap;
    }

    function setState(carousel, track, prev, next) {
        var itemCount = track.querySelectorAll('.home-partners__item').length;
        var maxScroll = track.scrollWidth - track.clientWidth;
        var isStart = track.scrollLeft <= 1;
        var isEnd = track.scrollLeft >= maxScroll - 1;
        var isNoScroll = itemCount <= 5 || maxScroll <= 1;

        carousel.classList.toggle('is-no-scroll', isNoScroll);

        if (isNoScroll) {
            prev.hidden = true;
            next.hidden = true;
            prev.disabled = true;
            next.disabled = true;
            return;
        }

        prev.hidden = isStart;
        next.hidden = isEnd;
        prev.disabled = isStart;
        next.disabled = isEnd;
    }

    function bindCarousel(carousel) {
        var track = carousel.querySelector('[data-partner-track]');
        var prev = carousel.querySelector('[data-partner-prev]');
        var next = carousel.querySelector('[data-partner-next]');

        if (!track || !prev || !next) {
            return;
        }

        prev.addEventListener('click', function () {
            track.scrollBy({
                left: -getScrollStep(track),
                behavior: 'smooth'
            });
        });

        next.addEventListener('click', function () {
            track.scrollBy({
                left: getScrollStep(track),
                behavior: 'smooth'
            });
        });

        track.addEventListener('scroll', function () {
            window.requestAnimationFrame(function () {
                setState(carousel, track, prev, next);
            });
        });

        window.addEventListener('resize', function () {
            setState(carousel, track, prev, next);
        });

        setState(carousel, track, prev, next);
    }

    carousels.forEach(bindCarousel);
}());

(function () {
    'use strict';

    var groups = document.querySelectorAll('[data-experience-tabs]');

    function activateTab(group, tab) {
        var panelId = tab.getAttribute('aria-controls');
        var tabs = group.querySelectorAll('[data-experience-tab]');
        var panels = group.querySelectorAll('[data-experience-panel]');

        tabs.forEach(function (item) {
            var isActive = item === tab;
            item.classList.toggle('is-active', isActive);
            item.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        panels.forEach(function (panel) {
            panel.hidden = panel.id !== panelId;
        });
    }

    groups.forEach(function (group) {
        var tabs = Array.prototype.slice.call(group.querySelectorAll('[data-experience-tab]'));

        tabs.forEach(function (tab, index) {
            tab.addEventListener('click', function () {
                activateTab(group, tab);
            });

            tab.addEventListener('keydown', function (event) {
                var nextIndex;

                if (event.key === 'ArrowRight') {
                    nextIndex = (index + 1) % tabs.length;
                } else if (event.key === 'ArrowLeft') {
                    nextIndex = (index - 1 + tabs.length) % tabs.length;
                } else {
                    return;
                }

                event.preventDefault();
                tabs[nextIndex].focus();
                activateTab(group, tabs[nextIndex]);
            });
        });
    });
}());

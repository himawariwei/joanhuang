(function () {
    'use strict';

    function loadComponent(element, url) {
        return fetch(url)
            .then(function (response) { return response.text(); })
            .then(function (html) { element.innerHTML = html; });
    }

    var header = document.querySelector('[data-component="header"]');
    var footer = document.querySelector('[data-component="footer"]');
    var loads = [];

    if (header) { loads.push(loadComponent(header, './components/header.html')); }
    if (footer) { loads.push(loadComponent(footer, './components/footer.html')); }

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

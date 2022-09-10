var preloader_plus = {
    "animation_delay": "100",
    "animation_duration": "1000"
};

(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-WBKRP9P');

document.documentElement.classList.add(
    'vp-lazyload-enabled'
);

var VPData = {
    "__": {
        "couldnt_retrieve_vp": "Couldn't retrieve Visual Portfolio ID.",
        "pswp_close": "Close (Esc)",
        "pswp_share": "Share",
        "pswp_fs": "Toggle fullscreen",
        "pswp_zoom": "Zoom in\/out",
        "pswp_prev": "Previous (arrow left)",
        "pswp_next": "Next (arrow right)",
        "pswp_share_fb": "Share on Facebook",
        "pswp_share_tw": "Tweet",
        "pswp_share_pin": "Pin it",
        "fancybox_close": "Close",
        "fancybox_next": "Next",
        "fancybox_prev": "Previous",
        "fancybox_error": "The requested content cannot be loaded. <br \/> Please try again later.",
        "fancybox_play_start": "Start slideshow",
        "fancybox_play_stop": "Pause slideshow",
        "fancybox_full_screen": "Full screen",
        "fancybox_thumbs": "Thumbnails",
        "fancybox_download": "Download",
        "fancybox_share": "Share",
        "fancybox_zoom": "Zoom"
    },
    "settingsPopupGallery": {
        "enable_on_wordpress_images": false,
        "vendor": "fancybox",
        "deep_linking": false,
        "deep_linking_url_to_share_images": false,
        "show_arrows": true,
        "show_counter": true,
        "show_zoom_button": true,
        "show_fullscreen_button": true,
        "show_share_button": true,
        "show_close_button": true,
        "show_thumbs": true,
        "show_download_button": false,
        "show_slideshow": false,
        "click_to_zoom": true
    },
    "screenSizes": [320, 576, 768, 992, 1200]
};


// ======================
window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/simiaroom.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.0.2"
    }
};
/*! This file is auto-generated */
! function(e, a, t) {
    var n, r, o, i = a.createElement("canvas"),
        p = i.getContext && i.getContext("2d");

    function s(e, t) {
        var a = String.fromCharCode,
            e = (p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, e), 0, 0), i.toDataURL());
        return p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, t), 0, 0), e === i.toDataURL()
    }

    function c(e) {
        var t = a.createElement("script");
        t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (o = Array("flag", "emoji"), t.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, r = 0; r < o.length; r++) t.supports[o[r]] = function(e) {
        if (!p || !p.fillText) return !1;
        switch (p.textBaseline = "top", p.font = "600 32px Arial", e) {
            case "flag":
                return s([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) ? !1 : !s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]);
            case "emoji":
                return !s([129777, 127995, 8205, 129778, 127999], [129777, 127995, 8203, 129778, 127999])
        }
        return !1
    }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function() {
        t.DOMReady = !0
    }, t.supports.everything || (n = function() {
        t.readyCallback()
    }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function() {
        "complete" === a.readyState && t.readyCallback()
    })), (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji)))
}(window, document, window._wpemojiSettings);

// =============================

(function($) {
    if (!$('.elementor-page').length) {
        return;
    }

    function addDataAttribute($items) {
        $items.find('.vp-portfolio__item a:not([data-elementor-open-lightbox])').each(function() {
            if (/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(this.href)) {
                this.dataset.elementorOpenLightbox = 'no';
            }
        });
    }

    $(document).on('init.vpf', function(event, vpObject) {
        if ('vpf' !== event.namespace) {
            return;
        }

        addDataAttribute(vpObject.$item);
    });
    $(document).on('addItems.vpf', function(event, vpObject, $items) {
        if ('vpf' !== event.namespace) {
            return;
        }

        addDataAttribute($items);
    });
})(window.jQuery);

// =================================
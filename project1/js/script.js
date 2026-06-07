/* =========================================================
   JUSTYOUNG — interactions
   ========================================================= */
$(function () {

    /* ----- 카테고리 탭: active 표시 + 부드러운 페이드 전환 ----- */
    var $boxes = $(".item_sort_box02");

    function showCategory(cls) {
        $boxes.stop(true, true).hide();
        $("." + cls).stop(true, true).fadeIn(400)
            // 숨겨져 있던 카드는 스크롤 리빌이 트리거되지 않으므로 즉시 노출
            .find(".item_box").addClass("is-visible");
    }

    // 초기: 상의만 노출
    $boxes.hide();
    $(".topwear").show().find(".item_box").addClass("is-visible");

    var tabMap = {
        topwear_btn: "topwear",
        pants_btn: "pants",
        outer_btn: "outer",
        shoes_btn: "shoes",
        etc_btn: "etc"
    };

    $(".item_text_box02 li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        var btnClass = $(this).find("a").attr("class");
        if (tabMap[btnClass]) showCategory(tabMap[btnClass]);
    });

    /* ----- 스크롤 리빌: 요소가 뷰포트에 들어오면 등장 ----- */
    var revealTargets = document.querySelectorAll(
        ".title_text_box, .item_box, .main_slide, .item_text_box02"
    );
    revealTargets.forEach(function (el, i) {
        el.classList.add("reveal");
        // 같은 줄 카드들에 살짝 시차(stagger)
        el.style.transitionDelay = (i % 6) * 60 + "ms";
    });

    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

        revealTargets.forEach(function (el) { io.observe(el); });
    } else {
        revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ----- 모바일 사이드 메뉴 (드로어) ----- */
    var $navToggle = $(".nav-toggle");
    var $sideMenu = $("#sideMenu");
    var $sideDim = $(".side-dim");

    function openMenu() {
        $sideMenu.addClass("open").attr("aria-hidden", "false");
        $sideDim.addClass("show");
        $navToggle.addClass("is-active").attr("aria-expanded", "true");
        $("body").addClass("menu-open");
    }
    function closeMenu() {
        $sideMenu.removeClass("open").attr("aria-hidden", "true");
        $sideDim.removeClass("show");
        $navToggle.removeClass("is-active").attr("aria-expanded", "false");
        $("body").removeClass("menu-open");
    }
    $navToggle.on("click", function () {
        if ($sideMenu.hasClass("open")) closeMenu();
        else openMenu();
    });
    $sideDim.on("click", closeMenu);
    $(".side-close").on("click", closeMenu);
    $(".side-nav a, .side-util a").on("click", closeMenu); // 메뉴 클릭 시 닫기
    $(document).on("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
    });

    /* ----- 맨 위로 버튼 ----- */
    var $toTop = $("#toTop");
    $(window).on("scroll", function () {
        if (window.scrollY > 500) $toTop.addClass("show");
        else $toTop.removeClass("show");
    });
    $toTop.on("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

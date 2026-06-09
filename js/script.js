function fnMove(seq){
    var offset = $("#scroll" + seq).offset();
    $('html, body').animate({ scrollTop: offset.top }, 600);
}

$(document).on("click", ".tab-list li a", function(e){
    e.preventDefault();
    fnMove($(this).data("n"));
});

function opnModal(seq){
    $(".popup").removeClass("active");
    $("#popup" + seq).addClass("active");
    $(".modal").addClass("open");
    $("body").addClass("modal-open");
}

function closeBtn(){
    $(".modal").removeClass("open");
    $("body").removeClass("modal-open");
    setTimeout(function(){ $(".popup").removeClass("active"); }, 300);
}

// 배경(오버레이) 클릭 시 닫기
$(document).on("click", ".modal", function(e){
    if (e.target === this) closeBtn();
});

// ESC 키로 닫기
$(document).on("keydown", function(e){
    if (e.key === "Escape" && $(".modal").hasClass("open")) closeBtn();
});

// 카드뉴스 스와이퍼 (팝업별로 개별 초기화)
document.querySelectorAll(".cardSwiper").forEach(function(el){
    new Swiper(el, {
        observer: true,
        observeParents: true,
        pagination: { el: el.querySelector(".card-pagination"), type: "fraction" },
        navigation: {
            nextEl: el.querySelector(".card-btn-next"),
            prevEl: el.querySelector(".card-btn-prev"),
        },
    });
});

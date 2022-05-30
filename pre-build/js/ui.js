$(document).ready(function(){
  /*input 캘린더*/
  // if ($('.cal').length) {
  //     $('.cal').datepicker({
  //       dateFormat: "yy-mm-dd",
  //       monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  //       monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  //       dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  //       dayNames: ['일요일' , '월요일' , '화요일' , '수요일' , '목요일' , '금요일' , '토요일'],
  //       showMonthAfterYear: true,
  //       changeYear:true,
  //       changeMonth:true,
  //       yearSuffix: "년",
  //       nextText:"다음달",
  //       prevText:"이전달"
  //     });
  // }

  /* datetimepicker */
  jQuery.datetimepicker.setLocale('kr'); //언어설정
  $('.datetimepicker').datetimepicker({
    timepicker:false,
    format:'Y-m-d',
  });
  
  /*탭 리스트*/
    $('.tabList li').on({
    "click":function (){
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
    }
  })

  /*gnb 토글*/
  $('.gnb li').on({
    "click":function (){
        $(this).addClass('active').siblings('li').removeClass('active');
    }
  })

  /* lnb가 펼쳐졌을 때 핀을 누르면 lnb 고정 */
  /* lnb 핀 아이콘 토글 */
  $('.btnPin').on({
    "click":function(){
      $(this).closest('.lnb').toggleClass('active')
      $(this).closest('.btnPin').toggleClass('active')
    }
  })

  /*lnb dep2 */
  $('#lnb .lnbMenu li span').on({
    "click":function (){
        $(this).closest('li').toggleClass('active').siblings('li').removeClass('active');
    }
  })

  
  /*더보기버튼 토글 */
  $('.btnMore').on({
    "click":function (){
        $(this).siblings('.innerMenu').toggle();
    }
  })

  /*버튼 클릭 시 맨위로 이동 */
  $('.lnbMoveTop').on({
    "click": function click() {
        $('#content').animate({ scrollTop: 0 }, 600);
    }
  });

  /* innerMenu에 있는 삭제버튼을 누르면 tr 삭제 (운영자관리_공통) */
  $('.btnReplyRemove').on({
    "click":function (){
        $(this).closest('tr').remove();
    }
  })

  /* 댓글 수정 */
  $('.btnReplyEdit').on({
    "click":function (){
        $(this).closest('.more').siblings('.replyBox').show();
        $(this).closest('.more').siblings('.desc').hide();
        $(this).closest('.more').hide();
    }
  })

  /* more 태그에있는 댓글 삭제버튼 (운영자_질의응답_상세정보) */
  $('.more .btnReplyRemove').on({
    "click":function (){
        $(this).closest('.reply').remove();
    }
  })

  /* 댓글 수정 취소 */
  $('.btnReplyCancel').on({
    "click":function (){
        $(this).closest('.replyBox').hide();
        $(this).closest('.replyBox').siblings('.desc').show();
        $(this).closest('.replyBox').siblings('.more').show().children('.innerMenu').hide();

    }
  })

  /* 댓글 수정 등록 */
  $('.btnReplySubmit').on({
    "click":function (){
        let val = $(this).closest('.btnGroup').siblings('textarea').val();
        $(this).closest('.replyBox').hide();
        $(this).closest('.replyBox').siblings('.desc').show();
        $(this).closest('.replyBox').siblings('.more').show();
        $(this).closest('.replyBox').siblings('.more').children('.innerMenu').hide();
        $(this).closest('.replyBox').siblings('.desc').text(val)
    }
  })

  /* 패밀리사이트 토글*/
  $('.familySite > a').on({
    "click":function (e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('ul').toggle();
    }
  })

  /* 팝업 창 닫기 */
  $(".btnClose").on({
    "click": function click() {
        $(this).closest('.popup').hide();
        $('#dimmed').remove();
    }
  });

  /* 팝업 뒤쪽 검은색 배경 */
  // $(document).on('click', '#dimmed', function () {
  //   $(this).remove();
  //   $('.popup').hide();
  // });

  /* 수집데이터 팝업 다음버튼 */
  $('.cont .btnArea .next').on({
    "click":function(){
        var idx = $(this).parents('.cont').index();
        $('.stepArea ul > li').eq(idx).addClass('active')
        $('.stepArea ul > li').eq(idx+1).addClass('active')
        $(this).parents('.cont').removeClass('active').next('.cont').addClass('active')
    }
  })

  /* 수집데이터 팝업 이전버튼 */
  $('.cont .btnArea .prev').on({
    "click":function(){
        var idx = $(this).parents('.cont').index();
        $('.stepArea ul > li').eq(idx-1).removeClass('active')
        $('.stepArea ul > li').eq(idx).removeClass('active')
        $(this).parents('.cont').removeClass('active').prev('.cont').addClass('active')
    }
  })

  /* 신규등록 버튼 클릭 시 레이어 팝업이 보임 */
  $(".lnbContainer .btnArea").on({
    "click": function click() {
        $('.popup').show();
        $('#dimmed').show();
    }
  });

  /* 조회 버튼 클릭 시 레이어 팝업이 보임 */
  $(".table.effect td .inquire").on({
    "click": function click() {
        $('.popup').show();
        $('#dimmed').show();
    }
  });

  /* 검색 버튼 클릭 시 레이어 팝업이 보임 */
  $(".table.effect td .param").on({
    "click": function click() {
        $('.popup').show();
        $('#dimmed').show();
    }
  });

  /* 사용자 목록 팝업 테이블 이펙트 */
  $('.table.effect tr').on({
    "click":function click(){
        $(this).closest('tr').toggleClass('active').siblings('tr');
    }
  })

  /*팝업 , 얼럿 드래그 */
  $('.alert').draggable({
    cancel:'.cont',
    containment: "window"
  });
  $('.popup').draggable({
    cancel:'.popCont',
    containment: "window"
  });

  $('.tabContWrap.chImg .tabList li:first-child').on({
    "click":function (){
      $("#header").css({ "background-image":"url(../images/header/header-bg-01.png)" });
    }
  })

  $('.tabContWrap.chImg .tabList li:nth-child(2)').on({
    "click":function (){
      $("#header").css({ "background-image":"url(../images/header/header-bg-02.png)" });
    }
  })

  $('.tabContWrap.chImg .tabList li:nth-child(3)').on({
    "click":function (){
      $("#header").css({ "background-image":"url(../images/header/header-bg-03.png)" });
    }
  })

})




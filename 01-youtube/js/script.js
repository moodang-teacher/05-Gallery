$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');

  // 이미지를 저장한 배열을 생성
  const imgArr = [
    {
      title: `BLACKPINK - 'How You Like That' M/V`,
      video: 'https://www.youtube.com/embed/ioNng23DkIM',
      pic: 'https://res.heraldm.com/content/image/2023/04/25/20230425000549_0.jpg',
    },
    {
      title: '[MV] BIBI(비비) _ BINU(비누)',
      video: 'https://www.youtube.com/embed/3z9sq9e5iu4',
      pic: 'https://image.musinsa.com/mfile_s01/2021/05/13/3fb5ed13afe8714a7e5d13ee506003dd120913.jpg',
    },
    {
      title: `IVE 아이브 'LOVE DIVE' MV`,
      video: 'https://www.youtube.com/embed/Y8JFxS1HlDo',
      pic: 'https://img.wkorea.com/w/2021/11/style_6189ebb2d3726.jpg',
    },
    {
      title: `(여자)아이들((G)I-DLE) - 'TOMBOY' Official Music Video`,
      video: 'https://www.youtube.com/embed/Jh4QFaPmdss',
      pic: 'http://image.yes24.com/images/chyes24/froala/0/48248/58165.jpg',
    },
  ];

  // 접근 테스트
  console.log(imgArr[0].pic);

  $selectVideo.each(function (index, item) {
    setBgImage(item, index);
  });

  // $selectVideo를 클릭했을 때
  $selectVideo.on('click', function () {
    const videoIdx = $(this).index();
    setBgImage('body', videoIdx);

    // let videoLink = $(this).attr('data-link');
    let videoLink = imgArr[videoIdx].video;
    videoLink += '?autoplay=1';
    $video.attr('src', videoLink);

    const videoTitle = imgArr[videoIdx].title;
    $videoWrap.find('.video-title').text(videoTitle);

    $dim.fadeIn();
    $videoWrap.addClass('active');
  });

  // 닫기 버튼을 클릭했을 때
  $btnClose.on('click', () => {
    $dim.fadeOut();
    $videoWrap.removeClass('active');
    $video.attr('src', '');
    $videoWrap.find('.video-title').text('');
  });

  // 배경 이미지를 적용하는 공통의 동작을 함수로 정의
  function setBgImage(item, index) {
    $(item).css('background-image', `url(${imgArr[index].pic})`);
  }
});

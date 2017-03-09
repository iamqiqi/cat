$(document).ready(function() {
  var cats = [
      {
        clickCount : 0,
        name : 'cat1',
        imgSrc : 'images/cat1.jpg',
        imgAttribution : 'https://www.example.com/iuheweowi'
      },
      {
        clickCount : 0,
        name : 'cat2',
        imgSrc : 'images/cat2.jpg',
        imgAttribution : 'https://www.example.com/uygkkbkinu'
      },
      {
        clickCount : 0,
        name : 'cat3',
        imgSrc : 'images/cat3.jpg',
        imgAttribution : 'https://www.example.com/inugbyugjo'
      }
    ];

  for (let i=0; i < cats.length; i++) {
    let catName = $('<li>').attr('id', 'cat-'+i).text(cats[i].name).appendTo($('.menu'));

    catName.on('click', function() {
      $('.content').html("");
      let catWrapper = $('<div>').attr('class', 'cat-wrapper').appendTo($('.content'));
      let catTitle = $('<h3>').attr('class', 'title').text(cats[i].name).appendTo(catWrapper);
      let catImg = $('<img>').attr({
        src: cats[i].imgSrc,
        class: 'image-responsive',
        alt: cats[i].imgAttribution
      }).appendTo(catWrapper);
      let countDiv = $('<div>').appendTo(catWrapper);
      $('<h4>').text('count: ').appendTo(countDiv);
      let countValueTag = $('<h4>').text(cats[i].clickCount).appendTo(countDiv);
      catImg.on('click', function() {
        cats[i].clickCount++;
        countValueTag.text(cats[i].clickCount);
      });
    });
  }
});

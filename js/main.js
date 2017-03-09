$(document).ready(function() {
  var cat_names = ['cat1', 'cat2', 'cat3'];

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
  var counts = new Array(cat_names.length).fill(0);

  for (let i=0; i < cat_names.length; i++) {
    let catName = $('<li>').attr('id', 'cat-'+i).text(cat_names[i]).appendTo($('.menu'));

    catName.on('click', function() {
      $('.content').html("");
      let catWrapper = $('<div>').attr('class', 'cat-wrapper').appendTo($('.content'));
      let catTitle = $('<h3>').attr('class', 'title').text(cat_names[i]).appendTo(catWrapper);
      let catImg = $('<img>').attr({
        src: 'images/'+cat_names[i]+'.jpg',
        class: 'image-responsive',
        alt: cat_names[i]
      }).appendTo(catWrapper);
      let countDiv = $('<div>').appendTo(catWrapper);
      $('<h4>').text('count: ').appendTo(countDiv);
      let countValueTag = $('<h4>').text(counts[i]).appendTo(countDiv);
      catImg.on('click', function() {
        counts[i]++;
        countValueTag.text(counts[i]);
      });
    });
  }
});

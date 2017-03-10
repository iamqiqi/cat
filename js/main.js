$(document).ready(function() {
  var model = {
    currentCat: null,
    cats: [
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
    ]
  };

  var controller = {
    init: function() {
      view.render();
      // do render
    },
    catNameClick: function(catNum) {
      model.currentCat = model.cats[catNum];
      view.render();
    },
    catImgClick: function(currentCat) {
      currentCat.clickCount++;
      view.render();
    }
  };

  var view = {
    render: function() {
      $('.menu').html("");
      $('.content').html("");

      for (let i=0; i < model.cats.length; i++) {
        let $catName = $('<li>').attr('id', 'cat-'+i).text(model.cats[i].name).appendTo($('.menu'));
        $catName.on('click', function() {
          controller.catNameClick(i);
        });
      }

      if (model.currentCat) {
        let $catWrapper = $('<div>').attr('class', 'cat-wrapper').appendTo($('.content'));
        let $catTitle = $('<h3>').attr('class', 'title').text(model.currentCat.name).appendTo($catWrapper);
        let $catImg = $('<img>').attr({
          src: model.currentCat.imgSrc,
          class: 'image-responsive',
          alt: model.currentCat.imgAttribution
        }).appendTo($catWrapper);
        let $countDiv = $('<div>').appendTo($catWrapper);
        $('<h4>').text('count: ').appendTo($countDiv);
        let $countValueTag = $('<h4>').text(model.currentCat.clickCount).appendTo($countDiv);
        $catImg.on('click', function() {
          controller.catImgClick(model.currentCat);
        });
      }
    }
  };

  controller.init();
});

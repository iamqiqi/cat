  var controller = {
    init: function() {
      view.render();
    },
    catNameClick: function(catNum) {
      model.currentCat = model.cats[catNum];
      view.render();
    },
    catImgClick: function(currentCat) {
      currentCat.clickCount++;
      view.render();
    },
    saveCatInfo: function(newCatInfo) {
      model.currentCat = newCatInfo;
      view.render();
    },
    cancelCatInfo: function() {
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
        let $admin = $('<div>').attr('class', 'admin').appendTo($catWrapper);
        let $adminBtn = $('<button>').attr('class', 'admin-button').text('admin').appendTo($admin);
        $adminBtn.on('click', function() {
          $('.admin').html("");
          $('<div>').text('name: ').appendTo($admin);
          let $nameInput = $('<Input>').val(model.currentCat.name).appendTo($admin);
          $('<div>').text('image url: ').appendTo($admin);
          let $imgInput = $('<Input>').val(model.currentCat.imgSrc).appendTo($admin);
          $('<div>').text('#clicks: ').appendTo($admin);
          let $countInput = $('<Input>').val(model.currentCat.clickCount).appendTo($admin);
          let $submitCatInfo = $('<button>').attr('class', 'submit-cat-info').text('Save').appendTo($admin);
          let $cancelCatInfo = $('<button>').attr('class', 'cancel-cat-info').text('Cancel').appendTo($admin);
          $submitCatInfo.on('click', function() {
            let newCatInfo = {
              clickCount : $countInput.val(),
              name : $nameInput.val(),
              imgSrc : $imgInput.val(),
              imgAttribution : model.currentCat.imgAttribution
            };
            controller.saveCatInfo(newCatInfo);
          });
          $cancelCatInfo.on('click', function() {
            controller.cancelCatInfo();
          });
        });
        $catImg.on('click', function() {
          controller.catImgClick(model.currentCat);
        });
      }
    }
  };

  controller.init();


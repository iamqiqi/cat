document.addEventListener("DOMContentLoaded", function() {
  var cat_names = ['cat1', 'cat2'];
  var counts = new Array(cat_names.length).fill(0);

  for (let i=0; i < cat_names.length; i++) {
    let catWrapper = document.createElement('div');
    catWrapper.setAttribute('id', 'cat'+i);
    document.body.appendChild(catWrapper);

    let catTitle = document.createElement('h3');
    catTitle.innerHTML = cat_names[i];
    catWrapper.appendChild(catTitle);

    let catImg = document.createElement('img');
    catImg.setAttribute('src', 'images/'+cat_names[i]+'.jpg');
    catImg.setAttribute('alt', cat_names[i]);
    catWrapper.appendChild(catImg);

    let countDiv = document.createElement('div');
    catWrapper.appendChild(countDiv);

    let countTitle = document.createElement('h4');
    countTitle.innerHTML = 'count: ';
    countDiv.appendChild(countTitle);

    let countValue = document.createElement('h4');
    countValue.innerHTML = '0';
    countDiv.appendChild(countValue);

    catImg.addEventListener('click', function() {
      counts[i]++;
      countValue.innerHTML = counts[i];
    });


    // let catWrapper = $('<div>').attr('id', 'cat-'+i).appendTo($('body'));

    // $('<h3>').attr('class', 'title').text(cat_names[i]).appendTo(catWrapper);

    // let catImg = $('<img>').attr({
    //   src: 'images/'+cat_names[i]+'.jpg',
    //   class: 'image-responsive',
    //   alt: cat_names[i]
    // }).appendTo(catWrapper);

    // let countDiv = $('<div>').appendTo(catWrapper);

    // $('<h4>').text('count: ').appendTo(countDiv);

    // let countValueTag = $('<h4>').text('0').appendTo(countDiv);

    // catImg.on('click', function() {
    //   counts[i]++;
    //   countValueTag.text(counts[i]);
    // });
  }
});

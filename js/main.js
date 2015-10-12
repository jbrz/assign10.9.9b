(function () {

  console.log('It Works!');

}());


(function () {
  var templateString = $('#itemTemplate').text();
  var renderTemplate = _.template(templateString); 
  _.each(rootbeer.results, function (item){
     var itemHTML = renderTemplate(item);
    $('.thumbnails').append(itemHTML);
  });

  $('.rootbeer').mouseover( '.icons', function (event){
    console.log(event);
    $(this).find('#heart').removeClass('hideheart').addClass('goheart');
    $(this).find('#hamburger').removeClass('hideham').addClass('goham');
  });

  $('.rootbeer').mouseout( '.icons', function (event){
    console.log(event);
    $(this).find('#heart').addClass('hideheart').removeClass('goheart');
    $(this).find('#hamburger').addClass('hideham').removeClass('goham');
  });
});

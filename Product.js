$(document).ready(function () {
    var $list = $(".card-product-box .card").hide(),
      $curr;
  
    $(".button")
      .on("click", function () {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $curr = $list.filter("." + this.id).hide();
        $curr.slice(0, 4).show(400);
        $list.not($curr).hide(300);
      })
      .filter(".active")
      .click();
  
    $("#LoadMore").on("click", function () {
      $curr.filter(":hidden").slice(0, 4).slideDown("slow");
    });
  });



  $(document).ready(function () {
    var $list = $(".card-product-box .card").hide(),
      $curr;
  
    $(".button").on("click", function () {
      var $this = $(this);
      $this.addClass("active").siblings().removeClass("active");
      $curr = $list.filter("." + this.id).hide();
      $curr.slice(0, 4).show(400);
      $list.not($curr).hide(300);
    });
  
    $("#LoadMore").on("click", function () {
      $curr.filter(":hidden").slice(0, 4).slideDown("slow");
    });
  
    // Popup handling
    $(".btn").on("click", function () {
      $("#popup").fadeIn();
    });
  
    $("#close-popup").on("click", function () {
      $("#popup").fadeOut();
    });
  
    $("#confirm-buy").on("click", function () {
      // Add your logic for confirming the purchase
      alert("Product purchased!");
      $("#popup").fadeOut();
    });
  });














  $(document).ready(function () {
    var $list = $(".card-product-box .card").hide(),
      $curr;
  
    $(".button").on("click", function () {
      var $this = $(this);
      $this.addClass("active").siblings().removeClass("active");
      $curr = $list.filter("." + this.id).hide();
      $curr.slice(0, 4).show(400);
      $list.not($curr).hide(300);
    });
  
    // Trigger the click event on the "Load More" button when the page loads
    $("#LoadMore").click();
  
    $("#LoadMore").on("click", function () {
      $curr.filter(":hidden").slice(0, 4).slideDown("slow");
    });
  
    // Popup handling
    $(".btn").on("click", function () {
      $("#popup").fadeIn();
    });
  
    $("#close-popup").on("click", function () {
      $("#popup").fadeOut();
    });
  
    $("#confirm-buy").on("click", function () {
      // Add your logic for confirming the purchase
      alert("Product purchased!");
      $("#popup").fadeOut();
    });
  });
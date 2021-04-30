jeans();    // call to jeans function to displaying jeans data
watch();    // call to watch function to displaying watch data
shirt();    // call to shirt function to displaying shirt data
other();    // call to other function to displaying other type of data
categery();   // 

///////////////////////////////////////////////////////////////////jeans get
function jeans()   // defined jeans data for displaying jeans category 
{
  // used localStorage for getting Items
  var json = localStorage.getItem("data");
  var object = null;
  object = JSON.parse(json);  // parsed the data from the encoded string from localStorage
  var jean = '';
  // a loop to displaying the jeans based products with each containing the name, image price
  for (var i = 0; i < 3; i++) {
    // appending jean variable in the loop for getting data into a single string
    // object is the array of objects of the jean
    jean += '<div class="col-12 col-md-4 mb-4"><a href="' + object[i].proname + '.html" ><div class="card h-100"><img src="img/';
    jean += object[i].image; // image of the jeans
    jean += '" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
    jean += ' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
    jean += object[i].price; // price of the jeans
    jean += '</li></ul><a  class="h2 text-decoration-none text-dark text-center"><a  class="h2 text-decoration-none text-dark text-center">';
    jean += object[i].proname; // name of the jeans
    jean += '</a><p class="card-text"><b>PRK :</b>';
    jean += object[i].price; // price of the jeans
    jean += '</p><a  class="btn btn-info text-white"  onclick="add(' + i + ')">Add to cart</a></div></div></a></div>';

  }
  document.getElementById("jean").innerHTML = jean;      // writing the whole data to html

}
function watch() {     //  watch function for getting data about watches
  // used localStorage for getting Items
  var json = localStorage.getItem("data");
  // initialized and empty object for getting all the data from localStorage
  var object = null;
  object = JSON.parse(json);    // decoding the data from the encoded string
  var watch = '';
  // a loop to displaying the watch based products with each containing the name, image price
  for (var i = 6; i < 9; i++) {
    // appending watch variable in the loop for getting data into a single string
    // object is the array of objects of the watch
    watch += '<div class="col-12 col-md-4 mb-4"><a href="' + object[i].proname + '.html" ><div class="card h-100"><img src="img/';
    watch += object[i].image; // image of the watch
    watch += '" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
    watch += ' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
    watch += object[i].price; // price of the watch
    watch += '</li></ul><a  class="h2 text-decoration-none text-dark text-center"><a class="h2 text-decoration-none text-dark text-center">';
    watch += object[i].proname; // name of the watch
    watch += '</a><p class="card-text"><b>PRK :</b>';
    watch += object[i].price;  // price of the watch
    watch += '</p><a  class="btn btn-info text-white" onclick="add(' + i + ')">Add to cart</a></div></div></a></div>';

  }
  document.getElementById("watch").innerHTML = watch;  // sending all the watches data to html

}
function shirt() {  // shirt function for displaying all the data related to watches
  // used localStorage for getting Items
  var json = localStorage.getItem("data");
  var object = null;
  object = JSON.parse(json);  //  decoding the data from the encoded string
  var shirt = '';
  // a loop to displaying the shirt based products with each containing the name, image price
  for (var i = 3; i < 6; i++) {
    // appending shirt variable in the loop for getting data into a single string
    // object is the array of objects of the shirt
    shirt += '<div class="col-12 col-md-4 mb-4"><a href="' + object[i].proname + '.html" ><div class="card h-100"><img src="img/';
    shirt += object[i].image; // image of the shirt
    shirt += '" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
    shirt += ' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
    shirt += object[i].price; // price of the shirt
    shirt += '</li></ul><a class="h2 text-decoration-none text-dark text-center"><a  class="h2 text-decoration-none text-dark text-center">';
    shirt += object[i].proname; // name of the shirt
    shirt += '</a><p class="card-text"><b>PRK :</b>';
    shirt += object[i].price;  // price of the shirt
    shirt += '</p><a  class="btn btn-info text-white" onclick="add(' + i + ')">Add to cart</a></div></div></a></div>';

  }
  document.getElementById("shirt").innerHTML = shirt; // writing all the shirts data to the html

}
function other() {    // All the products except the three above categories will be displayed in this category
  // used localStorage
  var json = localStorage.getItem("data");
  var object = null;    //  an empty object variable for holding the data of other products
  object = JSON.parse(json);    //  decoded the encoded string of other products
  var other = '';
  // a loop to displaying the other products with each containing the name, image price
  for (var i = 9; i < object.length; i++) {
    // appending other variable in the loop for getting data into a single string
    // object is the array of objects of the other products
    other += '<div class="col-12 col-md-4 mb-4"><a href="' + object[i].proname + '.html" ><div class="card h-100"><img src="img/';
    other += object[i].image;  // image of other products
    other += '" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
    other += ' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
    other += object[i].price; // price of other products
    other += '</li></ul><a  class="h2 text-decoration-none text-dark text-center"><a  class="h2 text-decoration-none text-dark text-center">';
    other += object[i].proname; // name of other products
    other += '</a><p class="card-text"><b>PRK :</b>';
    other += object[i].price;  // price of other products
    other += '</p><a class="btn btn-info text-white" onclick="add(' + i + ')">Add to cart</a></div></div></a></div>';

  }
  document.getElementById("other").innerHTML = other;  //  Writing all the above data to html object
}

function categery() {  // for filtering products from a category

  // used localStorage from native javascript
  var json = localStorage.getItem("data");
  var object = null;   // initialized object vakue with null
  object = JSON.parse(json);   // decoded the encoded string to list of objects
  // took a categery variable for initializing the dropdown for categories
  var categery = '<br><br><label>Select Option for Sreach Product</label><select class="form-control" style="width: 30%;" onchange="getdata(this.value)"><option>Choose Option<option>';
  for (var i = 0; i < object.length; i++) { // a loop for each category to append
    categery += "<option>" + object[i].proname + "</option>";
  }
  categery += "</select>";  //  end of select tag
  document.getElementById("categery").innerHTML = categery;  // writing the categories data to html
}

function getdata(value) {  // function to display a specific product data
  dt = value;               // product name input

  if (dt == "Choose Option") {
    window.location.href = "shop.html"; //  a check for if user selects choose option user will redirected to shop

  }
  else if (dt == "") { }  // if dt variable is empty this method will do nothing
  else {
    var j;
    var dta = localStorage.getItem("data");  // getting data from the localStorage
    var obj = null;
    obj = JSON.parse(dta);
    var select = '';
    for (var i = 0; i < obj.length; i++) {

      if (obj[i].proname == dt) {  // compares the product name from "dt" if it matches 
        j = i;                    // the system will capture the value of "j" and used the index for displaying the
        // product regards to that
      }
    }


    select += '<div class="container py-5"><div class="row text-center py-3"><div class="col-lg-6 m-auto"><h1 class="h1"><b>Product</b></h1></div></div><div class="row">';
    select += '<a href="' + obj[j].proname + '.html" ><div class="col-12 col-md-4 mb-4"><div class="card h-100"><img src="img/';
    select += obj[j].image; // "j" index product image
    select += '" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
    select += ' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
    select += obj[j].price; // "j" index product price
    select += '</li></ul><a  class="h2 text-decoration-none text-dark text-center"><a  class="h2 text-decoration-none text-dark text-center">';
    select += obj[j].proname; // "j" index product name
    select += '</a><p class="card-text"><b>PRK :</b>';
    select += obj[j].price;   // "j" index product price
    select += '</p><a class="btn btn-info text-white"  onclick="add(' + j + ')">Add to cart</a></div></div></div></div></a></div>';

    document.getElementById("select").innerHTML = select;     // writing all the data to html
  }
}
///////////////////////////////////////////////
function add(value) {  // adding item to cart
  // used localStorage for cart
  var json = localStorage.getItem("data");    // reading data from localStorage
  var object = null;
  object = JSON.parse(json);  // decode the encoded string
  var other = '';
  for (var i = 0; i < object.length; i++) {   //  traversing the array

    if (i == value) {
      j = i;      // j variable for tracking the index for the value found

    }

  }
  object[j].qatuntiy = object[j].qatuntiy + 1;  // updates the quantity to the card

  localStorage.setItem("data", JSON.stringify(object)); // setting the data to the localStorage
}

function showcart() {     // displaying the items in the cart
  var json = localStorage.getItem("data");
  var object = null;
  object = JSON.parse(json);    // getting the decoded list from the encoded string
  var showcart = '';          // an empty variable for showing cart
  for (var i = 0; i < object.length; i++) {

    if (object[i].qatuntiy != 0) {  // it will append data to showcart if the quantity is not 0
      showcart += ' <li class="clearfix"><img src="img/' + object[i].image + '" alt="item1" style="width: 20%;height: 6+0px;" /><span class="item-name">';
      showcart += object[i].proname;    // cart product name
      showcart += '</span><span class="item-price">PRK :';
      showcart += object[i].price;  // cart product price
      showcart += '</span><br><span class="item-quantity">Quantity :';
      showcart += object[i].qatuntiy;   // cart product quantity
      showcart += '</span></li>';

    }

  }
  document.getElementById("showcart").innerHTML = showcart;  // writing cart data to html cart element

}
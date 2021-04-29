
 
     jeans();
     watch();
     shirt();
     other();
     categery();

///////////////////////////////////////////////////////////////////jeans get
function jeans()
{
      var json=localStorage.getItem("data");
      var object=null;
      object=JSON.parse(json);
       var jean='';
      for (var i =0; i<3; i++) {
        jean+='<div class="col-12 col-md-4 mb-4"><a href="'+object[i].proname+'.html" ><div class="card h-100"><img src="img/';
        jean+=object[i].image;
       jean+='" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
      jean+=' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
          jean+=object[i].price;
          jean+='</li></ul><a  class="h2 text-decoration-none text-dark text-center"><a  class="h2 text-decoration-none text-dark text-center">';
          jean+=object[i].proname;
          jean+='</a><p class="card-text"><b>PRK :</b>';
          jean+=object[i].price;
          jean+='</p><a  class="btn btn-info text-white"  onclick="add('+i+')">Add to cart</a></div></div></a></div>';
         
      }
      document.getElementById("jean").innerHTML=jean;
      
}
function watch()
{
      var json=localStorage.getItem("data");
      var object=null;
      object=JSON.parse(json);
       var watch='';
      for (var i =6; i<9; i++) {
        watch+='<div class="col-12 col-md-4 mb-4"><a href="'+object[i].proname+'.html" ><div class="card h-100"><img src="img/';
        watch+=object[i].image;
       watch+='" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
      watch+=' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
          watch+=object[i].price;
          watch+='</li></ul><a  class="h2 text-decoration-none text-dark text-center"><a class="h2 text-decoration-none text-dark text-center">';
          watch+=object[i].proname;
          watch+='</a><p class="card-text"><b>PRK :</b>';
          watch+=object[i].price;
          watch+='</p><a  class="btn btn-info text-white" onclick="add('+i+')">Add to cart</a></div></div></a></div>';
         
      }
      document.getElementById("watch").innerHTML=watch;
      
}
function shirt()
{
      var json=localStorage.getItem("data");
      var object=null;
      object=JSON.parse(json);
       var shirt='';
      for (var i =3; i<6; i++) {
        shirt+='<div class="col-12 col-md-4 mb-4"><a href="'+object[i].proname+'.html" ><div class="card h-100"><img src="img/';
        shirt+=object[i].image;
       shirt+='" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
      shirt+=' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
          shirt+=object[i].price;
          shirt+='</li></ul><a class="h2 text-decoration-none text-dark text-center"><a  class="h2 text-decoration-none text-dark text-center">';
          shirt+=object[i].proname;
          shirt+='</a><p class="card-text"><b>PRK :</b>';
          shirt+=object[i].price;
          shirt+='</p><a  class="btn btn-info text-white" onclick="add('+i+')">Add to cart</a></div></div></a></div>';
         
      }
      document.getElementById("shirt").innerHTML=shirt;
      
}
function other()
{
  var json=localStorage.getItem("data");
      var object=null;
      object=JSON.parse(json);
       var other='';
      for (var i =9; i<object.length; i++) {
        other+='<div class="col-12 col-md-4 mb-4"><a href="'+object[i].proname+'.html" ><div class="card h-100"><img src="img/';
        other+=object[i].image;
       other+='" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
      other+=' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
          other+=object[i].price;
          other+='</li></ul><a  class="h2 text-decoration-none text-dark text-center"><a  class="h2 text-decoration-none text-dark text-center">';
          other+=object[i].proname;
          other+='</a><p class="card-text"><b>PRK :</b>';
          other+=object[i].price;
          other+='</p><a class="btn btn-info text-white" onclick="add('+i+')">Add to cart</a></div></div></a></div>';
         
      }
      document.getElementById("other").innerHTML=other;
}

function categery()
{
  var json=localStorage.getItem("data");
      var object=null;
      object=JSON.parse(json);
       var categery='<br><br><label>Select Option for Sreach Product</label><select class="form-control" style="width: 30%;" onchange="getdata(this.value)"><option>Choose Option<option>';
       for (var i =0; i<object.length; i++) {
          categery+="<option>"+ object[i].proname +"</option>";
      }
      categery+="</select>";
      document.getElementById("categery").innerHTML=categery;
}

function getdata(value)
{
        dt=value;
       
        if(dt=="Choose Option")
        {
          window.location.href = "shop.html";
          
        }
        else if(dt=="")
        {}
        else
        {
        var j;
        var dta=localStorage.getItem("data");
          var obj=null;
           obj=JSON.parse(dta);
           var select='';
           for (var i =0; i<obj.length; i++) {
              
                if(obj[i].proname==dt)
                {     
                       j=i;    
                }
            }
           
           
          select+='<div class="container py-5"><div class="row text-center py-3"><div class="col-lg-6 m-auto"><h1 class="h1"><b>Product</b></h1></div></div><div class="row">';
          select+='<a href="'+obj[j].proname+'.html" ><div class="col-12 col-md-4 mb-4"><div class="card h-100"><img src="img/';
          select+=obj[j].image;
          select+='" class="card-img-top" alt="..." style="width: auto;height: 250px;margin-left:60px;"><div class="card-body text-center">';
          select+=' <ul class="list-unstyled d-flex justify-content-between"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li><li class="text-muted text-right"><b>PRK :</b>';
          select+=obj[j].price;
          select+='</li></ul><a  class="h2 text-decoration-none text-dark text-center"><a  class="h2 text-decoration-none text-dark text-center">';
          select+=obj[j].proname;
          select+='</a><p class="card-text"><b>PRK :</b>';
          select+=obj[j].price;
          select+='</p><a class="btn btn-info text-white"  onclick="add('+j+')">Add to cart</a></div></div></div></div></a></div>';

           document.getElementById("select").innerHTML=select;
        }
}
///////////////////////////////////////////////
function add(value)
{
 
  var json=localStorage.getItem("data");
      var object=null;
      object=JSON.parse(json);
       var other='';
      for (var i =0; i<object.length; i++) {
        
        if(i==value)
                {     
                       j=i; 
                       
                }
         
      }
     object[j].qatuntiy=object[j].qatuntiy+1;

localStorage.setItem("data", JSON.stringify(object));
alert("add item");
}

function showcart()
{
   var json=localStorage.getItem("data");
      var object=null;
      object=JSON.parse(json);
       var showcart='';
      for (var i =0; i<object.length; i++) {
        
        if(object[i].qatuntiy!=0)
                {     
                       showcart+=' <li class="clearfix"><img src="img/'+object[i].image+'" alt="item1" style="width: 20%;" /><span class="item-name">';
                       showcart+=object[i].proname;
                       showcart+='</span><span class="item-price">PRK :';
                       showcart+=object[i].price;
                       showcart+='</span><br><span class="item-quantity">Quantity :';
                       showcart+=object[i].qatuntiy;
                       showcart+='</span></li>';
                       
                }
         
      }
      document.getElementById("showcart").innerHTML=showcart;

}
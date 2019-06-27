$(document).ready(function () {

  $(".catagories").click(function(){
    $(".catagoriya-section").css({top: "0"});
  })

  $("#removeCatagoria").click(function(){
    $(".catagoriya-section").css({top: "-100%"});
  });



  let menuWidth = $(".right-menu-mobile").width() + "px";

  $("#openMenu").click(function () {
    $(".right-menu-mobile").css({
      right: "0"
    });
    $(".layer").addClass("layer-btn");
  })

  $("#removeMenu").click(function () {
    $(".right-menu-mobile").css({
      right: `-${menuWidth}`
    });
    $(".layer").removeClass("layer-btn");
  });

  $(".layer").click(function () {
    $(".right-menu-mobile").css({
      right: `-${menuWidth}`
    });
    $(".layer").removeClass("layer-btn");
  });

  let nav = $("#navs li");
  for (let i = 0; i < nav.length; i++) {
    $(`#nav${i}`).click(function () {
      for (let j = 0; j < $(`.partniers-val`).length; j++) {
        $(`#partniers-val${j}`).hide();
        $(`#nav${j}`).removeClass("active");
      }
      $(`#partniers-val${i}`).show(1000)
      $(`#nav${i}`).addClass("active");
    })

  };

  let contactBtn = $("#contact-btn");


  contactBtn.click(function () {
    let contactName = $("#inputs .c-input");
    let mesenger = $(".mesenger-text");
    for (let i = 0; i < contactName.length; i++) {
      console.log(mesenger)
      if (contactName[i].value == "") {
        contactName[i].style.borderColor = "red";
        $(".c-text")[i].style.display = "block";
      } 
      
      else {
        contactName[i].style.borderColor = "#103458";
        $(".c-text")[i].style.display = "none"
      }
    }

    if($('.c-text').css('display') == 'none' ){
      $("#popap").addClass("popap-active");
      $(".c-input").val("");

      setInterval(function(){
        $("#popap").removeClass("popap-active");
        window.location.reload(1);
      }, 3000);

    }

  })

  $(".optain").click(function () {
    $(".optain-layer").addClass("optain-layer-show")
    $("#optain-section1").show().css({display: "flex"})
  });

  $("#simple").change(function(){
    if($("#simple").val() == "10"){
      $("#simpleh1").text("20 AZN");
    }
    else{
      $("#simpleh1").text("50 AZN");
    }
  })

  $(".optain1").click(function () {
    $(".optain-layer").addClass("optain-layer-show")
    $("#optain-section2").show().css({display: "flex"})
  });

  $("#silver").change(function(){
    if($("#silver").val() == "10"){
      $("#silverh1").text("20 AZN");
      document.getElementById("silver1").disabled = true;
      $("#silver1").addClass("select-displed");

    }

    else if($("#silver").val() == "1-il"){
      $("#silverh1").text("300 AZN");
      document.getElementById("silver1").disabled = false;
      $("#silver1").removeClass("select-displed");

    }

    else{
      $("#silverh1").text("50 AZN");
      document.getElementById("silver1").disabled = true;
      $("#silver1").addClass("select-displed");
    }
  })

  $("#silver1").change(function(){
    if($("#silver1").val() == "1"){
      $("#silverh1").text("30 AZN");
    }
    else{
      $("#silverh1").text("300 AZN");
    }
  })

  $(".optain2").click(function () {
    $(".optain-layer").addClass("optain-layer-show")
    $("#optain-section3").show().css({display: "flex"})
  });

  $("#gold").change(function(){
    if($("#gold").val() == "1"){
      $("#goldh1").text("50 AZN");
      document.getElementById("gold1").disabled = true;
    }

    else if($("#gold").val() == "1-il"){
      $("#goldh1").text("300 AZN");
      document.getElementById("gold1").disabled = true;      
    }

    else{
      $("#goldh1").text("800 AZN");
      document.getElementById("gold1").disabled = false;
    }
  })

  $("#gold1").change(function(){
    if($("#gold1").val() == "1"){
      $("#goldh1").text("20 AZN");
    }
    else{
      $("#goldh1").text("800 AZN");
    }
  })

  $(".remove-popap i").click(function(){
    $(".optain-layer").removeClass("optain-layer-show");
    $(".optain-section").hide();
    $(".optain-popap input").css({borderColor: "#103458"});
  });



  let optainBtn = $(".optain-popap button");


  optainBtn.click(function () {
    let optainName = $(".optain-popap input");
    for (let i = 0; i < optainName.length; i++) {
      if (optainName[i].value == "") {
        optainName[i].classList.add("p-activ");
      }       
      else {
        optainName[i].classList.remove("p-activ");
        optainName[i].classList.add("p-remove");
        $("#popap1").addClass("popap-active1");

        setInterval(function(){
          $("#popap1").removeClass("popap-active1");
          $(".optain-section").hide();
          $(".optain-layer").removeClass("optain-layer-show");
          window.location.reload(1);
        }, 3000);
      }


    }

  })

  let goBtn = $("#go-button");

  $(".abouts-input").val("");

  goBtn.click(function () {
    let incarnationName = $(".incarnation .abouts-input");

    for (let i = 0; i < incarnationName.length; i++) {
      if (incarnationName[i].value == "") {
        incarnationName[i].style.borderColor = "red";
      } else {
        incarnationName[i].style.borderColor = "#103458";
        $("#popap2").addClass("popap-active2");
        incarnationName.val("");

        setInterval(function(){
          $("#popap2").removeClass("popap-active2");
          $(".abouts-input").css({borderColor: "#103458"});
          window.location.reload(1);
        }, 3000);

      }
    }

  })





  $(".about-btn").click(function(){
    let inputval1 = $("#about-name").val();
    let inputval3 = $("#about-text").val();


  if($(".abour-inputs .about-iputs").val() == "" ){
    $(".abour-inputs .about-iputs").css({borderColor: "red"});
  }
    
  else{
    $("#about-name").val("");
    $("#about-text").val("");
    $(".thought-t").append(`<div class="thought"> <div class="d-flex justify-content-between"><h5>${inputval1.slice(0,1).toUpperCase()+inputval1.slice(1)}</h5> <div class="d-flex"> <p class="m-0 py-1 thumbs-text">0</p> <div class="thumbs"> <i  class="fas fa-thumbs-up "></i></div></div></div><h6></h6> <p class="thumbs-p"> ${inputval3}</p></div> `)
  
    let thumbs = $(".thumbs");
    let thumbsText = $(".thumbs-text")
      thumbs.on('click', function(){
        thumbsText.text(0+1)
        thumbs.css({color: "blue"})
      })
    $(".abour-inputs .about-iputs").css({borderColor: "#103458"});
  }
    
      
  
  })
 
let partData1 = $("#part1");
  let partData = $(".part-data");
  let partData2 = $(".part-data2");
  let partData3 = $(".part-data3");
  let partSelect = $(".parners-select");
  let partniers = $(".partniers");
  let menyu1 = $("#menyu1");
  let menyu2 = $("#menyu2");
  let menyu3 = $("#menyu3");


  let part = data;
  for (let i = 0; i < part.length; i++) {
    partData.append(`<div class="partniers"> <img src="${part[i].img}" alt=""> <div class="d-flex justify-content-center align-items-center"><h4 class="mr-3">${part[i].name}</h4> <h5>${part[i].percent} % </h5> </div><a href="${part[i].sayt}">${part[i].saytName}</a> </div>`)
    menyu1.append(`<li><a href="${part[i].sayt}">${part[i].name}</a></li>`);
  }
  partSelect.change(function () {
    if(partSelect.val() == "15"){
      partData1.empty();
      for (let i = 0; i < part.length; i++) {
        if(part[i].percent > 19){
          partData1.append(`<div class="partniers"> <img src="${part[i].img}" alt=""> <div class="d-flex justify-content-center align-items-center"><h4 class="mr-3">${part[i].name}</h4> <h5>${part[i].percent} % </h5> </div><a href="${part[i].sayt}">${part[i].saytName}</a> </div>`)
        }
      }
    }

    else if(partSelect.val() == "20"){
      partData1.empty();
      for (let i = 0; i < part.length; i++) {
        if(part[i].percent > 10 && part[i].percent < 25){
          partData1.append(`<div class="partniers"> <img src="${part[i].img}" alt=""> <div class="d-flex justify-content-center align-items-center"><h4 class="mr-3">${part[i].name}</h4> <h5>${part[i].percent} % </h5> </div><a href="${part[i].sayt}">${part[i].saytName}</a> </div>`)
        }
      }
    }

    else{
      partData1.empty();
      for (let i = 0; i < part.length; i++) {
        partData1.append(`<div class="partniers"> <img src="${part[i].img}" alt=""> <div class="d-flex justify-content-center align-items-center"><h4 class="mr-3">${part[i].name}</h4> <h5>${part[i].percent} % </h5> </div><a href="${part[i].sayt}">${part[i].saytName}</a> </div>`)
      }
    }
  });
  
  

  let part2 = data2
  for (let i = 0; i < part2.length; i++) {
    partData2.append(`<div class="partniers"> <img src="${part2[i].img}" alt=""> <div class="d-flex justify-content-center align-items-center"><h4 class="mr-3">${part2[i].name}</h4> <h5>${part2[i].percent} % </h5> </div><a href="${part2[i].sayt}">${part2[i].saytName}</a> </div>`)
    menyu2.append(`<li><a href="${part2[i].sayt}">${part2[i].name}</a></li>`);
    
  }

  let part3 = data3
  for (let i = 0; i < part3.length; i++) {
    partData3.append(`<div class="partniers"> <img src="${part3[i].img}" alt=""> <div class="d-flex justify-content-center align-items-center"><h4 class="mr-3">${part3[i].name}</h4> <h5>${part3[i].percent} % </h5> </div><a href="${part3[i].sayt}">${part3[i].saytName}</a> </div>`)
    menyu3.append(`<li><a href="${part3[i].sayt}">${part3[i].name}</a></li>`);    
  
  }







});


function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.674,
      lng: -73.945
    },
    zoom: 12,
    styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8ec3b9"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1a3646"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#4b6878"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#64779e"
        }]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#4b6878"
        }]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#334e87"
        }]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "color": "#023e58"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#283d6a"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6f9ba5"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#023e58"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3C7680"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#304a7d"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#98a5be"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2c6675"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#255763"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#b0d5ce"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#023e58"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#98a5be"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#283d6a"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3a4762"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#0e1626"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#4e6d70"
        }]
      }
    ]
  });
}

function myFunction() {
    let input, filter, catagoriya, li, a, i;
    input = document.getElementById("mysearch");
    catagoriya = document.querySelectorAll(".catagoriya-text a");
    filter = input.value.toUpperCase();
    for(i = 0; i < catagoriya.length; i++){
      if (catagoriya[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        catagoriya[i].style.display = "";
      } else {
        catagoriya[i].style.display = "none";
      }
    }
  }

  
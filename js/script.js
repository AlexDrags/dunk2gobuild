const slider=document.querySelector(".uislider");let valueElementMin=document.querySelector(".price-form__value-min"),valueElementMax=document.querySelector(".price-form__value-max");function getValueSlider(){let e=slider.noUiSlider.get(!0);valueElementMin.value=Math.round(e[0]),valueElementMax.value=Math.round(e[1])}slider.value=0,noUiSlider.create(slider,{start:[0,900],connect:!0,range:{min:0,max:1100}}),slider.noUiSlider.on("slide",getValueSlider);const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),map=L.map("map").on("load",(()=>{console.log("Init map")})).setView({lat:59.96819,lng:30.31754},19);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);const mapPin=L.icon({iconUrl:"./img/map-pin.svg",iconSize:[38,50],iconAnchor:[19,50]}),nameTitle={title:"Санкт-Петербург, набережная реки Карповки, дом 5"},marker=L.marker({lat:59.96831,lng:30.31748},{draggable:!1,icon:mapPin}).addTo(map).bindPopup(nameTitle.title);marker.on("moveend",(e=>{console.log(e.target.getLatLng())}));const mainNav=document.querySelector(".main-nav__list"),menuButton=document.querySelector(".button-js"),buttonOpen=document.querySelector(".menu-js"),buttonClose=document.querySelector(".close-js");function onClickHandler(e){e.preventDefault(),buttonOpen.classList.toggle("button-menu__icon--close"),buttonClose.classList.toggle("button-menu__icon--close"),mainNav.classList.toggle("main-nav__list--open-js")}mainNav.classList.contains("main-nav__list-nojs--open")&&(mainNav.classList.remove("main-nav__list-nojs--open"),buttonClose.classList.add("button-menu__icon--close")),menuButton.addEventListener("click",onClickHandler);const countryList=document.querySelectorAll(".tumbler-list__country");function getChecked(e){e.target.hasAttribute("checked")||e.target.setAttribute("checked")}for(country of countryList)country.addEventListener("click",getChecked(evt));
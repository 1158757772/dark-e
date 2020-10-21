var sc=$('nav').children().eq(0).children().eq(6).children().eq(1);
if(localStorage.getItem("city")){
    sc.html(localStorage.getItem("city"))
}

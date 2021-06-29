
let renderJson = function (data) {
    headerTop(data.header);
    logosTitleSection(data.logoTitleSection);
    leftRightSection(data.leftRightSection);
    ManageWork(data.ManageWork);
    Requirement(data.RequirementSection);
    FooterAbove(data.AboveFooter);
    BelowFooter(data.BelowFooter);
    owlCrousel(data.owlCrousel);

};


let headerTop = (data) =>{
    $.each(data, function(key, value) {
        let htmlRender =   "<div class='header-background'>" +
            "<div class='header-container'>" +
            "<div class='header-con'>"+
            "<div class='header-logo'>"+
            "<img src='"+value.companyLogo+"'>"+
            "</div>"+
            " <div class='checkbtn'>"+
            " <i id='icon' onclick='Myfunction()'  class='fa fa-bars'></i>"+
            " </div>"+
            " <div class='crossbtn'>"+
            " <i id='icon'  onclick='hidemenu()' class='fa fa-times'></i>"+
            " </div>"+
            "<div class='header-links'>"+
            "<ul>"+
                "<li >"+"<a href=\"#\">"+value.link1+"</a>"+"</li>"+
                "<li>"+"<a href=\"#\">"+value.link2+"</a>"+"</li>"+
                "<li>"+"<a href=\"#\">"+value.link3+"</a>"+"</li>"+
                "<li>"+"<a href=\"#\">"+value.link4+"</a>"+"</li>"+
                "<li>"+"<a href=\"#\">"+value.link5+"</a>"+"</li>"+
             "</ul>"+

            "</div>"+

            "</div>"+
            "</div>"+
            "<div id='show-mobile-menu' class='header-links-mobile'>"+
            "<ul>"+
            "<li>"+"<a href=\"#\">"+value.link1+"</a>"+"</li>"+
            "<li>"+"<a href=\"#\">"+value.link2+"</a>"+"</li>"+
            "<li>"+"<a href=\"#\">"+value.link3+"</a>"+"</li>"+
            "<li>"+"<a href=\"#\">"+value.link4+"</a>"+"</li>"+
            "<li>"+"<a href=\"#\">"+value.link5+"</a>"+"</li>"+
            "</ul>"+

            "</div>"+
            "<div class='banner-container'>"+
            "<h2>"+ value.bannerTitle +"</h2>"+
            "<p>"+ value.bannerDescription +"</p>"+
            "</div>"+
            "</div>";
        $(htmlRender).appendTo("#header1");
    });
}

let logosTitleSection = (data) =>{
    $.each(data, function(key,value){
        let htmlRender = "<div class='logo-title-section'>"+
            "<div class='logo-title-heading'>"+
            "<h2>"+ value.mainHeading +"</h2>"+
            "<p >"+value.mainDesc+"</p>"+
            "</div>"+
            "<div class='logo-title-flex-section'>" +
            "<div class='logo-title-container'>" +
            "<img src='"+value.icon1+"'>"+
            "<h4 >"+value.heading1+"</h4>"+
            "<p >"+value.description1+"</p>"+
            "</div>"+
            " <div class=\"vl\"></div>"+
            "<div class='logo-title-container'>" +
            "<img src='"+value.icon2+"'>"+
            "<h4>"+value.heading2+"</h4>"+
            "<p>"+value.description2+"</p>"+
            "</div>"+
            " <div class=\"vl\"></div>"+
            "<div class='logo-title-container'>" +
            "<img src='"+value.icon3+"'>"+
            "<h4>"+value.heading3+"</h4>"+
            "<p>"+value.description3+"</p>"+
            "</div>"+
            "</div>"+
            "</div>";
        $(htmlRender).appendTo("#logoSection");
    });
}

let leftRightSection = (data) =>{
       $.each(data, function (key,value){
           let htmlRender =  "<div class='left-right-main-container'>"+
               "<h4>"+ value.HeadingSection +"</h4>"+
               "<p>"+value.DescriptionSection+"</p>"+
               "<div class='heading-line'>"+
               "<img src='"+value.headingImg+"'>"+
               "</div>"+
               "<div class='left-right-container'>"+
               "<div class='left-image-container'>"+
               "<img src='"+value.Leftimg+"'>"+
               "</div>"+
               "<div class='right-description'>" +
                  "<p>"+value.RightDesc+"</p>"+
              " </div>"+
               " </div>"+
          " </div>";
       $(htmlRender).appendTo("#leftrightSection");
       }) ;
}

let ManageWork = (data) =>{
    $.each(data, function (key,value){
        let htmlRender = "<div class='manage-work-section'>"+
            "<div class='manage-work-right-section'>"+
                "<h2>"+ value.WorkHeading +"</h2>"+
            "</div>"+
            "<div class='manage-work-left-section'>"+
               " <div class='manage-work-container'>"+
                   "<p>"+value.p1 +"</p>"+
                   "<p>"+value.p2 +"</p>"+
                   "<p>"+value.p3 +"</p>"+
                   "<p>"+value.p4 +"</p>"+
                   "<p>"+value.p5 +"</p>"+
                "</div>"+
           " </div>"+
       " </div>";

            $(htmlRender).appendTo("#ManageWorkSection");
    })  ;
};

let Requirement = (data) => {
    $.each(data, function (key,value){
        let htmlRender = "<div class = 'requirement-section'>"+
            "<h2>"+ value.requirementHeading+"</h2>"+
          "  <input type='text' placeholder = 'Your Email' />"+" <br/>"+"<br/>"+
            "<input type='text' placeholder='I would like to develop a website'/>"+"<br/>"+
           " <button type='button'>"+value.buttonText+"</button>"+
       " </div>";

            $(htmlRender).appendTo('#RequirementSection');
    });
}

let FooterAbove = (data) => {
    $.each(data , function (key , value){
        let htmlRender = "<div class='footer'>"+
            "<div class='footer-logo'>"+
            "<img src='"+value.logoFooter+"'>"+
            "<h5>"+ value.FooterAddress +"</h5>"+
            "<a>"+value.FooterEmail +"</a>"+
           " </div>"+

           " <div class='footer-menu'>"+
            "<h4>"+ value.FooterHeading +"</h4>"+
            "<ul>"+
            "<li>"+"<a href=\"#\">"+value.footerLink1+"</a>"+"</li>"+
            "<li>"+"<a href=\"#\">"+value.footerLink2+"</a>"+"</li>"+
            "<li>"+"<a href=\"#\">"+value.footerLink3+"</a>"+"</li>"+
            "<li>"+"<a href=\"#\">"+value.footerLink4+"</a>"+"</li>"+
            "<li>"+"<a href=\"#\">"+value.footerLink5+"</a>"+"</li>"+
            "</ul>"+
           " </div>"+
           " <div class='footer-social-media'>"+
                <!-- Add font awesome icons -->
                "<a href='#' class='fa fa-facebook'></a>"+
                "<a href= '#' class='fa fa-twitter'></a>"+
               " <a href='#' class='fa fa-linkedin'></a>"+
                "<a href='#' class='fa fa-youtube'></a>"+
                "<a href= '#' class='fa fa-instagram'></a>"+
           " </div>"+
      "  </div>"
        $(htmlRender).appendTo("#FooterAbove");
    })
}

let BelowFooter = (data) =>{
    $.each(data, function (key,value){
        let htmlRender = "<div class='below-footer'>"+
            "<p>"+ value.FooterDesc +"</p>"+
        "</div>"
        $(htmlRender).appendTo("#FooterBelow");
    })
}
let owlCrousel = (data) =>{
    $.each(data, function (key,value){
        let htmlRender = "<div class='wrapper'>"+
            "<h2>"+ value.owlHeading +"</h2>"+
           " <div class='carousel owl-carousel'>"+
                "<div class='card card-1'>"+
                   " <a><img src='"+value.owlimg1+"'></a>"+
               " </div>"+
                 "<div class='card card-2'>"+
                 " <a>"+"<img src='"+value.owlimg2+"'>"+"</a>"+
                  " </div>"+
                   "<div class='card card-3'>"+
                 " <a>"+"<img src='"+value.owlimg3+"'>"+"</a>"+
                 " </div>"+
                  "<div class='card card-4'>"+
                   " <a>"+"<img src='"+value.owlimg4+"'>"+"</a>"+
                 " </div>"+
                  "<div class='card card-5'>"+
                  " <a>"+"<img src='"+value.owlimg5+"'>"+"</a>"+
                 " </div>"+
                 "  </div>"+
                 "  </div>"

        $(htmlRender).appendTo("#owlCrousel");
    })
}

let fetchtemplate = () => {
    $.ajax({
        url: 'template.json',
        dataType: 'json',
        success: function( data ) {
            renderJson(data);
            console.log(data)
        },

    });
};

fetchtemplate();



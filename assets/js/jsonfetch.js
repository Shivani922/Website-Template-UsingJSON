
let renderJson = function (data) {
    headerTop(data.header);
    FooterAbove(data.AboveFooter);
    BelowFooter(data.BelowFooter);

    //  Desktop Menu
    let headerData = data.header[0].Menus;
    const headerDataUpdated = [];
    for (let i = 0; i < headerData.length; i++) {
        if (headerData[i].isMenuShow === true) {
            headerDataUpdated.push(headerData[i]);
        }
    }
    headerMenusData(headerDataUpdated);

    //  Mobile Menu
    let headerMobileData = data.header[0].Menus;
    const headerMobileDataUpdated = [];
    for (let i = 0; i < headerMobileData.length; i++) {
        if (headerMobileData[i].isMenuShow === true) {
            headerMobileDataUpdated.push(headerMobileData[i]);
        }
    }
    headerMobileMenuData(headerMobileDataUpdated);

    //Logo Title Section
    let logoTitleData = data.logoTitleSection;
    const logoTitleDataUpdated = [];
    for (let i = 0; i < logoTitleData.length; i++) {
        if (logoTitleData[i].titleSection === true) {
            logoTitleDataUpdated.push(logoTitleData[i]);
        }
    }
    logosTitleSectiondata(logoTitleDataUpdated);

    //Left Right Content Section (Whole)
    let leftRightSectionData = data.leftRightSection;
    const leftRightSectionDataUpdated = [];
    for (let i = 0; i < leftRightSectionData.length; i++) {
        if (leftRightSectionData[i].leftRightSectionData === true) {
            leftRightSectionDataUpdated.push(leftRightSectionData[i]);
        }
    }
    leftRightSection(leftRightSectionDataUpdated);

    //Manage Work Section
    let manageWorkData = data.ManageWork;
    const manageWorkDataUpdated = [];
    for (let i = 0; i < manageWorkData.length; i++) {
        if (manageWorkData[i].manageWorkData === true) {
            manageWorkDataUpdated.push(manageWorkData[i]);
        }
    }
    ManageWork(manageWorkDataUpdated);

    //Requirement Form Section
    let RequirementData = data.RequirementSection;
    const RequirementDataUpdated = [];
    for (let i = 0; i < RequirementData.length; i++) {
        if (RequirementData[i].formShow === true) {
            RequirementDataUpdated.push(RequirementData[i]);
        }
    }
    Requirement(RequirementDataUpdated);



    //Left Right Content Data (Left Side Image Right Side Content)
    let workingData = data.leftRightSection[0].leftRightContainerFirst;
    const workingDataUpdated = [];
    for (let i = 0; i < workingData.length; i++) {
        if (workingData[i].isShow === true) {
            workingDataUpdated.push(workingData);
        }
    }
    workingDataFirst(workingDataUpdated);

    //Left Right Content Data (Right Side Image Left Side Content)
    let workingDataSecond = data.leftRightSection[0].leftRightContainerSecond;
    const workingDataSecondUpdated = [];
    for (let i = 0; i < workingDataSecond.length; i++) {
        if (workingDataSecond[i].isShow === true) {
            workingDataSecondUpdated.push(workingDataSecond);
        }

    }
    workingDataSecond1(workingDataSecondUpdated);

}




let workingDataSecond1 = (data) =>{
    $.each(data, function(key, value) {
        let htmlRender =
            "<div class='left-right-container-second'>"+
            "<div class='aboutUs-image-container' style='width:"+value[0].imageWidth+"%'>"+
            "<div class='left-right__second-container'>"+
            "<div class='aboutUs__img-wrapper'>"+
            " <div class='aboutUs__img-wrapper-container'>"+
            "<img src='assets/images/plus-bg.png'>"+
            "</div>"+
            "<div class='aboutUs__img-wrapper-card feature gray'>"+
            "<div class='aboutUs__img-wrapper-card-img'>"+
            "<img src='assets/images/owal-bg.png'>"+
            " </div>"+
            " <div class='card-inner'>"+
            " <img src='"+value[0].workingImg+"'>"+
            " </div>"+
            "  </div>"+
            " </div>"+
            "</div>"+
           /* "<img src='"+value[0].workingImg+"'>"+*/
            "</div>"+
            "<div class='aboutUs-description' style='width:"+value[0].descriptionWidth+"%'>" +
            "<h2>"+value[0].workingHeading+"</h2>"+
            "<p>"+value[0].workingDesc+"</p>"+
            " </div>"+
            " </div>"
        $(htmlRender).appendTo("#aboutUs_right_left_section");

    });
}

let workingDataFirst = (data) =>{
    $.each(data, function(key, value) {
        let htmlRender =  "<div class='aboutUs-left-img-container'>"+
            "<div class='aboutUs-image-container' style='width:"+value[0].imageWidth+"%'>"+
            "<div class='aboutUs__img-wrapper'>"+
               " <div class='aboutUs__img-wrapper-container'>"+
                   "<img src='assets/images/plus-bg.png'>"+
                "</div>"+
                "<div class='aboutUs__img-wrapper-card feature gray'>"+
                    "<div class='aboutUs__img-wrapper-card-img'>"+
                        "<img src='assets/images/owal-bg.png'>"+
                   " </div>"+
                   " <div class='card-inner'>"+
                       " <img src='"+value[0].workingImg+"'>"+
                   " </div>"+
              "  </div>"+
           " </div>"+
            "</div>"+
            "<div class='aboutUs-description' style='width:"+value[0].descriptionWidth+"%'>" +
            "<h2>"+value[0].workingHeading+"</h2>"+
            "<p>"+value[0].workingDesc+"</p>"+
            " </div>"+
            " </div>"+
            "<div id='aboutUs_right_left_section'></div>"
        $(htmlRender).appendTo("#aboutUs_left_right_section");

    });
}


let headerMobileMenuData = (data) =>{
    $.each(data, function(key, value) {
        let htmlRender = "<div>"+
            " <div class='mobile-bar-icon'>"+
            "<svg onclick='hideBarIcon()' xmlns='http://www.w3.org/2000/svg' width='34' height='24' viewBox='0 0 37 24' fill='none'>"+
               " <line x1='0.818115' y1='2' x2='36.1781' y2='2' stroke='#FF0000' stroke-width='3'/>"+
               " <line x1='0.818115' y1='22' x2='36.1781' y2='22' stroke='#FF0000' stroke-width='3'/>"+
                "<line x1='0.818115' y1='12' x2='36.1781' y2='12' stroke='#FF0000' stroke-width='3'/>"+
            "</svg>"+
            " </div>"+
            " <div class='mobile-cross-icon'>"+
           " <svg  onclick='hidemenu()' xmlns='http://www.w3.org/2000/svg' width='25' height='23' viewBox='0 0 32 29' fill='none'>"+
               " <line x1='1.75799' y1='27.7379' x2='30.6681' y2='2.52494' stroke='#FF0000' stroke-width='3'/>"+
              "  <line x1='2.01066' y1='1.89159' x2='30.3564' y2='27.7375' stroke='#FF0000' stroke-width='3'/>"+
           " </svg>"+
            " </div>"+
            "<div id='show-mobile-menu' class='header-links-mobile'>"+
            "<ul>"+
            "<li onclick='hidemenu()'>"+"<a href=\"#header\">"+value.link1+"</a>"+"</li>"+
            "<li onclick='hidemenu()'>"+"<a href=\"#solutions\">"+value.link2+"</a>"+"</li>"+
            "<li onclick='hidemenu()'>"+"<a href=\"#aboutUs\">"+value.link3+"</a>"+"</li>"+
            "<li onclick='hidemenu()'>"+"<a href=\"#services\">"+value.link4+"</a>"+"</li>"+
            "<li onclick='hidemenu()'>"+"<a href=\"#contactUs\">"+value.link5+"</a>"+"</li>"+
            "</ul>"+

            "</div>"+
            "</div>"
        $(htmlRender).appendTo("#headerMobileMenus");

    });
}

let headerMenusData = (data) =>{
    $.each(data, function(key, value) {
        let htmlRender =  "<div class='header-links'>"+
            "<ul>"+
            "<li >"+"<a href=\"#header\">"+value.link1+"</a>"+"</li>"+
            "<li>"+"<a href=\"#solutions\">"+value.link2+"</a>"+"</li>"+
            "<li>"+"<a href=\"#aboutUs\">"+value.link3+"</a>"+"</li>"+
            "<li>"+"<a href=\"#services\">"+value.link4+"</a>"+"</li>"+
            "<li>"+"<a href=\"#contactUs\">"+value.link5+"</a>"+"</li>"+
            "</ul>"+

            "</div>"
        $(htmlRender).appendTo("#headerMenus");

    });
}

let headerTop = (data) =>{

    $.each(data, function(key, value) {
        let htmlRender = "<div>"+
            "<div class='header-main-container'>" +
            "<div class='header-container'>"+
            "<div class='header-logo'>"+
            "<img src='"+value.companyLogo+"'>"+
            "</div>"+
            "<div id='headerMenus'></div>"+
            "<div id='headerMobileMenus'></div>"+
            "</div>"+
            "</div>"+

            "<div class='header-background' >" +
            "<div class='top-banner-container' >"+
            "<h2>"+ value.bannerTitle +"</h2>"+
            "<p >"+ value.bannerDescription +"</p>"+
            " <button class='top-banner-button' type='button'>"+value.button1+"</button>"+
            "</div>"+
            "</div>"+
            "</div>";
        $(htmlRender).appendTo("#header");
    });
}

let logosTitleSectiondata = (data) =>{
    $.each(data, function(key,value){
        let htmlRender = "<div class='solution-main-container'>"+
            "<div class='solution-header'>"+
            "<p class='solution-header-para'>"+value.mainDesc+"</p>"+
            "<h2>"+ value.mainHeading +"</h2>"+
            "</div>"+
            "<div class='solution-container-flex'>" +
            "<div class='solution-container-icon-desc'>" +
            "<img src='"+value.icon1+"'>"+
            "<h4 >"+value.heading1+"</h4>"+
            "<p >"+value.description1+"</p>"+
            "</div>"+
            " <div class=\"vl\"></div>"+
            "<div class='solution-container-icon-desc'>" +
            "<img src='"+value.icon2+"'>"+
            "<h4>"+value.heading2+"</h4>"+
            "<p>"+value.description2+"</p>"+
            "</div>"+
            " <div class=\"vl\"></div>"+
            "<div class='solution-container-icon-desc' >" +
            "<img src='"+value.icon3+"'>"+
            "<h4>"+value.heading3+"</h4>"+
            "<p>"+value.description3+"</p>"+
            "</div>"+
            " <div class=\"vl\"></div>"+
            "<div class='solution-container-icon-desc'>" +
            "<img src='"+value.icon4+"'>"+
            "<h4>"+value.heading4+"</h4>"+
            "<p>"+value.description4+"</p>"+
            "</div>"+
            "</div>"+
            "</div>";
        $(htmlRender).appendTo("#solutions");
    });
}

let leftRightSection = (data) =>{
       $.each(data, function (key,value){
           let htmlRender =  "<div class='aboutUs-main-container' style='background: "+value.background+"'>"+
               "<h4>"+ value.HeadingSection +"</h4>"+
               "<p class='aboutUs-header-para'>"+value.DescriptionSection+"</p>"+
              "<div id='aboutUs_left_right_section'></div>"+
          " </div>";
       $(htmlRender).appendTo("#aboutUs");
       }) ;
}

let ManageWork = (data) =>{
    $.each(data, function (key,value){
        let htmlRender =  "<div class='services-main-container' style='background: "+value.background+"'>"+
            "<p class='services-header-para'>"+ value.workDesc +"</p>"+
            "<div class='services-container'>"+
            "<div class='services-container-right-section'>"+
                "<h2>"+ value.WorkHeading +"</h2>"+
            "</div>"+
            "<div class='services-container-left-section'>"+

            " <div class='services-para-container' >"+
                   "<p>"+value.p1 +"</p>"+
            "</div>"+
            " <div class='services-para-container'>"+
                   "<p>"+value.p2 +"</p>"+
            "</div>"+
            " <div class='services-para-container'>"+
                   "<p>"+value.p3 +"</p>"+
            "</div>"+
            " <div class='services-para-container'>"+
                   "<p>"+value.p4 +"</p>"+
            "</div>"+
            " <div class='services-para-container'>"+
                   "<p>"+value.p5 +"</p>"+
            "</div>"+
           " </div>"+
            " </div>"+
       " </div>";

            $(htmlRender).appendTo("#services");
    })  ;
};

let Requirement = (data) => {
    $.each(data, function (key,value){
        let htmlRender = "<div class = 'contactUs-main-container'>"+
            "<h2 >"+ value.requirementHeading+"</h2>"+
          "  <input type='text' placeholder = 'Your Email' />"+" <br/>"+"<br/>"+
            "<input type='text' placeholder='I would like to develop a website'/>"+"<br/>"+
           " <button type='button'>"+value.buttonText+"</button>"+
       " </div>";

            $(htmlRender).appendTo('#contactUs');
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



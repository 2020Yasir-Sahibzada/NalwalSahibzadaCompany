$(document).ready(function () {
    
    var storedData = localStorage.getItem('myObject');
    var parsedData = JSON.parse(storedData);


    $(".hero-section").attr("style", "background: "+ parsedData.designColor[0] + ";");

    $(":root").css("--herosection-background", parsedData.designColor[0]);
    $(":root").css("--headerscrolled-color", parsedData.designColor[1]);
    $(":root").css("--sectionbg-color", parsedData.designColor[2]);
    $(":root").css("--testmonial-color", parsedData.designColor[3]);
    $(":root").css("--iconbg-color", parsedData.designColor[4]);
    $(":root").css("--iconmainbg-color", parsedData.designColor[5]);
    $(":root").css("--heading-color", parsedData.designColor[6]);

    console.log(parsedData.designColor[1]);

    $("#navbarLogo").attr("src", parsedData.companyNavbar[0]);
    $("#companyNavName").text(parsedData.companyNavbar[1]);
    $("#mainLargeText").text(parsedData.mainLargeText);

    $("#bucket1").attr("src", parsedData.bucketImages[0]);
    $("#bucket2").attr("src", parsedData.bucketImages[1]);

    $("#aboutUs").text(parsedData.aboutUs);

    $("#ownerName").text(parsedData.ownerDetail[0]);
    $("#ownerDetail").text(parsedData.ownerDetail[1]);
    $("#ownerImage").attr("src", parsedData.ownerDetail[2]);

    $.each(parsedData.brands, function(index, element) {
        var createdObject = $('<div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="' + element + '" class="img-fluid" alt=""></div>');
        $('#brands').append(createdObject);
    });

    $.each(parsedData.customers, function(index, element2) {
        var createdObject = $('<div class="swiper-slide"><div class="testimonial-item"><p id="customerOpinion"><i class="bi bis-quote-alt-left quote-icon-left"></i>' + element2[0] + '<i class="bi bis-quote-alt-right quote-icon-right"></i></p><img src="' + element2[1] + '" class="testimonial-img" alt=""><h3> ' + element2[2] + ' </h3><h4>' + element2[3] + '</h4></div></div>');
        $('#customersList').append(createdObject);
    });

    $("#serviceText").text(parsedData.serviceText);

    $.each(parsedData.products, function(index, element3) {
        var createdObject = $('<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100"><div class="' + element3[3] + '"><div class="icon"><svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"><path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path></svg><i class="' + element3[0] + '"></i></div><h4>' + element3[1] + '</h4><p>' + element3[2] + '</p></div></div>');
        $('#productList').append(createdObject);
    });

    $("#teamText").text(parsedData.teamText);

    $.each(parsedData.members, function(index, element4) {
        var createdObject = $('<div class="teamMember col-lg-2 col-md-4 col-sm-7 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100"><div class="member"><div class="member-img"><img src="' + element4[0] + '" class="img-fluid" alt=""><div class="social"><a href=""><i class="bi bi-twitter"></i></a><a href=""><i class="bi bi-facebook"></i></a><a href=""><i class="bi bi-instagram"></i></a><a href=""><i class="bi bi-whatsapp"></i></a></div></div><div class="member-info"><h4>' + element4[5] + '</h4><span>' + element4[6] + '</span></div></div></div>');
        $("#teamMembers").append(createdObject);
    });

    $("#address").text(parsedData.contentInfo[0]);
    $("#companyEmail").text(parsedData.contentInfo[1]);
    $("#companyPhone").text(parsedData.contentInfo[2]);
});
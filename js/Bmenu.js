$(document).ready(function(){
	/*$(document).scrollTop(0);
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	//키보드자판에서 어떤 키를 눌렀는지 감지
    $(document).keydown(function(event){  //이벤트는 function을 사용함. event는 변수 이름으로 임의로 설정한 것임
        if(event.key === "Escape") {  //Escape는 Esc키를 의미함
            $("#popup").fadeOut();
			$("body").css("overflow","auto");
        }
    });*/

	let h = 0;
	//햄버거(메뉴) 아이콘 클릭
	$("h1>button:first-child").click(function(){
		h++;  //클릭하면 h가 1 증가. 그래서 click() 메소드 밖에 h변수 선언해야 함!
		if(h==1) {  //한 번 누르면 햄버거 아이콘에서 X 아이콘으로 바뀜
			$("#black").fadeIn("slow");  //아이디가 black인 요소가 서서히 나타나게 함. fadeIn("fast")혹은 fadeIn("slow")혹은 fadeIn(숫자)로 작성할 수 있음
			$("#black nav").animate({left:0}, "slow");  //slow이면 0.6초 정도?
			$(this).text("close");
		}
		else {  //한 번 더 누르면(=> X아이콘 누르면)
			$("#black").fadeOut("fast");
			$("#black nav").animate({left:"-61%"}, "slow");  //처음 설정(=css설정)으로 돌아가는 것
			$(this).text("menu");
			h=0;
		}
	});
	//메뉴 항목 클릭
	$("#black nav a").click(function(){
		$("#black").fadeOut("fast");
		$("#black nav").animate({left:"-61%"}, "slow");  //처음 설정(=css설정)으로 돌아가는 것
	});
	//하트아이콘 클릭
	$("h1>button:last-child").click(function(){
		/*$("#black").fadeIn("slow");  //아이디가 black인 요소가 서서히 나타나게 함. fadeIn("fast")혹은 fadeIn("slow")혹은 fadeIn(숫자)로 작성할 수 있음
		$("#black nav").animate({right:0}, "slow");  //slow이면 0.6초 정도?*/
	});

	//왼쪽 cocktail의 하위메뉴 보이기
	$("#left li>a").on("mouseenter click", function(){   //두 개 이상(mouseenter와 click)을 설정할 경우 .on("기능1 기능이", function{});으로 작성
        $("#left li>nav").stop().slideUp();  //stop()하면 올라갔다 내려갔다 하지 않고 한 번만 하게 됨. 내려가는 기능은 따로 작성할 것임
        $(this).next().stop().slideDown();  //this(=a)의 다음형제(=nav)를 표시함
    });
    $("#left li").mouseleave(function(){   //mouseenter는 엔터한 게 아니라 hover인 것인데, 마우스를 뗄 경우에 대한 것 작성
        $("#left li>nav").stop().slideUp();
        //$(this).find("nav").slideUp();  이렇게 해도 동일한 결과
    });

	//#right 부분 => #left에서 메뉴 누르면 해당 화면 보이게 하기
	$("#left .non").click(function(){
		$("#Lv1").hide("fast");
		$("#Lv2").hide("fast");
		$("#Lv3").hide("fast");
		$("#non").show();
	});
	$("#left .Lv1").click(function(){
		$("#non").hide("fast");
		$("#Lv2").hide("fast");
		$("#Lv3").hide("fast");
		$("#Lv1").show();
	});
    $("#left .Lv2").click(function(){
		$("#non").hide("fast");
		$("#Lv1").hide("fast");
		$("#Lv3").hide("fast");
		$("#Lv2").show();
	});
	$("#left .Lv3").click(function(){
		$("#non").hide("fast");
		$("#Lv1").hide("fast");
		$("#Lv2").hide("fast");
		$("#Lv3").show();
	});

	//하단(footer)에 현재페이지에 있는 경우 글씨체 색 변경  => 설계중
	//$("#circle div").eq(j).addClass("red").siblings().removeClass("red"); 아직 코드 설계 안함

});  ////////END
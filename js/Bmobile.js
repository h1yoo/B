$(document).on("pagecreate", "#layout", function(){
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
	});
	//let r = 0;
	//하트아이콘 클릭
	$("h1>button:last-child").click(function(){
		/*r++;  //클릭하면 h가 1 증가. 그래서 click() 메소드 밖에 h변수 선언해야 함!
		if(r==1) {  //한 번 누르면 햄버거 아이콘에서 X 아이콘으로 바뀜
			$("#black").fadeIn("slow");  //아이디가 black인 요소가 서서히 나타나게 함. fadeIn("fast")혹은 fadeIn("slow")혹은 fadeIn(숫자)로 작성할 수 있음
			$("#black nav").animate({left:0}, "slow");  //slow이면 0.6초 정도?  #black에 있는 nav를 보여줌. 다른 걸로 바꿔야 함
			$(this).text("close");
		}
		else {  //한 번 더 누르면(=> X아이콘 누르면)
			$("#black").fadeOut("fast");
			$("#black nav").animate({left:"-61%"}, "slow");  //처음 설정(=css설정)으로 돌아가는 것
			$(this).text("menu");
			r=0;
		}*/
	});

	//스와이프로 이미지 슬라이드 => 이달의 이벤트
	const slide = setInterval( leftMove, 2800 );
	let i = 3;  //항목의 개수(<img>가 3개)
	let j = 0;  //원형불릿 (= 0,1,2)
	function leftMove(){
		j++;
		if(j == 3) { j=0; }
		$("#slide>div").stop(false,true).animate({left:"-1200px"}, 1000, function(){  //현재 -600px인데 왼쪽으로 사진 하나 움직이려면(-600px해서) -1200px 해줘야 함 (너무 어렵다,,)
			$(this).append($("#slide img").first());   //#slide 자손 중 a의 첫 번째 것의 뒤쪽에 두겠다는 의미
			$(this).css("left", "-600px");  //원래의 -600px으로 되돌리기
			$("#circle div").eq(j).addClass("gray").siblings().removeClass("gray");  //인덱스번호가 j인 #circle의 자손 div에 red라는 클래스를 추가하고 나머지 형제들에 있는 red 클래스 지움
		});
	}
	function rightMove(){
		j--;
		if(j == -1) { j=2; }
		$("#slide>div").stop().animate({left:0}, 1000, function(){  //현재 -600px인데 오른쪽으로 움직이려면(+600px해서?) 0 해줘야 함 (???이해안됨)
			$(this).prepend($("#slide img").last());   //#slide 자손 중 a의 마지막 것의 앞쪽에 두겠다는 의미?? 
			$(this).css("left", "-600px");  //원래의 -600px으로 되돌리기 (=>css에서 보면 이게 원래대로임)
			$("#circle div").eq(j).addClass("gray").siblings().removeClass("gray");  //인덱스번호가 j인 #circle의 자손 div에 red라는 클래스를 추가하고 나머지 형제들에 있는 red 클래스 지움
		});
	}
	$("#slide>div").swipeleft(function(){
		leftMove();
	});
	$("#slide>div").swiperight(function(){
		rightMove();
	});////////이벤트 이미지 슬라이드 끝///////////////

	// 스와이프로 이미지 슬라이드 => 베스트메뉴 ///////
	const slideb = setInterval( leftMoveb, 2800 );
	let ib = 0;  //항목의 개수(<img>가 5개 => 인덱스번호 0,1,2,3,4)
	function leftMoveb(){
		ib++;
		if(ib == 5) { ib=0; }
		$("#slideb").stop(false,true).animate({left:"-442px"}, "slow", function(){  //현재 -221px인데 여백은 -21px 왼쪽으로 사진 하나 움직이려면(-221px해서) -500px 해줘야 함 (너무 어렵다,,)
			$(this).append($("#slideb img").first());   //#slide 자손인 a 중에 첫 번째 것을 맨 뒤에 두겠다는 의미 (append는 맨 뒤에, prepend는 맨 앞에 배치)
			$(this).css("left", "-221px");  //원래의 -221px로 되돌리기 (=>css에서 보면 이게 원래대로임)
		});
	}
	function rightMoveb(){
		ib--;
		if(ib == -1) { ib=4; }
		$("#slideb").stop().animate({left:0}, "slow", function(){  //현재 -221px인데 오른쪽으로 움직이려면(+221px해서?) 0 해줘야 함 (???이해안됨)
			$(this).prepend($("#slideb img").last());   //#slide 자손인 a 중에 마지막 것을 맨 앞에 두겠다는 의미
			$(this).css("left", "-187px");  //원래의 -221px로 되돌리기
		});
	}
	$("#left").click(function(){  //왼쪽버튼 클릭했을 때
		rightMoveb();
	});
	$("#right").click(function(){ //오른쪽버튼 클릭했을 때
		leftMoveb();
	});

	//하단(footer)에 현재페이지에 있는 경우 글씨체 색 변경  => 설계중
	//$("#circle div").eq(j).addClass("red").siblings().removeClass("red"); 아직 코드 설계 안함

});  ////////END
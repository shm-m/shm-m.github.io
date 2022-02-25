---
title: Project BARNY
description: JAVA WEB 개발자 양성과정 파이널 프로젝트
layout: page
categories: [비트]
image: assets/images/barny/thumb.png
---

### 프로젝트 소개

> Find your own drink, Barny

Barny는 Springboot를 기반으로 한 정기구독형 주류 판매 웹 서비스입니다.

비트캠프 JAVA WEB 개발자 양성과정 파이널 프로젝트로, 구현 과정에서 다른 쇼핑몰과 게시판 CRUD 이외의 차별화된 기능을 어떻게 제공할 것인지를 고민하였습니다.  
따라서 개인형 맞춤화, 편의성, 코로나19에 따른 실내 생활 증가라는 트렌드에 맞춰 <u>소비자의 취향에 따라</u> 주류 및 밀키트를 배송하는 정기구독형 주류 판매 쇼핑몰을 제작하였습니다.

해당 웹 서비스를 통해 사용자는 CRUD 형식의 게시판, 결제, 관리자 페이지, 회원가입 및 이벤트 기능이 사용 가능합니다.

<div class="pjt-info">

<b>진행 기간</b> &nbsp; 2021.06 ~ 2021.08
<br>
<b>진행 인원</b> &nbsp; 6명
<br>
<b>깃허브 주소</b> &nbsp; https://github.com/shm-m/project_barny

</div>

### 사용 기술

<ul class="px-0">
        <li class ="skill">SpringBoot</li>
        <li class ="skill">Oracle DBMS</li>
        <li class ="skill">HTML/CSS</li>
        <li class ="skill">JavaScript</li>
        <li class ="skill">JQuery</li>
</ul>

---

### 담당 기능 및 역할

#### 1. DB모델링

![database_modeling]({{ site.baseurl }}/assets/images/barny//barny-1.png)

###### 개념적 설계, eXERD를 통한 물리적 설계

데이터베이스 모델링은 크게 회원, 관리자, 상품, 게시판으로 나눠 필요한 기능들을 기술한 요구사항 분석을 토대로 진행하였습니다.

개념적 설계 – 논리적 설계 – 물리적 설계 순으로 진행하였으며, 최종적으로 Eclipse 기반의 DB 모델링 도구인 eXERD를 통해 설계를 완성하였습니다. Barny의 DB 내 테이블은 회원, 게시판, 장바구니를 포함하여 총 14개로 구성되어 있습니다.

완성된 설계를 바탕으로 Oracle DB에 Barny 계정을 생성, 데이터베이스를 완성하였으며, 이후에는 쿼리문을 통해 해당 DB에 더미 데이터를 삽입하였습니다.

---

#### 2. Main Page

![main]({{ site.baseurl }}/assets/images/barny//barny-main.png)

###### 메인 화면

메인 페이지는 Bootstrap5를 활용하여 제작하였습니다. 또한 웹사이트의 컨셉과 사용자의 편의를 고려하여, JavaScript를 활용하여 스크롤을 내릴 시 카카오 채팅과 페이지 최상단으로 이동시키는 탑버튼을 추가했습니다.

---

#### 3. 공용 템플릿

6명이서 진행하는 협업이었기에, 각자 프론트 단을 구현할 경우 통일성이 저해될 가능성이 존재했습니다. 따라서 게시판, my page, header, footer와 같은 공통으로 사용될 JSP 페이지 제작을 담당하였습니다.

![chang-nav-bar]({{ site.baseurl }}/assets/images/barny//barny-2.png)

###### nav bar

navigation bar의 경우, 스크롤 이동 시 shrink되며 디자인이 변경되도록 JavaScript 함수를 사용하여 제작하였습니다.

```jsp
  <sec:authorize access="isAnonymous()">
    <li class="nav-item">
      <a class="nav-link" href="/loginForm">
        로그인
      </a>
    </li>
  </sec:authorize>
  <sec:authorize access="hasAnyRole('ROLE_USER')">
    <li class="nav-item">
      <a class="nav-link" href="/board/my_page">
        마이페이지
      </a>
    </li>
  </sec:authorize>
  <sec:authorize access="hasAnyRole('ROLE_ADMIN')">
    <li class="nav-item">
      <a class="nav-link" href="/admin/statistics">
        관리페이지
      </a>
    </li>
  </sec:authorize>
```

또한 Spring Security의 기능을 활용하여 사용자가 로그인 시, 권한에 따라 접근할 수 있는 게시판을 달리하였습니다.

![default-template]({{ site.baseurl }}/assets/images/barny//barny-3.png)

###### default template

기본적인 게시판 양식 및 마이페이지, 관리자 페이지 역시 Bootstrap을 활용하여 제작하였습니다. UI에 통일성을 유지하며 편리성을 강조하고, 다양한 게시판에서 활용 가능하도록 하였습니다.

---

#### 4. 취향 테스트

![test-page]({{ site.baseurl }}/assets/images/barny//barny-4.png)

###### 취향테스트 main page, 질문 페이지

사용자 취향에 기반한 주류 구독 서비스라는 주제에 맞춰, JavaScript를 활용한 취향 테스트를 개발하였습니다.

취향 테스트는 12개의 질문에 대한 사용자의 선택에 따라 성향에 맞는 구독 패키지를 추천해줍니다. 각각의 질문지에는 두개의 선택지가 존재하며 각각 a패키지, b패키지, c패키지 중 2가지를 대표합니다.

```javascript
  {
    q: '4. 장바구니는 무겁고, 마시고 싶은 술이 두개라면 나는...',
    a: [
      { answer: 'a. 둘 중에 패키지가 더 예쁜 술을 고른다.', type: [2] },
      { answer: 'b. 둘 중에 도수가 더 높은 술을 고른다.', type: [1] },
    ]
  },
```

선택지를 대표하는 패키지들은 배열로서 존재하며, 각각의 값은 0으로 시작합니다. 질문마다 사용자가 선택지를 선택하면, 해당 선택지에 대응되는 배열의 요소에 1씩 더해지는 방식으로 구현하였습니다.

![test-result-page]({{ site.baseurl }}/assets/images/barny//barny-5.png)

###### 테스트 종료 후의 결과 페이지

```javascript
function calResult() {
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult() {
  let point = calResult();
  const resultName = document.querySelector(".resultname");
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  var imgURL = "img/image-" + point + ".png";
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add("img-fluid");
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector(".resultDesc");
  resultDesc.innerHTML = infoList[point].desc;
}
```

테스트가 종료되면 calResult()라는 함수를 통해 각각의 배열의 값들을 비교하여 가장 큰 값을 가진 배열의 요소, 즉 패키지가 최종적으로 결과에 할당됩니다.

해당 함수를 통해 결정된 결과 값은 setResult()를 통해 point라는 변수에 할당, 이에 대응하는 설명과 이미지를 호출하여 결과지를 사용자에게 보여주고 사용자는 하단의 버튼을 통해 본인 취향에 맞는 패키지를 구매할 수 있습니다.

---

#### 5. 룰렛 이벤트 및 포인트 적립 기능

<p style="text-align: center">
  <img src="{{ site.baseurl }}/assets/images/barny//barny-roulette.gif" alt="factorio thumbnail"/>
</p>

###### 룰렛 이벤트 실행 화면

```javascript
function rotation() {
  $("#image").rotate({
    angle: 0,
    animateTo: 360 * 5 + randomize(0, 360),
    center: ["50%", "50%"],
    easing: $.easing.easeInOutElastic,
    callback: function () {
      var n = $(this).getRotateAngle();
      endAnimate(n);
      alert("축하합니다. " + $("#point").val() + " 포인트에 당첨되었습니다.");
    },
    duration: 5000,
  });
}
```

JavaScript 및 JQuery를 활용한 카드게임 및 룰렛을 통해 사용자가 구매 시 현금을 대신하여 사용할 수 있는 포인트를 획득할 수 있도록 했습니다.

룰렛의 경우에는 JQuery를 사용하여 룰렛 이미지의 회전을 구현하였습니다. rotation() 함수를 통해 이미지는 360\*5만큼 회전 후 0에서 360 사이의 임의의 숫자의 각도만큼 더 회전합니다. 이 때 회전판은 동일한 비율로 6등분 되는데, 배열의 요소로 정의된 포인트는 그에 맞는 각도에 차지합니다.

해당 각도와 각각의 포인트가 차지하는 각도를 비교, 핀에 걸리는 각도에 해당하는 배열을 추출한 뒤, 이에 대응하는 포인트를 사용자에게 수여하도록 작성하였습니다.

포인트 당첨 결과는 alert으로 구현, 사용자가 확인 버튼을 누르면, event controller의 메소드를 통해 포인트가 적립되며, 해당 포인트가 DB에 존재하는 member 테이블의 point 칼럼에 누적됩니다.

![dupliacated-participation]({{ site.baseurl }}/assets/images/barny//barny-7.png)

###### 포인트 적립 시의 console | 첫 이벤트 참여 시 뜨는 alert, 중복 참여 시 뜨는 alert

```javascript
$("#start_btn").click(function () {
  function convertDateFormat(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month >= 10 ? month : "0" + month;
    var day = date.getDate();
    day = day >= 10 ? day : "0" + day;
    return [year, month, day].join("");
  }
  var today = convertDateFormat(new Date());
  var participate_date = "${participate_date}";
  if (participate_date == today) {
    alert("해당 이벤트는 하루에 한번만 참여 가능합니다.");
    return false;
  }
  rotation();
  setTimeout("document.addPoint.submit()", 5500);
});
```

```xml
<!--이벤트 참여 여부 체크-->
    <select id="checkPart" resultType="String">
        <![CDATA[
        select to_char(participate_date, 'yyyymmdd')
        from b_event
        where member_idx = #{member_idx}
          and (to_char(participate_date, 'yyyymmdd') = to_char(sysdate, 'yyyymmdd'))
        ]]>
    </select>
```

또한 각각의 이벤트는 사용자가 하루에 한 번만 참여하도록 설정하였습니다. event 테이블에는 해당 이벤트의 board_id 및 사용자의 member_idx, 그리고 사용자가 참여한 날짜인 participate_date가 insert됩니다.

따라서 룰렛 이벤트가 구현되면, js와 principal을 통해 로그인한 사용자의 participate_date와 현재 날짜를 비교하는 함수가 호출되어, 일치 시에는 참여를 제한하는 alert이 호출되고, 이벤트 실행 함수는 취소됩니다.

---

#### 6. Check Box를 통한 게시글 삭제

![checkbox-example]({{ site.baseurl }}/assets/images/barny//barny-8.png)

###### 관리자 아이디로 로그인 했을 때의 공지사항과 check box 기능

```javascript
$(function () {
  var chkObj = document.getElementsByName("RowCheck");
  var rowCnt = chkObj.length;
  $("input[name='allCheck']").click(function () {
    var chk_listArr = $("input[name='RowCheck']");
    for (var i = 0; i < chk_listArr.length; i++) {
      chk_listArr[i].checked = this.checked;
    }
  });
  $("input[name='RowCheck']").click(function () {
    if ($("input[name='RowCheck']:checked").length == rowCnt) {
      $("input[name='allCheck']")[0].checked = true;
    } else {
      $("input[name='allCheck']")[0].checked = false;
    }
  });
});

function deleteValue() {
  var url = "${pageContext.request.contextPath}/admin/notice/delete_";
  var valueArr = new Array();
  var list = $("input[name='RowCheck']");
  for (var i = 0; i < list.length; i++) {
    if (list[i].checked) {
      // 선택 시 배열에 값을 저장
      valueArr.push(list[i].value);
    }
  }
  if (valueArr.length == 0) {
    alert("선택된 글이 없습니다.");
  } else {
    if (
      confirm(
        "해당 글을 삭제하시겠습니까? \n(삭제한 글은 복구가 불가능합니다.)"
      )
    ) {
      $.ajax({
        url: url,
        type: "POST",
        traditional: true,
        data: {
          valueArr: valueArr,
        },
        success: function () {
          alert("삭제되었습니다.");
          location.replace("main");
        },
      });
    } else {
      alert("작업이 취소되었습니다.");
    }
  }
}
```

관리자 게시판의 경우, 게시물 관리를 보다 용이하게 하기 위해 checkbox를 통한 부분 및 전체 삭제를 구현하였습니다.

부분 삭제의 경우 각각의 게시물 앞에 체크박스를 표시한 뒤 선택된 게시물은 배열에 값을 저장하도록 하였습니다. 전체 삭제 버튼을 누를 경우에는 표시된 게시물 전체가 선택되도록 하였습니다. 이후 alert을 통해 사용자에게 삭제 여부를 재확인한 뒤 ajax를 통해 DB의 데이터가 삭제가 가능하도록 했습니다.

```java

@RequestMapping(value = "/delete_")
public String deleteByCheckbox(HttpServletRequest request) throws Exception {
String[] deleteByCheckbox = request.getParameterValues("valueArr");
int size = deleteByCheckbox.length;
_log_.info("deleted notice number: " + size);
for(int i=0; i<size; i++) {
noticeService.delete2(deleteByCheckbox[i]);
}
return "redirect:/main";
}
```

선택된 게시물은 controller에서 for 반복문을 통해 개별 삭제 시 사용된 명령이 반복되어 적용되도록 구현하였습니다.

---

### 후기 및 보완점

해당 프로젝트를 진행하면서 Spring Framework에 대한 전반적인 이해, 및 MVC 패턴, Restful한 방식에 대한 이해하고 활용할 수 있게 되었습니다. 또한 개인 프로젝트가 아닌 6명이 함께하는 협업이었던 것만큼 커뮤니케이션 능력 및 Git 활용 능력이 향상될 수 있었습니다.

다만 설계가 미흡하여 DB를 여러 번 수정했던 점이 아쉽습니다. 엔티티를 좀 더 세분화하여 상세하게 DB를 구성했어야 한다는 생각이 들었습니다. 또한 DB 공유가 제대로 되지 못해 차질이 생겼던 점, 일부 기능은 하드코딩으로 구현된 점이 아쉬웠습니다. 프론트단을 구현할 때 역시 태그 사용법이 미숙하여 Spring Framework의 'tiles' 혹은 jsp의 'include'를 사용하는 것이 아니라 공용으로 사용할 페이지들을 일일이 삽입하기도 했습니다.

<br>

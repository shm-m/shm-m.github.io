---
layout: post
title: "전역변수는 멤버변수와 같은 것일까?"
categories: [java]
image: assets/images/global-variable.png
---

### 결과부터 말하자면 아님

변수의 종류는 변수는 그 선언 위치에 따라 크게 멤버 변수와 지역변수로 나뉨.

이때 서치하면 많은 자료들이 멤버 변수는 클래스 영역에서 선언된 것으로, 멤버 변수 = 필드 = 전역 변수라고 언급함. 혹은 전역변수는 그게 아니고 static이 붙은 클래스 변수라고 주장. 근데 자바의 정석을 보니 또 클래스 변수에 접근제어자로 public을 붙여주면 전역 변수의 성격을 갖게 된다고 한다?

여기서 헷갈리기 시작~ 아니 전역변수가 멤버 변수고 멤버 변수에 클래스 변수가 포함되는데, public을 붙여야지 전역 변수의 성격을 띄게 된다는 건 뭐지, 또 static을 붙이면 전역변수가 된다니 그럼 클래스 변수가 전역변수라는 얘기인가?

<br>

### public, static, 전역변수 각각의 개념

- `public`은 같은 프로젝트 내이면 다른 패키지라도 호출 가능하게 하는 접근 제한자
- `static`의 경우 클래스 변수를 만들어 별도의 인스턴스 없이 바로 호출 가능하게 하는 키워드

- `전역 변수(global variable)` 는 함수의 외부에서 선언된 변수. 프로그램의 어디에서나 접근할 수 있으며, 프로그램이 종료되어야만 메모리에서 사라짐.

여기서 프로그램 `어디에서나`라는 말이 애매하게 와닿는다. 어디에서나라는 건 프로젝트 내 모든 곳에서 접근 가능해야한다는 얘기인가 아니면 실행하는 하나의 큰 프로그램 단위를 의미하는건가.

<br>

그래서 구글링해보니 다음과 같은 결과가 나옴

![no_global_variable]({{ site.baseurl }}/assets/images/posts/global-variable-1.png)

###### 자바에는 전역변수의 개념이 없다

**애초에 자바에서는 전역변수를 지원하지 않는다는 거다.** 위에 나온 전역 변수의 정의도 사실 C언어의 것임.

<br>

### 왜 자바에서는 전역 변수를 지원하지 않을까?

**디자인적인 결함 때문.** 자바는 객체지향 프로그래밍 언어이고 이는 캡슐화를 통해 은닉성을 보장하는게 특징.
전역변수는 해당 언어의 목적과 상반되는 개념이다.

굳이 전역 변수의 역할을 수행하고 싶으면 `static`이나 `public`으로 충분히 구현 가능(단 public 역시 은닉성을 해침으로 무분별한 사용 지양)

#### 멤버변수 or 클래스 변수

아무래도 지역변수와 구분지을 개념이 필요하다 보니 전역변수를 많이 사용하는듯하다. 멤버변수에 비해 비교하기도 쉬움.

그러나 자바에서는 전역변수를 제공하지도 않고 해당 개념을 사용하기엔 *프로그램 어디에서나*라는 개념이 모호하다. 그러니 지역변수와 분리되는 개념으로 사용할거면 전역변수라는 말보다 멤버변수 혹은 필드라는 용어를 사용하는 편이 좋을 듯 하다.

혹은 모든 인스턴스가 공통된 변수를 공유하는 개념으로 실제 전역변수와 비슷한 용도로 사용할 거면 클래스변수(static)로 대체하는 것이 나을 듯함.

<br>

### 참고 자료

1. [http://www.tcpschool.com/c/c_function_variableScope](http://www.tcpschool.com/c/c_function_variableScope)
2. [https://stackoverflow.com/questions/5581234/why-are-there-no-global-variables-in-java](https://stackoverflow.com/questions/5581234/why-are-there-no-global-variables-in-java/)
3. [https://coderanch.com/t/542041/certification/global-variables-Java](https://coderanch.com/t/542041/certification/global-variables-Java)

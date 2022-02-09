---
layout: post
title: "캡슐화, Getter/Setter"
categories: [java]
image: assets/images/default-image3.png
---

## 캡슐화

// 캡슐화란 해당 클래스 내부의 내용을 외부 클래스가 자세히 알 수 없도록
// 모든 필드는 private, 꼭 외부가 알아야하는 메소드 외의 메소드들도 private으로 접근제한을 두는 것이다.
public class Ex01GetterSetter_Student {

    // 총 과목의 갯수
    private final int SIZE_SUBJECT = 3;
    // 위의 필드에 대하여 겟터/셋터 메소드를 만들지 않음 - 즉 외부에서 사용 불가능

    private int id;
    private String name;
    private int korean;
    private int english;
    private int math;

    // 우리가 필드를 private으로 바꾸면 더이상 외부의 클랫들은 해당 필드에 직접 접근을 할 수 없다.
    // 따라서 우리는 메소드를 통해 필드에 값을 할당하거나, 필드에 할당된 값을 호출하게 된다.
    // 이렇게 private 설정된 필드에 값을 할당하거나 호출하는 메소드를 우리는 "겟터/셋터" 라고 부른다.

    // 셋터 메소드
    // 객체의 필드에 값을 저장할 때는 우리가 셋터 메소드를 통해서 저장하게 된다.
    // 셋터 메소드는 다음과 같은 양식을 가진다.
    // public void set필드이름(필드타입 필드이름) {
    // this.필드이름 = 필드이름;
    // }

    // 겟터 메소드
    // 객체의 필드에 저장된 값을 호출할 때는 겟터 메소드를 이용한다.
    // 겟터 메소드는 다음과 같은 양식을 가진다.
    // public 필드타입 get필드이름() {
    // return 필드이름;
    // }

    // 필드에 대한 겟터/셋터 메소드
    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setKorean(int korean) {
        this.korean = korean;
    }

    public int getKorean() {
        return korean;
    }

    public void setEnglish(int english) {
        this.english = english;
    }

    public int getEnglish() {
        return english;
    }

    public void setMath(int math) {
        this.math = math;
    }

    public int getMath() {
        return math;
    }

    // 총점 계산하는 메소드
    private int calSum() {
        return korean + english + math;
    }
    /* 외부에서 딱히 해당 메소드를 필요로 하지 않으므로 private(평균도 마찬가지) */

    // 평균 계산하는 메소드
    private double calAverage() {
        return calSum() / (double) SIZE_SUBJECT;
    }

    // 필드의 값을 형식에 맞추어 출력하는 메소드
    public void print() {
        System.out.printf("번호: %03d 이름: %s\n", id, name);
        System.out.printf("국어: %03d 영어: %03d 수학: %03d\n", korean, english, math);
        System.out.printf("총점: %03d 평균: %06.2f\n", calSum(), calAverage());
    }

    // equals()
    public boolean equals(Object o) {
        if (o instanceof Ex01GetterSetter_Student) {
            Ex01GetterSetter_Student s = (Ex01GetterSetter_Student) o;
            if (id == s.id) {
                /* id 앞에 this. 안붙이는 이유 : this.를 붙이는건 코드의 가독성을 높이기 위함. 지금 이 코드에서는 id라는 파라미터
                 * 변수가 존재하지 않으므로 this.을 굳이 안붙여도 됨*/
                return true;
            }
        }
        return false;
    }

}

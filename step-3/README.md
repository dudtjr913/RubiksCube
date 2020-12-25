## 루빅스 큐브 3단계

## 게임 방법

- 큐브 섞기 & 게임 시작버튼을 눌러 게임을 시작한다.
- 큐브 공식을 입력해 게임을 진행한다.
- 게임은 Q를 입력해 종료할 수 있다.

## 기능

- 루빅스 큐브를 구현한다.
- 큐브는 W, B, G, Y, O, R의 6가지 색깔을 가지고 있다.
- 입력: 각 조작법을 한 줄로 입력받는다.
- 출력: 큐브의 6면을 펼친 상태로 출력한다.
- Q를 입력받으면 프로그램을 종료하고, 조작 받은 명령의 갯수를 출력시킨다.

---

## 기능 구현 목록

- ✔ html에 큐브의 초기 상태를 표시할 태그들을 입력한다.(pre, code, form, input, ul)
- ✔ form에 sumbit 이벤트를 등록한다.
- ✔ 유저의 input에서 필요한 값만 받기 위한 함수를 구현한다.
- ✔ 유저의 input과 필요한 값을 받아 유효성을 검사한다.
  - 예외처리)
    - ✔ U('), D('), F('), B('), R('), L('),2 이외의 입력은 모두 에러 처리 > join('')으로 비교
    - ✔ 한 번에 20개를 초과하여 입력하면 에러 처리
- ✔ 유저의 input이 유효할 때, input에 2가 있는지 확인하고 2가 있다면 앞의 index와 같게 만들어 준다.
  - ex) RR'2 => RR'R'
  - 이유) 2는 앞의 동작을 한 번 더 하라는 의미이기 때문
- Cube class를 만들고, 프로퍼티로 큐브의 배열을 할당하고, 각 큐브의 면을 돌릴 수 있는 메소드를 만든다.

  - ✔ 큐브의 배열 = 3차원 배열(6 x 3 x 3)
  - 큐브의 메소드 = turnFront, turnUp, turnDown과 같이 직관적인 이름 사용
    - 메소드를 만들 때 구현해야 하는 함수들
      - ✔ 바뀌는 큐브를 배열로 가지는 변수를 만드는 함수를 구현한다.
      - ✔ 바뀌는 큐브의 배열을 시계 방향 또는 반시계 방향으로 밀어내는 함수를 구현한다.
      - ✔ 밀어낸 큐브를 그대로 큐브에 반영하는 함수를 구현한다.

- ✔ 유저의 input을 입력받아 큐브를 회전시키는 switch를 사용한 함수를 구현한다.
- ✔ 바뀐 큐브를 화면에 출력하는 함수를 구현한다.
- ✔ Q를 입력받으면 프로그램을 종료하는 함수를 구현한다.

  - ✔ 이때, 유저의 input 개수를 함께 출력해준다. - 조작 받은 명령의 개수

- 처음이라 확실하지 않기 때문에 하드코딩 느낌으로 시작할 것이고, 리팩토링 과정을 통해 개선할 수 있도록 한다.

## 추가 기능 구현 목록

- ✔ 시작 시간과 끝나는 시간을 구해서 경과 시간을 출력한다.
- ✔ 큐브를 무작위로 섞기 기능을 만든다.
  - ✔ 배열과 random 메소드를 사용
  - ✔ 초기 화면을 변경
- ✔ 모든 면을 맞췄을 때 프로그램 종료
  - ✔ input이 끝나는 지점마다 면이 맞춰졌는지 확인

---

## 추가 구현 기능

- 프로그램 종료 시 경과 시간 출력
- 큐브의 무작위 섞기 기능
- 모든 면을 맞추면 축하 메시지와 함께 프로그램을 자동 종료

---

## 요구사항

- 가능한 한 커밋을 자주 하고 구현의 의미가 명확하게 전달되도록 커밋 메시지를 작성할 것
- 함수나 메소드는 한 번에 한 가지 일을 하고 가능하면 20줄이 넘지 않도록 구현한다.
- 함수나 메소드의 들여쓰기를 가능하면 적게(3단계까지만) 할 수 있도록 노력해 본다.
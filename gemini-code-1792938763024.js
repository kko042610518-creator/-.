function runProgram() {
  // 실행할 동작을 여기에 작성합니다.
  const now = new Date().toLocaleTimeString();
  
  // 화면의 텍스트 변경
  document.getElementById("result").innerText = "프로그램이 실행되었습니다! (현재 시각: " + now + ")";
  
  // 알림창 띄우기
  alert("프로그램 실행 완료!");
}
Ext.onReady(function(){
	alert("테스트");
	Ext.Msg.alert("타이틀","헬로월드~");
})
// 미리 정의된 함수들을 가져다 쓰는거다
// 우리는 html을 손댈 필요가 없이 javascript 파일로만 화면을 그려서 웹브라우저에 출력시킨다.
// 즉, localhost:1841 가서 페이지 소스보기 하면 <body></body> 태그 안에 아무것도 없고, bootstrap.js 파일을 호출한다.
// bootstrap.js는 sencha cmd에서 컴파일하면서 만들어준다?

// Ext. 으로 시작하는거는 extjs에서 미리 구현된 컴포넌트 또는 클래스(함수)들이다.

/* jQuery에서 아래 코드와 유사하다
 * $(document).ready(function(){
 * 	alert("헬로월드~");
 * })
 */
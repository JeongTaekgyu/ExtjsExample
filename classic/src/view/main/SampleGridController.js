/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.main.SampleGridController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.sampleGrid',
	// 버튼 클릭시, 데이터로드
	dataLoad : function(btn){
		console.log("버튼클릭이벤트 발생");
		/*var grid = btn.up("grid");
		var store = grid.getStore();
		store.load();*/
		var grid = btn.up("grid");
		var viewModel = grid.getViewModel();
		var store = viewModel.getStore("sampleStore");	// sampleStore는 stores의 이름
		store.load();
		console.log("Store",store);
	}
});

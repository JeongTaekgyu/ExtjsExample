/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.main.SampleGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'ViewModel.sampleGrid',
	data : {
		searchField : '검색값입니다'
	},
	stores : {
		sampleStore : {

			fields : ['column1','column2','column3'],	// fields는 dataIndex값 하고 맞춰줘야 하지만 안맞춰줘도 무관하긴 하다
			proxy : {
				type : 'ajax',
				url : 'localhost:8080/gridcombo/selectGrid.jsp',
				render : {
					type : 'json',
					rootProperty : 'dada'
				}
			}
		}
	}
});

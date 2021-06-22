Ext.define('Study.view.main.SampleGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'sampleGrid',
	// 핸들러 정의
	controller : 'sampleGrid',	// SampleGridController.js 에있는 alias 이름
	viewModel : 'sampleGrid',
	tbar  : [{
		xtype : 'textfield',
		bind : {
			value : '{searchField}'
		}
	},{
		xtype : 'button',
		text : '데이터로드',
		handler : 'dataLoad' // SampleGridController.js 에 있는 dataLoad
	}],
	colums : [{
		text : '컬럼1',
		flex : 1,
		dataIndex : 'column1'
	},{
		text : '컬럼2',
		flex : 1,
		dataIndex : 'column2'
	},{
		text : '컬럼3',
		flex : 1,
		dataIndex : 'column3'
	}],
	bind : {
		store : '{sampleStore}'
	}
    /*controller: 'main',
    viewModel: 'main',*/
});

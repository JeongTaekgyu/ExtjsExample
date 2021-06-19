
// 4-1강
//Ext.onReady(function(){
	//alert("테스트");
	//Ext.Msg.alert("타이틀","헬로월드~");
	/*Ext.create("Ext.panel.Panel",{
		width: 500,
		height: 300,
		renderTo : Ext.getBody(), // 어느 위치에 이 컴포넌트를 얹히겠냐
		border : true,
		// items 라는 array를 이용해서 컴포넌트를 배치시킨다.
		items : [{
			xtype : 'textfield'
		},{
			xtype : 'numberfield'
		},{
			xtype : 'button',
			text : '버튼'
		}]
	})*/
	// create해서 도화지를 body태그에 얹히고,
	// items 어레이에 각 key value로 xtype을 이용해 컴포넌트를 그린다. (component를 사용하고자할 때는 xtype을 사용한다.)

	// 위코드는 아래 html 코드와 유사하다
	/*	<body>
	    <div><input type="text"/></div>
	    <div><input type="number"/></div>
		<div><input type="button" value="버튼" /></div>
	</body>*/


//})



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


// 4-2강. 문법 및 레이아웃 이해(2)
/*Ext.onReady(function(){
	Ext.create("Ext.container.Viewport",{
		renderTo : Ext.getBody(),
		layout : 'border',	// 이건 안에 새로운 items 가 있을때 사용하는것 같다
		border : true,
		items : [{
			xtype: 'panel',
			border : true,
			flex : 1,
			region : 'west',
		},{
			xtype : 'panel',
			border : true,
			layout : 'border',
			flex : 3,
			title : 'c',
			region : 'center',
			items : [{
				xtype : 'panel',
				layout : 'border',
				border : true,
				flex : 1,
				region : 'north',
				title : 'c-n',
				items : [{
					xtype : 'panel',
					border : true,
					flex : 1,
					region : 'west',
					title : 'c-n-w'
				},{
					xtype : 'panel',
					border : true,
					flex : 1,
					region : 'center',
					title : 'c-n-c'
				}]
			},{
				xtype : 'panel',
				border : true,
				flex : 2,
				region : 'center',
				layout : 'border',
				title : 'c-c',
				items : [{
					xtype : 'panel',
					border : true,
					flex : 2,
					layout : 'border',
					region : 'north',
					title : 'c-c-n',
					items : [{
						xtype : 'panel',
						border : true,
						flex : 1,
						region : 'north',
						title : 'c-c-n-n'
					},{
						xtype : 'panel',
						border : true,
						flex : 1,
						region : 'center',
						title : 'c-c-n-c',
					}]
				},{
					xtype : 'panel',
					border : true,
					flex : 1,
					region : 'center',
					title : 'c-c-c',
					layout : 'border',
					items : [{
						xtype : 'panel',
						border : true,
						flex : 1,
						region : 'west',
						title : 'c-c-c-w'
					},{
						xtype : 'panel',
						border : true,
						flex : 1,
						region : 'center',
						title : 'c-c-c-c'
					},{
						xtype : 'panel',
						border: true,
						flex : 1,
						region : 'east',
						title : 'c-c-c-e'
					}]
				}]
			}]
		}]
	})
})
*/

/*Ext.onReady(function(){
	// 최초에 Ext.create라는 명령어를 주고  그 다음은 json구조로 key, value 속성으로 화면을 다 그린다.
	Ext.create("Ext.container.Viewport",{
		renderTo: Ext.getBody(),
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '패널입니다',
			items :[{
				xtype : 'button',
				text : '버튼2'
			},{
				xtype : 'textfield'
			}]
		}]
	})
})
*/


/*Ext.onReady(function(){
	Ext.create("Ext.container.Viewport",{
		renderTo: Ext.getBody(),
		layout : 'border',
		border : true,
		items : [{
			xtype : 'panel',
			flex : 2,
			border : true,
			region : 'north',
			title : '패널 north',
			layout : 'border',
			items : [{
				xtype : 'panel',
				flex : 2,
				border : true,
				region : 'west',
				title : '패널 north-west'
			},{
				xtype : 'panel',
				flex : 2,
				border : true,
				region : 'center',
				title : '패널 north-center'
			},{
				xtype : 'panel',
				flex : 1,
				border : true,
				region : 'south',
				title : '패널 north-south'
			}]
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'west',
			title : '패널 west'
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'center',
			title : '패널 center',
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'east',
			title : '패널 east',
			layout : 'border',
			items : [{
				xtype : 'panel',
				flex : 1,
				border : true,
				region : 'north',
				title : 'east-north'
			},{
				xtype : 'panel',
				flex : 2,
				border : true,
				region : 'center',
				title : 'east-center'
			}]
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'south',
			title : '패널 south'
		}]
	})
})*/


// layout : 'fit', 'border'
// layout2: 'center', 'absolute', 'accordion', 'card', 'hbox/vbox'

// 5강. 레이아웃 추가로 알아보기 - center
/*Ext.onReady(function(){
	// center
	Ext.create("Ext.container.Viewport",{
		//renderTo : Ext.getBody(),
		layout : 'border',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'center',
			width : 1200,
			height : 500,
			items : [{
				xtype : 'panel',
				width : 300,
				height : 200,
				border : true,
				title : '첫째 패널',
				items : [{
					xtype : 'textfield'
				},{
					xtype : 'textfield'
				},{
					xtype : 'button',
					text : '로그인'
				}]
			}]
		}]
	})
})*/


// 5강. //absolute
/*Ext.onReady(function(){
	Ext.create("Ext.container.Viewport",{
		//renderTo : Ext.getBody(),
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'absolute', // 첫째 패널 도 둘째 패널도 위치를 선언 하지 않으면 둘다 0,0 위치에 있다.
			items : [{
				xtype : 'panel',
				width : 300,
				height : 200,
				x : 100,
				y: 150,
				border : true,
				title : '첫째 패널',
			},{
				xtype : 'panel',
				width : 300,
				height : 200,
				x : 300,
				y : 200,
				border : true,
				title : '둘째 패널',
			}]
		}]
	})
})*/


// 5강. accordion
/*Ext.onReady(function(){
	// accordion
	Ext.create("Ext.container.Viewport",{
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'accordion',

			items : [{
				xtype : 'panel',
				title : '첫째 패널',
				html : '첫째입니다'
			},{
				xtype : 'panel',
				title : '둘째 패널',
				html : '둘째입니다'
			},{
				xtype : 'panel',
				title : '셋째 패널',
				html : '셋째입니다.'
			}]
		}]
	})
})*/


// 5강. card
/*Ext.onReady(function(){
	// 항상 레이아웃 속성은 적용하고자 하는 부모패널한테 지정한다.
	// card
	Ext.create("Ext.container.Viewport",{
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'card',

			tbar: [{
		        text: 'Before',
		        handler: function(btn){
		        	if(btn.up("panel").getLayout().getPrev()) {
		        		btn.up("panel").setActiveItem(btn.up("panel").getLayout().getPrev());
	                }else {
	                	alert("첫번째 페이지");
	                }
		        }
		    },{
		        text: 'Next',
		        handler: function(btn){
		        	 if(btn.up("panel").getLayout().getNext()) {
		        		 btn.up("panel").setActiveItem(btn.up("panel").getLayout().getNext());
	                 }else {
	                	 alert("마지막 페이지");
	                 }
		        }
		    }],

			items : [{
				xtype : 'panel',
				title : '첫째 패널',
				html : '첫째입니다'
			},{
				xtype : 'panel',
				title : '둘째 패널',
				html : '둘째입니다'
			},{
				xtype : 'panel',
				title : '셋째 패널',
				html : '셋째입니다.'
			}]
		}]
	})
})*/


// vbox(vertical)/ hbox(horizontal)
/*Ext.onReady(function(){
	// vbox(vertical)/ hbox(horizontal)
	Ext.create("Ext.container.Viewport",{
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'hbox', // hbox는 horizontal, vbox는 vertical

			items : [{
				xtype : 'button',
				text: '등록'
			},{
				xtype : 'button',
				text : '목록'
			},{
				xtype : 'button',
				text : '감사'
			}]
		}]
	})
})
*/


// 6강. API 문서 보는법
/*Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 600,
		height : 400,
		title : "6강 ExtJS 타이틀",
		renderTo : Ext.getBody(),
		layout : 'border',
		items : [{
			xtype : 'panel',
			border : true,
			flex : 1,
			region : 'west',
			split : true, // panel 간격 조절
			title : 'west입니다',
			collapsible : true, // panel 접을 수 있음
			html : '<b>안녕하세요</br>'
		},{
			xtype : 'panel',
			border : true,
			title : '센터',
			flex : 2,
			region : 'center',
			layout : 'border',
			items : [{
				xtype : 'panel',
				border : true,
				flex : 2,
				title : '센터-센터',
				region : 'center',
				layout : 'center',
				items : [{
					xtype : 'button',
					text : '버튼입니다',
					// 아래도 마찬가지로 key, value 형식인데 value가 function으로 들어갈 수도 있다.
//					handler : function(btn){
//						alert("버튼 클릭!");
//					}
					// 위에 handler와 보여지는것 동일한 이벤트, 둘 중 하나만 써야하네
					listeners : {
						click : function(btn){
							alert(btn.getText());
						}
					}
				}]
			},{
				xtype : 'panel',
				border : true,
				flex : 1,
				title : 'south',
				region : 'south',
				collapsible : true,
				split : true // panel 간격조절
			}]
		}]
	})
})*/


// 패널 타이틀
/*Ext.onReady(function(){
	//POSITION : TOP
	Ext.create('Ext.Panel', {
	    width: 300,
	    height: 300,
	    title : 'Title Configs',
	    dockedItems : [{
	    	//items add tool bar
	    	xtype : 'toolbar',
	    	//default 'top'
	    	dock : 'top',
	    	// sub items buttons
	    	items : [{
	    		xtype : 'button',
	    		text :'copy'
	    	},{
	    		xtype : 'button',
	    		text :'cut'
	    	},{
	    		xtype : 'button',
	    		text :'paste'
	    	}]
	    }],
	    //renderTo: document.getElementById("top")
	    renderTo: Ext.getBody()
	});
	//POSITION : BOTTOM
	Ext.create('Ext.Panel', {
	    width: 300,
	    height: 300,
	    title : 'Title Configs',
	    dockedItems : [{
	    	//items add tool bar
	    	xtype : 'toolbar',
	    	dock : 'bottom',
	    	// sub items buttons
	    	items : [{
	    		xtype : 'button',
	    		text :'copy'
	    	},{
	    		xtype : 'button',
	    		text :'cut'
	    	},{
	    		xtype : 'button',
	    		text :'paste'
	    	}]
	    }],
	    //renderTo: document.getElementById("bottom")
	    renderTo: Ext.getBody()
	});
	//POSITION :LEFT
	Ext.create('Ext.Panel', {
	    width: 300,
	    height: 300,
	    title : 'Title Configs',
	    dockedItems : [{
	    	//items add tool bar
	    	xtype : 'toolbar',
	    	dock : 'left',
	    	// sub items buttons
	    	items : [{
	    		xtype : 'button',
	    		text :'copy'
	    	},{
	    		xtype : 'button',
	    		text :'cut'
	    	},{
	    		xtype : 'button',
	    		text :'paste'
	    	}]
	    }],
	    //renderTo: document.getElementById("left")
	    renderTo: Ext.getBody()
	});
	//POSITION : RIGHT
	Ext.create('Ext.Panel', {
	    width: 300,
	    height: 300,
	    title : 'Title Configs',
	    dockedItems : [{
	    	//items add tool bar
	    	xtype : 'toolbar',
	    	dock : 'right',
	    	// sub items buttons
	    	items : [{
	    		xtype : 'button',
	    		text :'copy'
	    	},{
	    		xtype : 'button',
	    		text :'cut'
	    	},{
	    		xtype : 'button',
	    		text :'paste'
	    	}]
	    }],
	    //renderTo: document.getElementById("right")
	    renderTo: Ext.getBody()
	});
})*/


// 8강. 다양한 메시지 상자 만들어보기
/*Ext.onReady(function(){
	Ext.create('Ext.Panel', {
	    width: 480,
	    height: 200,
	    layout: {
	        type: 'hbox',
            align: 'center',
            pack : 'center'
	    },
	    items : [
		// Button Small Size
        {
	    	xtype : 'button',
	    	text : 'small',
	    	scale : 'small'
	    },
	 	// Button Midium Size
	    {
	    	xtype : 'button',
	    	text : 'midium',
	    	scale : 'medium'
	    },
	 	// Button Large Size
	    {
	    	xtype : 'button',
	    	text : 'large',
	    	scale : 'large'
	    }],
	    tbar : [
		// 1. DEFAULT BUTTON Component
	    {
	    	xtype : 'button',
	    	text : 'default button'
	    },
	 	// 2. Toggle Button - enableToggle: true
	    {
	    	xtype : 'button',
	    	enableToggle: true,
	    	text : 'toggle button'
	    },
	    // 3. Menu Button - configs menu - Json Array
	    {
	    	xtype : 'button',
	    	text : 'menu button',
	    	menu : [{
	    		text : 'menu1'
	    	},{
	    		text : 'menu2'
	    	},{
	    		text : 'menu3'
	    	}]
	    },
	    // 4. Split Button(Menu) - configs menu - Json Array
	    {
	    	xtype : 'splitbutton', // 우측 화살표 영역을 클릭해야만 메뉴목록이 출력된다.
	    	text : 'split button',
	    	menu : [{
	    		text : 'split1'
	    	},{
	    		text : 'split2'
	    	},{
	    		text : 'split3'
	    	}]
	    }],
	    fbar : [
         // 5. Group Button
         {
	    	 xtype: 'segmentedbutton',
             items: [{
            	 xtype : 'button',
                 text: 'group1'
             }, {
            	 xtype : 'button',
                 text: 'group2'
             }, {
            	 xtype : 'button',
                 text: 'group3'
             }]
	    },
	    // 6. Group Toggle Button - allowMultiple: true
	    {
	    	 xtype: 'segmentedbutton',
	    	 allowMultiple: true,	// 그룹버튼들 모두 토글기능을 가지게 된다.
             items: [{
            	 xtype : 'button',
                 text: 'group toggle1'
             }, {
            	 xtype : 'button',
                 text: 'group toggle2'
             }, {
            	 xtype : 'button',
                 text: 'group toggle3'
             }]
	    }],
	    renderTo: Ext.getBody()
	});
})*/

//confirm
/*Ext.onReady(function(){
	Ext.Msg.confirm("This is alert","내용입니다",
		function(btn){
			if(btn == "yes"){
				alert("예스");
			} else {
				alert("놉");
			}
	});
})*/

// 8강. toast
/*Ext.onReady(function(){
	Ext.toast({
		align : 't',
        html: "Top Center",
        closable: false
    });
	Ext.toast({
		align : 'tr',
        html: "Top Right",
        closable: false
    });
	Ext.toast({
		align : 'tl',
        html: "Top Left",
        closable: false
    });
	Ext.toast({
		align : 'b',
        html: "Bottom",
        closable: false
    });
	Ext.toast({
		align : 'br',
        html: "Bottom Right",
        closable: false
    });
	Ext.toast({
		align : 'bl',
        html: "Bottom Left",
        closable: false
    });
})*/


/*Ext.onReady(function(){
	Ext.MessageBox.show({
		title : '자바스크립트 알림',
		msg : '문구변경버튼',
		icon : Ext.MessageBox.QUESTION,
		buttonText : {
			ok : '오키',
			no : '노',
			yes : '예스',
			cancel : '캔슬'
		}
	})
})*/



// 9강. 윈도우 컴포넌트의 속성
/*Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		border : true,
		width : 300,
		height : 200,
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'button',
			text : '패널버튼',
			handler : function(btn){
				var win = Ext.create("Ext.window.Window",{
					width : 400,
					height : 300,
					minWidth: 200,
					minHeight: 200,
					maxWidth: 600,
					maxHeight: 550,
					autoShow : true,
					title : 'window Title',
					// 내부적으로 컴포넌트 삽입할때는 items 속성 사용해야 한다.
					items : [{
						xtype : 'button',
						text : '버튼'
					}],
					modal :true, // 백그라운드에 생성된 컴포넌트를 비활성화 시키는 여부 ( modal : true는 백그라운드를 클릭하지 못하게 막기위해서 )
					maximizable : true // 가득 채우게 하는 버튼 추가
				});
				win.show();
			}
		}]
	});
})*/


/*Ext.onReady(function(){
	Ext.create("Ext.window.Window",{
	width : 400,
	height : 300,
//	minWidth : 250,
//	minHeight : 250,
//	maxWidth : 450,
//	maxHeight : 300,
	autoShow : true,
	title : 'window Title',
	// 내부적으로 컴포넌트 삽입할때는 items 속성 사용해야 한다.
	items : [{
		xtype : 'button',
		text : '버튼'
	}],
	modal :true, // 백그라운드를 클릭하지 못하게 막기위해서
	resizable : true,
	maximizable : true, // 가득 채우게 하는 버튼 추가
	draggable : false	// default 값은 true
	})

	var win = Ext.create("Ext.window.Window",{
		autoShow : true	// autoShow는 객체 생성과 동시에 보여주는지 여부
	});
})*/



// 10강. 탭 패널 간단히 만들기
/*Ext.onReady(function(){
	Ext.create("Ext.tab.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		tabPosition : 'right',

		items : [{
			xtype : 'panel',
			title : '탭1',
			items : [{
				xtype : 'button',
				text : '버튼1'
			}]
		},{
			xtype : 'panel',
			title : '탭2'
		},{
			xtype : 'panel',
			title : '탭3'
		},{
			xtype : 'panel',
			title : '탭4'
		}]
	})
})*/


// 11강. 입력태그에는 어떤것들이 있을까? (form필드 알아보기)
/*Ext.onReady(function(){
	Ext.create('Ext.Panel',{
		title : 'Default Form Field',
		items : [{
			xtype : 'textfield',
			width : 500,
			fieldLabel : 'ID'
		},{
			xtype : 'textfield',
			inputType : 'password',
			width : 500,
			fieldLabel : 'password'
		},{
			xtype : 'filefield',
			width : 500,
			fieldLabel : 'file'
		},{
			xtype : 'filebutton',
			text : 'upload button'
		},{
			xtype : 'numberfield',
			width : 500,
			fieldLabel : 'number'
		},{
			xtype : 'datefield',
			width : 500,
			fieldLabel : 'date',
			maxValue: new Date()
		},{
			xtype : 'timefield',
			width : 500,
			fieldLabel : 'time'
		},{
			xtype : 'textarea',
			width : 500,
			fieldLabel : 'textarea'
		},{
			xtype : 'checkbox',
			fieldLabel : 'checkbox',
			value : 'yes'
		},
		{
			// layout : 'fit', 'border'
			// layout2: 'center', 'absolute', 'accordion', 'card', 'hbox/vbox'
			xtype : 'panel',
			layout : 'hbox',
			items : [{
		        xtype: 'radiofield',
		        name: 'radio1',
		        value: 'M',
		        boxLabel: 'Man',
		        fieldLabel : 'Sex'
			  }, {
		        xtype: 'radiofield',
		        name: 'radio1',
		        value: 'W',
		        boxLabel: 'Woman'
		  	}]
		},
		{
			xtype : 'panel',
			layout : 'fit',
			title : 'editor',
			items : [
				{
					xtype : 'htmleditor'
				}
	        ]
		},
		{
			xtype : 'panel',
			layout : 'fit',
			title : 'datepicker',
			layout : 'hbox',
			items : [
				{
					xtype : 'datepicker'
				},{
					xtype : 'monthpicker'
				}
         	]
		}],
		renderTo : Ext.getBody()
	})
})*/


// 12강. DataStore의 이해(1) - 콤보박스 연동
/*Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 300,
		height : 300,
		title : 'DataStore 이해',
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'combo',
			editable: false,
			value : 'third',	// 모든 폼필드 컴포넌트는 value 속성이 있다.  특정 폼필드 컴포넌트한테 초기값을 넣어주고자 하는
			displayField : 'test1', // 호출해 주고자 하는 field명 (화면상 보여주고자하는 값)
			valueField : 'test2', // 선택했을 때 실제로 데이터가 담겨있는 값, 실제로 서버에 넘기고자 하는 값
			//Ext.data.Store
			// <option value="test2">테스트</option> 이 상태와 동일하다, value 값이 valueField, 테스트가 displayField
			store : {
			//  그냥 store : {} 해도 Ext.data.Store 클래스를 호출 한거라고 설명하네 
			// store 안에 Ext.create("Ext.data.Store", {} ) 를 선언한거랑 동일하는 뜻
				fields : ['test1', 'test2'],	// 선언하고자 하는 data key값들
				// 배열 형태로 여러개의 JSON Object 형태를 선언
				data :[{
					test1 : '첫번째',
					test2 : 'first'
				},{
					test1 : '두번째',
					test2 : 'second'
				},{
					test1 : '세번째',
					test2 : 'third'
				}]
			}
		}]
	})
})*/


// 12강. DataStore의 이해(2) - 그리드 연동
/*Ext.onReady(function(){
	Ext.create("Ext.grid.Panel",{
		width : 500,
		height : 300,
		renderTo : Ext.getBody(),
		// 그리드 컴포넌트 지원은 columns
		columns : [{
			text : '컬럼1',
			dataIndex : 'c1', // JSON의 KEY 값을 연동
			flex : 1,
			style : 'text-align:center;',
			align : 'center'
		},{
			text : '컬럼2',
			dataIndex : 'c2',
			flex : 1,
			align : 'left'
		},{
			text : '컬럼3',
			dataIndex : 'c3',
			flex : 1,
			align : 'right'
		}],
		// columns 안에있는 값들과 fields와 매필을 해줘야한다. 그러기 위해선 각 columns 에 속성을 추가해야한다. ex)dataIndex
		store : {
			// c1, c2, c3 가 key값? 그렇다네
			fields : ['a1', 'a2', 'a3'],// 지금은 의미가 없는것 처럼 보이지만 서버로 데이터 보낼때 의미 있다. 즉 data의 key값인 c1,c2,c3 키값을 사용해야한다.
			data : [{
				c1 : '컬럼1-1',
				c2 : '컬럼1-2',
				c3 : '컬럼1-3'
			},{
				c1 : '컬럼2-1',
				c2 : '컬럼2-2',
				c3 : '컬럼2-3'
			}]
		}
	})
})*/


// 12강. DataStore의 이해(3) - Ajax
// ajax를 통해 서버(원격)로 부터 데이터를 받아와서 화면에 출력
/*Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 300,
		height : 200,
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'combo',
			displayField : 'key', // 화면에 보여줄 데이터
			valueField : 'value', // 서버로 전송할 데이터
			store : {
				fields : ['key', 'value'],
				//기존에는  data : [{}] 이렇게 목록형식으로 넣었는데 이걸 안쓰고,  ajax 호출할 때는 proxy 라는걸 사용한다
				proxy : {
					type : 'ajax',
					// 서버로 부터 내려오는 데이터를 호출한다.
					url : '/data/combo.json', // 절대경로
					// get관련 데이터 목록을 불러온다. crud중 read
					reader : {
						type : 'json',
						rootProperty : 'data2' // 최상단 key값  즉, 현재 combo.json 에 있는 data2
					}
				}
			}
		},{
			xtype : 'grid',
			columns : [{
				text : '컬럼1',
				dataIndex : 'column1' // JSON의 KEY 값을 연동
			},{
				text : '컬럼2',
				dataIndex : 'column2'
			},{
				text : '컬럼3',
				dataIndex : 'column3'
			}],
			store : {
				autoLoad : true,
				fields : ['column1', 'column2', 'column3'],	// dataIndex 값과 맞춰줘야함
				//기존에는  data : [{}] 이렇게 목록형식으로 넣었는데 이걸 안쓰고,  ajax 호출할 때는 proxy 라는걸 사용한다
				proxy : {
					type : 'ajax',
					// 서버로 부터 내려오는 데이터를 호출한다.
					url : '/data/grid.json', // 절대경로
					// get관련 데이터 목록을 불러온다. crud중 read
					reader : {
						type : 'json',
						rootProperty : 'data3' // 최상단 key값  즉, 현재 grid.json 에 있는 data3
					}
				}
			}
		}]
	})
})*/



// 13강. 트리패널 + 트리Store의 이해
/*Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 600,
		height : 400,
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'treepanel',
			root : {
				text : 'Servers',
				expanded : true,
				children :[{
					text : '.settings',
					expanded : true,
					children : [{
						text : 'hello',
						leaf : true
					}]
				},{
					text : 'Tomcat v9.0 Server at localhost-config',
					expanded : true,
					children : [{
						text : 'hello2',
						leaf : true
					},{
						text : 'hello33',
						leaf : true
					}]
				},{
					text : 'web.xml',
					leaf : true // 하위폴더가 없음
				}]
			}
		}]
	})
})*/

// tree.json 사용
/*
 * text : button 컴포넌트처럼 문구출력할 때 필요한 속성
 * expanded : 화장여부
 * children : json array text / expanded / children / leaf
 * leaf : true - 마지막 노드다 - 파일아이콘 출력
 * */

/*Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 600,
		height : 400,
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'treepanel',
			store : {
				root : {
					text : 'Servers',
					expanded : true
				},
				proxy : {
					type : 'ajax',
					url : '/data/tree.json',
					reader : {
						type : 'json'
					}
				}
			}
		}]
	})
})*/


// 14강 GridPanel + 페이징 및 버퍼스토어 적용
/*Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 800,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'grid',
			columns : [{
				text : '시',
				dataIndex : 'si',
				flex : 1
			},{
				text : '군구',
				dataIndex : 'gungu',
				flex : 1
			},{
				text : '동',
				dataIndex : 'dong',
				flex : 1
			}],
			// 지금은 paging.js 파일이 없어서 못보여준다
			store : {
				autoLoad : true,
				fields : ['si', 'gungu', 'dong'],
				pageSize : 5,
				proxy : {
					type : 'ajax',
					url : "http://localhost:8080/paging.js",
					reader : {
						type : 'json',
						rootProperty : 'data',
						totalProperty : 'total'
 					}
				}
			},
			
			// bbar란 하단에 위치하는 툴바
			bbar : {
				xtype : 'pagingtoolbar',
				plugins : 'ux-slidingpager',	
				// 참고로 'ux-slidingpager' 플그인은 미리 패키지가 정의 되어있어야 사용 가능하다
				// 지금 app.json 에 다음과 같이 ux가 정의 되어잇다.  "requires": ["font-awesome", "ux"]
				displayInfo : true
			}
			
			// 버퍼드 스토어 - 스크롤 페이징
			store : Ext.create("Ext.data.BufferedStore",{
				autoLoad : true,
				fields : ['si', 'gungu', 'dong'],
				proxy : {
					type : 'ajax',
					url : "http://localhost:8080/paging.js",
					reader : {
						type : 'json',
						rootProperty : 'data',
						totalProperty : 'total'
 					}
				}
			})
		}]
	})
})*/

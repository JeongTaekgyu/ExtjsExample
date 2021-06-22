// 20강 데이터바인딩 및 MVVM 구조이해
Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			// 이 컴포넌트를 별도로 define해서 우리만의 xtype으로 만들거다
			xtype : 'sampleGrid',

		}]
	})
})

// 18강. ExtJS Ajax 클래스 이해하기
/*Ext.onReady(function(){
	Ext.Ajax.request({
		url : 'http://localhost:8080/paging.jsp',
		method : 'POST',
		params : {	// 어떤 데이터를 파라미터로 서버에 보낼지 설정
			//key : value
			start : 10,
			limit : 20
		},
		success : function(response){	// 서버에서 응답을 받았을 때
			console.log("success", Ext.decode(response.responseText));
		},
		failure : function(response){	// 서버에서 응답을 못 받았을 때 여기에서 값을 받는다
			console.log("fail",response.status);
		}
	})
})*/

/*Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'grid',
			listeners : {
				boxready : function(obj){ // 항상 대부분의 파라미터는 해당 객체를 의미한다
					// boxready는 grid가 생성되고 표출이 되기 전 ajax 콜을 사용한다 -> 그 다음 json 코드로 값을 받아온다(success에서)
					Ext.Ajax.request({
						url : 'http://localhost:8080/paging.jsp',
						method : 'POST',
						params : {	// 어떤 데이터를 파라미터로 서버에 보낼지 설정
							//key : value
							start : 10,
							limit : 20
						},
						success : function(response){	// 서버에서 응답을 받았을 때
							var result = Ext.decode(response.responseText);
							console.log("result",result);
							//console.log("success", Ext.decode(response.responseText));
							
							// 여기서 obj는 그리드 자기자신
							console.log("~~~ : ",obj.getStore());
							var store = obj.getStore();
							store.loadData(result.data);	// load와 loaddata의 차이는?
						},
						failure : function(response){	// 서버에서 응답을 못 받았을 때 여기에서 값을 받는다
							console.log("fail",response.status);
						}
					})
				}
			},
			columns : [{
				text : '시',
				dataIndex : 'si'
			},{
				text : '군',
				dataIndex : 'gungu'
			},{
				text : '동',
				dataIndex : 'dong'
			}],
			store : {
				fields : ['si', 'gungu', 'dong'],
				data : []
			}
		}]
	})
})*/


// 17강 그리그 조회,등록,수정,삭제
/*Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width: 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'grid',
			plugins : 'cellediting',
			columns : [{
				text : '텍스트1',
				dataIndex : 'text1',
				editor : {	// text를 수정할 수 있는 속성
					xtype : 'textfield'
				}
			},{
				text : '텍스트2',
				dataIndex : 'text2',
				editor : {
					xtype : 'textfield'
				}
			},{
				text : '텍스트3',
				dataIndex : 'text3',
				editor : {
					xtype : 'textfield'
				}
			}],
			store : {
				autoLoad : true,
				fields : ['id', 'text1', 'text2', 'text3'],	// fields 가 기본적으로 model이라고 생각하면 된다고?
				proxy : {
					type : 'ajax',
					// 아래처럼만 주면 get방식으로 넘어간다
					api : {
						create : "http://localhost:8080/crud/insert.jsp",
						read : "http://localhost:8080/crud/select.jsp",
						update : "http://localhost:8080/crud/update.jsp",
						destroy : "http://localhost:8080/crud/delete.jsp",
					},
					reader : {
						type : 'json',
						rootProperty : 'data',
						totalProperty : 'total'
					},
					writer : {	// editing 관련 속성
						type : 'json',
						rootProperty : 'data',
						writeAllFields : true,
						encode : true	// 변경된 값만 보내는게 아니라 모든 값을 보낸다
					}
				}
			},
			tbar : [{
				xtype : 'button',
				text : '등록',
				// 이벤트 리스너를 클릭이벤트를 줘도 되는데 버튼 같은경우는 핸들러 함수 사용해도 된다
				handler : function(btn){
					//console.log("~~~",btn.up("grid"));
					// 1. store 찾기
					// Extjs는 컴포넌트를 찾을 때 up(컴포넌트명 or itemId) / down 으로 찾는다
					// 버튼 컴포넌트를 클릭하면 핸들러의 첫번째 파라미터는 자기자신의 컴포넌트이다. 즉, this랑 같은거다	

					var storeI = btn.up("grid").getStore();	// "grid" 에서 store를 찾는다
					// 레코드는 fields명하고 동일하게 한다. -> 반ㄷ시 그래야만 하나?
					var newRec  = {
						text1 : '',
						text2 : '',
						text3 : ''
					}
					storeI.add(newRec);	// 레코드를 store에 담아주는 것
					// add. 밑에쪽으로 추가되는데 상단 부터 추가하고 싶으면 insert로 인덱스를 지정해 줄 수 있다.
					//storeA.insert(0, newRec);
				}
			},{
				xtype : 'button',
				text : '삭제',
				handler : function(btn){ // 선택된 grid의 레코드를 삭제한다
					//console.log("~~delete btn : ",btn.up("grid").getSelection());
					var storeD = btn.up("grid").getStore();
					var removeRec = btn.up("grid").getSelection();
					storeD.remove(removeRec);	// 내가 삭제하고자 하는 record 값을 파라미터로 준다
					// 선택한 record를 store로 부터 삭제
				}
			},{
				xtype : 'button',
				text : '적용',
				handler : function(btn){
					var storeA = btn.up("grid").getStore();
					//storeA.load();
					//storeA.reload();
					// sync 하면 update 되는데 그냥 sync()는 store 재조회 기능은 없기 때문에 sync 안에 재조회 기능 추가한다.
					storeA.sync({	// sync함수를 이용해 서버로 전달
						callback : function(){
							storeA.reload(); // select 를 다시 처리
						}
					});
				}
			}],
			bbar : {	// 하단 bar
				xtype : 'pagingtoolbar',
				displayInfo : true
			}
		}]
	})
})*/

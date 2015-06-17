//去左右空格
String.prototype.trim = function(){ 
	return this.replace(/^\s+|\s+$/g, '');
}

function myAddEvent(obj, sEv, fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+sEv, function (){
			if(false==fn.call(obj)){
				event.cancelBubble=true;
				return false;
			}
		});
	}
	else
	{
		obj.addEventListener(sEv, function (ev){
			if(false==fn.call(obj)){
				ev.cancelBubble=true;
				ev.preventDefault();
			}
		}, false);
	}
}

function getByClass(oParent, sClass){
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	var i=0;
	
	for(i=0;i<aEle.length;i++){
		if(aEle[i].className==sClass){
			aResult.push(aEle[i]);
		}
	}
	
	return aResult;
}

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj, false)[attr];
	}
}


(function(window, undefined){ 
	function MyQuery(vArg){ 
		this.elements = [];
		switch(typeof vArg){ 
			case 'function' :
				myAddEvent(window, 'load', vArg);
			break;
		}
	}

	MyQuery.prototype = { 
		constructor : MyQuery,
		click : function(){ 
		}
	}

})(window)
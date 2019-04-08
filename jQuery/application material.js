//关闭弹出层
function ShowDiv(show_div,bg_div){
	document.getElementById(show_div).style.display='block';
	document.getElementById(bg_div).style.display='block' ;
	var bgdiv = document.getElementById(bg_div);
	bgdiv.style.width = document.body.scrollWidth;
	$("#"+bg_div).height($(document).height());
};

function CloseDiv(show_div,bg_div)
{
	document.getElementById(show_div).style.display='none';
	document.getElementById(bg_div).style.display='none';
};

// 编辑个人签名
var edit = document.getElementById('edit_textarea');
var edit_two = document.getElementById('edit_textarea_two');
var edit_btn = document.getElementById('edit_btn');
var edit_group_btn = document.getElementById('edit_group_btn');
var edit_save = document.getElementById('edit_save');
var edit_cancel = document.getElementById('edit_cancel');

edit_btn.onclick = function(){
	edit.disabled = "";
	edit_btn.style.display = 'none';
	edit_group_btn.style.display = 'block';
}

edit_save.onclick = function (){
	edit_two.value = edit.value	
	edit.disabled = "disabled";
	edit_btn.style.display = 'block';
	edit_group_btn.style.display = 'none';	

}

edit_cancel.onclick = function (){	
	edit.value = edit_two.value	
	edit.disabled = "disabled";
	edit_btn.style.display = 'block';
	edit_group_btn.style.display = 'none';	

}
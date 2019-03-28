	function choose_index(btn){
			var yes = btn.getElementsByTagName('img')[0];
			if(yes.style.display == 'none'||yes.style.display == ''){
				yes.style.display = 'block';
			}
			else{
				yes.style.display = 'none';
			}
		}
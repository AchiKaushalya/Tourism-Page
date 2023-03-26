var names=["Hiranya Sasmitha", "Deegayu Kooragoda", "Achini Kaushalya", "Ameesha Hewage"];
		var i=0;
		var str="name"
		function myFun(){
		setTimeout(function namesAppear(){
			if (i<names.length){
				var num=i+1;
				document.getElementById(str.concat("", num.toString())).innerHTML=names[i];
				document.getElementById(str.concat("", num.toString())).style.animation="fadeIn linear 1s"; 
				i++;
				setTimeout(namesAppear,500);				
			}
		},700);
		}
		myFun();		

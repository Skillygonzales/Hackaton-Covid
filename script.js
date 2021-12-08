function saveName(){
                    var name = document.getElementById("mysearch").value;
                    var staticUrl = "https://corona.lmao.ninja/v2/countries?yesterday&sort"
	$.getJSON(staticUrl, function(data){

		for(i=0; i<data.length; i++){
			if(name === data[i].country){
				
				document.querySelector(".newcase").innerHTML = data[i].todayCases
				document.querySelector(".newdeath").innerHTML = data[i].todayDeaths
				document.querySelector(".newrecovered").innerHTML = data[i].todayDeaths
				document.querySelector(".activecases").innerHTML = data[i].active
				document.querySelector(".totalcases").innerHTML = data[i].cases
				document.querySelector(".indangercases").innerHTML = data[i].critical
				document.querySelector(".deathscases").innerHTML = data[i].deaths
				document.querySelector(".recoveredcases").innerHTML = data[i].recovered
			}       		
        }  
        

	});
        }
		const icon = document.querySelector(".icon");
        const search = document.querySelector(".search");

        icon.onclick = function(){
            search.classList.toggle('active')
        }

        const clear = document.querySelector(".clear");

        clear.onclick = function(){
            document.getElementById('mysearch').value = ' '
        }

    

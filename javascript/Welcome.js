window.onload = () => {
            
            const serviceData = JSON.parse(sessionStorage.getItem('serviceData'));
            const service = serviceData ? serviceData['https://api.themoviedb.org/3/movie/15'] : null;
                
                const queryPar0 = (service && service.queryParams && service.queryParams['api_key'] !== undefined) ? service.queryParams['api_key'].replaceAll(',','%2C') : '53a291cf74b766fc57b1a99d428dce1d';
                
        
            fetch(`https://api.themoviedb.org/3/movie/15?api_key=${queryPar0}`,{
                method: "GET", 

                headers: {}

                
            })
            .then(response => 
                response.json().then(data => {
                    
            try{
                document.getElementById('i2cmj').textContent = data.genres.0.name;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('iptzy').textContent = data.genres.1.name;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('iasia').textContent = data.original_title;
            }
            catch(e){
                console.log(e);
            }

                })
            )
        };
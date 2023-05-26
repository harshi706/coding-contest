        let url="https://kontests.net/api/v1/all"
        let response=fetch(url)
           response.then((value)=>{
            return value.json()
           }).then((code)=>{
            console.log(code)
            contest=""
            for (item in code){
                   console.log(code[item])
            contest += `
            <div class="card" style="width: 18rem;">
            <img src="first.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${code[item].name}</h5>
              <p>Starts at:${code[item].start_time}
                <p>Starts at:${code[item].end_time}
              <a href="${code[item].url}" class="btn btn-primary">Visit Here:</a>
            </div>
          </div>
          `
        }
          cardContainer.innerHTML=contest
    })

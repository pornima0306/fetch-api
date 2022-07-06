let cl = console.log;

const postsInfo=document.getElementById("postsInfo");

const apiUrl='http://localhost:3000/posts';

/* fetch(apiUrl,{  
    method : "GET" //bydefault value is GET
}) */

/* fetch returns promise */

/* fetch(apiUrl)
        .then(res=>res.json())  // res.json() also returns promise thats we use another .then() >> here promise chaining happen
        .then((data)=>cl(data))
        .catch(cl) */

function fetchData(url, methodName, objBody){
  return fetch(url,{
        method : methodName,
        body : objBody
    })
        .then(res=>res.json())//res.json() also returns promise thats we use another .then()>>here promise chaining happen
        
}
        fetchData(apiUrl,'GET')  // here this method returns promise
        .then(data => templating(data))
        .catch(cl)

function templating(arr){
let result="";
arr.forEach(element=>{
    result+=`
            <div class="card">
              <div class="card-body">
                <h3>${element.title}</h3>
                <p>${element.body}</p>
              </div>
            </div>`;
})
postsInfo.innerHTML=result;
}
let url = "https://simon_api.essung.dev/reviews";


document.querySelector("#form").addEventListener("submit", async (e) => {
  e.preventDefault();

  var name = document.querySelector("#fname").value;
  var content = document.querySelector("#textarea-review").value;

  await fetch(url, {
    method: "POST",
    mode: 'cors', 
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      "name": name,
      "content": content
    })
  });

  await getReviews();
});



const getReviews = async () => {

  let data = await fetch(url, {
    method: "GET",
    mode: 'cors', 
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  });

  data = await data.json();

  const container = document.querySelector("#reviewholder");
  

  data.forEach(e => {

    if(!container.querySelector(`[id='${CSS.escape(e["id"])}']`)) {

      const reviewContainer = document.createElement("div");
      reviewContainer.classList.add("reviewcontainer")

      container.appendChild(reviewContainer);
      reviewContainer.id = e["id"].toString();
      
      const header = document.createElement("h3");
      header.innerHTML = e["name"];
    
      reviewContainer.appendChild(header);

      const text = document.createElement("p");
      text.innerHTML = e["content"];
    
      reviewContainer.appendChild(text);
  }

  });
}

getReviews();
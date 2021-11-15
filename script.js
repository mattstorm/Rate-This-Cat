const fact = document.getElementById('cat-fact')
const apiUrl = 'https://catfact.ninja/fact'

//load cat image from url
function getCat() {
    document.getElementById('next-cat').addEventListener('click', () => {
    document.getElementById('cat-image').style.backgroundImage = "url('https://cataas.com/cat')";
  }); 

}

getCat()

//load cat fact from api
const getFact = function() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(json => {
        fact.innerText = json.fact
      })

  }

document.getElementById('new-fact').addEventListener('click', getFact)

getFact()


//functions to change star button background color

function oneStar() {
    document.getElementById('one-star').addEventListener('click', () => {
    document.getElementById('one-star').style.backgroundColor = "black"
    document.getElementById('two-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('three-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('four-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('five-star').style.backgroundColor = "#1DA1F2"
  })
}
  oneStar()

  function twoStar() {
    document.getElementById('two-star').addEventListener('click', () => {
    document.getElementById('one-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('two-star').style.backgroundColor = "black"
    document.getElementById('three-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('four-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('five-star').style.backgroundColor = "#1DA1F2"
  })
}
  twoStar()

  function threeStar() {
    document.getElementById('three-star').addEventListener('click', () => {
    document.getElementById('one-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('two-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('three-star').style.backgroundColor = "black"
    document.getElementById('four-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('five-star').style.backgroundColor = "#1DA1F2"
  })
}
  threeStar()

  function fourStar() {
    document.getElementById('four-star').addEventListener('click', () => {
    document.getElementById('one-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('two-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('three-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('four-star').style.backgroundColor = "black"
    document.getElementById('five-star').style.backgroundColor = "#1DA1F2"
  })
}
  fourStar()

  function fiveStar() {
    document.getElementById('five-star').addEventListener('click', () => {
    document.getElementById('one-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('two-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('three-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('four-star').style.backgroundColor = "#1DA1F2"
    document.getElementById('five-star').style.backgroundColor = "black"
  })
}
  fiveStar()
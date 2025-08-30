const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
        .then(res => res.json())
        .then(data => displayCounties(data))
}

//call the function//
loadCountries()

const displayCounties = (countries) => {


    const countriesDiv = document.getElementById("countries")

    countries.forEach(country => {


        const div = document.createElement("div")
        div.classList.add("country")
        // console.log(div)
        div.innerHTML = `
        
        
        <img src="${country?.flags?.png}" alt="">
        <h1>Name :${country?.name?.official}</h1>
        <p>population :${country?.population}</p>
        <p>Area :${country?.area}</p>
        <p>Capital :${country?.capital}</p>
        <p>Region :${country?.region}</p>
        <p>languages :${country?.languages?.eng}</p>
        <button>See more</button>
        
        `
        countriesDiv.appendChild(div)


    })


}
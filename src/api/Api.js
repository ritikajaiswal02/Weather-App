export const getApiData = async(city)=>{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d5e74e7b112e34001dc87b79a2fc7c3&units=metric`)

    return await response.json()
}

export const getState = async(lat,lon)=>{
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d5e74e7b112e34001dc87b79a2fc7c3&units=metric`)
    
    return await res.json()
}


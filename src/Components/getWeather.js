

export function getWeather(){

    let weather;

    fetch(    )
    .then(res=>res.json())
    .then(result => {
        console.log(result);
        weather=result;
    })

    return weather;

}


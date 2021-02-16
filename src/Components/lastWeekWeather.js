
export function getLastWeather(){

    let LastWeather;

    fetch(    )
    .then(res=>res.json())
    .then(result => {
        console.log(result);
        LastWeather=result;
    })

    return LastWeather;

}
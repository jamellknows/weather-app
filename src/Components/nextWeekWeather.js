
export function getNextWeather(){

    let Nextweather;

    fetch(    )
    .then(res=>res.json())
    .then(result => {
        console.log(result);
       Nextweather=result;
    })

    return Nextweather;

}
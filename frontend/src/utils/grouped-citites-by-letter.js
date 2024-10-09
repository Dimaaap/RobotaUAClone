export const groupCitiesByLetter = (cities) => {
    return cities.reduce((acc, city) => {
        const firstLetter = city.city_title[0].toUpperCase();

        if(!acc[firstLetter]){
            acc[firstLetter] = [];
        } 
        acc[firstLetter].push(city)
        return acc
    }, {});
}
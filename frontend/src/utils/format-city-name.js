export const formatCityName = (allCities, city) => {
    const cityCount = allCities.filter(c => c.city_title === city.city_title).length;
    return cityCount > 1 ? `${city.city_title}, ${city.region_title} обл.`: city.city_title
}
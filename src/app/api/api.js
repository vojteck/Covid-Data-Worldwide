import axios from 'axios';

export const getWorldData = async () => {
    try {
        return await axios.get('https://disease.sh/v3/covid-19/all?yesterday=true');
    } catch (err) {
        return err;
    }
};

export const getCountryData = async (country) => {
    try {
        return await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
    } catch (err) {
        return err;
    }
};

export const getCountriesData = async () => {
    try {
        return await axios.get('https://disease.sh/v3/covid-19/countries?yesterday=true');
    } catch (err) {
        return err;
    }
};

export const getContinentsData = async () => {
    try {
        return await axios.get('https://disease.sh/v3/covid-19/continents?yesterday=true');
    } catch (err) {
        return err;
    }
};

export const getContinentData = async (continent) => {
    try {
        return await axios.get(`https://disease.sh/v3/covid-19/continents/${continent}`);
    } catch (err) {
        return err;
    }
};
import axios from "axios";

const countriesUrl = "https://covid19.mathdro.id/api/countries";

export const getCountry = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(countriesUrl);
    console.log("Loading...");
    return { countries };
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Countries data fetched successfully");
  }
};

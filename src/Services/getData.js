import axios from "axios";

const generalUrl = "https://covid19.mathdro.id/api";

export const getData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(generalUrl);
    console.log("Loading...");
    console.log({ confirmed, recovered, deaths, lastUpdate });
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.log(err);
  } finally {
    console.log("General data fetched successfully");
  }
};

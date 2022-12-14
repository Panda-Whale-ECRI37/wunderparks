const axios = require("axios");

const API_KEY = "btQCAT4O0selRfC9gtES2mS0u149qPEhBxOuNU8i";
const NPSController = {};

NPSController.getParkCodes = async (_req, res, next) => {
  try {
    const result = await axios.get(
      `http://developer.nps.gov/api/v1/parks?api_key=${API_KEY}&limit=600`
    );
    const parkCodes = {};
    const parksData = {};
    // console.log(result);
    for (const park of result.data.data) {
      if (
        // park.designation.includes('National Park & Preserve') ||
        // park.designation.includes('National Parks') ||
        park.designation.includes("National Park") ||
        park.name.includes("Samoa") ||
        park.name.includes("Redwood")
      ) {
        // console.log(park);
        parksData[park.name] = park;
        parkCodes[park.name] = park.parkCode;
      }
    }
    res.locals.parksData = parksData;
    // console.log(parksData.Zion);
    res.locals.parkCodes = parkCodes;
    return next();
  } catch (err) {
    return next(err);
  }
};

NPSController.getPark = async (req, res, next) => {
  try {
    const { parkCode } = req.params;
    const result = await axios.get(
      `http://developer.nps.gov/api/v1/parks?api_key=${API_KEY}&parkCode=${parkCode}`
    );
    // const result = await axios.get(
    //   `http://developer.nps.gov/api/v1/parks?api_key=${API_KEY}&limit=600`
    // );
    // console.log(result.data.data[0]);
    res.locals.parkData = result.data.data[0];

    return next();
  } catch (err) {
    return next(err);
  }
};

NPSController.getModalInfo = async (req, res, next) => {
  try {
    const park = res.locals.parkData;
    const { parkCode } = req.params;
    const imgIdx = Math.floor(Math.random() * park.images.length);
    const webcam = await axios.get(
      `https://developer.nps.gov/api/v1/webcams?parkCode=${parkCode}&api_key=${API_KEY}`
    );
    const modalInfo = {
      description: park.description,
      latLong: park.latLong,
      states: park.states,
      photo: park.images[imgIdx].url,
      altText: park.images[imgIdx].altText,
      webcam: webcam.data.data.length > 0 ? webcam.data.data[0].url : null,
    };
    res.locals.modalInfo = modalInfo;
    next();
  } catch (err) {
    next(err);
  }
};

// NPSController.getFilteredParksInfo = (_req, res, next) => {
//   console.log("getFilteredParksInfo fired");
//   // console.log(res.locals.parksData);
//   const filteredParks = {};
//   for (let park in res.locals.parksData) {
//     // console.log(res.locals.parksData[park]);
//     const {
//       url,
//       parkCode,
//       activities,
//       topics,
//       states,
//       entranceFees,
//       entrancePasses,
//       directionsInfo,
//       directionsUrl,
//       operatingHours,
//       weatherInfo,
//       name,
//     } = res.locals.parksData[park];

//     filteredParks[parkCode] = {
//       url,
//       activities,
//       topics,
//       states,
//       entranceFees,
//       entrancePasses,
//       directionsInfo,
//       directionsUrl,
//       operatingHours,
//       weatherInfo,
//       name,
//     };
//   }
//   // console.log(filteredParks);
//   res.locals.parksData = filteredParks;
//   return next();
// };

module.exports = NPSController;

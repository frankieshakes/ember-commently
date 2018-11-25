export function initialize(application) {
  application.deferReadiness();
  let geo = navigator.geolocation;
  geo.getCurrentPosition((pos) => {
    let coords = pos.coords;
    let loc = {
      lat: coords.latitude,
      lng: coords.longitude
    };
    application.register('data:location', loc, {
      instantiate: false
    });
    application.advanceReadiness();
  });
}

export default {
  name: 'geo',
  initialize
};

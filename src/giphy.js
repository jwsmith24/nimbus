const key = '5sy2gbTlUx4bh7VJoOVcdfqksgWAyEUZ';

export async function getBackgroundImage(keyword) {
  const queryString = `http://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${keyword}`;

  const response = await fetch(queryString, {
    mode: 'cors',
  });
  const resJson = await response.json();

  console.log(resJson);

  // set background to animated gif or use icons if api calls have been used up

  if (resJson.meta.msg === 'OK' && resJson.data.images.original.url !== '') {
    return resJson.data.images.original.url;
  } else {
    switch (keyword) {
      case 'Clear':
        return '../resources/sunny.png';
      case 'Clouds':
        return '../resources/cloudy.png';
      case 'Rain':
        return '../resources/rainy.png';
      case 'Snow':
        return '../resources/snow.png';
      case 'Storms':
        return '../resources/stormy.png';
    }
  }
}

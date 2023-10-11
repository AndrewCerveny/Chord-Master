const getNoteDetails = (note, chord) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
    },
  };
  return fetch(
    `https://piano-chords.p.rapidapi.com/chords/${note}/${chord}`,
    options
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(
        `${res.status} ${res.statusText}: Whoops! No connection. Unable to load content!`
      );
    }
  });
};

const getMusicNotes = (baseNote) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_CHORD_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
    },
  };
  return fetch(
    `https://piano-chords.p.rapidapi.com/chords/${baseNote}`,
    options
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(
        `${res.status} ${res.statusText}: Whoops! No connection. Unable to load content!`
      );
    }
  });
};
const getBaseNotes = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_BASE_NOTE_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
    },
  };

  return fetch("https://piano-chords.p.rapidapi.com/chords", options).then(
    (res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          `${res.status} ${res.statusText}: Whoops! No connection. Unable to load content!`
        );
      }
    }
  );
};

export { getMusicNotes, getNoteDetails, getBaseNotes };

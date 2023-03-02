const getNoteDetails = (note, chord) => {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0ba55045bemsh7c87450d2a771b8p155de8jsn591dafeb3f86',
      'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
    }
  }
  return fetch(`https://piano-chords.p.rapidapi.com/chords/${note}/${chord}`, options)
  .then(response => response.json())

};

const getMusicNotes = (baseNote) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0ba55045bemsh7c87450d2a771b8p155de8jsn591dafeb3f86',
      'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
    }

  }  
  return fetch(`https://piano-chords.p.rapidapi.com/chords/${baseNote}`, options)
  .then(response => response.json())
  
  
};
const getBaseNotes = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0ba55045bemsh7c87450d2a771b8p155de8jsn591dafeb3f86',
      'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
    }
  }

  return fetch('https://piano-chords.p.rapidapi.com/chords', options)
	.then(response => response.json())
	
}

export {getMusicNotes, getNoteDetails, getBaseNotes}



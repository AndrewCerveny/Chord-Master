const getNoteDetails = (note, chord) => {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0ba55045bemsh7c87450d2a771b8p155de8jsn591dafeb3f86',
      'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
    }
  }
  return fetch(`https://piano-chords.p.rapidapi.com/chords/${note}/${chord}`, options)
  .then(res => {
    if(res.ok) {
     return res.json()
    }else{
      throw new Error(`${res.status} ${res.statusText}: Whoops! No connection. Unable to load content!`)
    }
  })

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
  .then(res => {
    if(res.ok){
     return res.json()
    }else{
      throw new Error( `${res.status} ${res.statusText}: Whoops! No connection. Unable to load content!`)
    }
  })
  
  
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
	.then(res => {
    if(res.ok) {
      return res.json()
    }else{
      throw new Error(`${res.status} ${res.statusText}: Whoops! No connection. Unable to load content!`)
    }
  })
	
}

export {getMusicNotes, getNoteDetails, getBaseNotes}



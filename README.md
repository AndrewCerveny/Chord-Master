## Project title/ Assignment given/ approx time spent on build

- Project Name : Chord Master
- Assignment: Showcase solo for MOD 3 at Turing
- Alloted time : 5 days  
## Motivation

- Chord Master is an invaluable tool for musicians seeking to create original and expressive music. While there are only 12 base notes in music, using them to craft truly innovative chord progressions can be a daunting task. Fortunately, Chord Master simplifies this process by providing a comprehensive database of chord progressions that always match the key of the song. With this resource, musicians can effortlessly incorporate harmonious chords that add depth and complexity to their compositions. Lastly, Chord Master includes a visual representation of a piano, making it simple for musicians to see the notes and their positions to a selected chord. With Chord Master, musicians can expand their creative abilities and take their musical prowess to new heights.
 
## Screenshots / deployment 
![ChordMaster](https://user-images.githubusercontent.com/104449342/222868587-a0844791-b5ec-4f12-bf38-d4095a022c43.gif)
Deployed [ChordMaster](https://chord-master-rkyd0yse4-andrewcerveny.vercel.app/)

## Tech/framework used
<div>
  <img src="https://img.shields.io/badge/-react-333333?logo=react&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-react%20router-f44250?logo=react%20router&logoColor=white&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-cypress-007780?logo=cypress&logoColor=white&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-CSS3-315780?logo=css3&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-npm-c12127?logo=npm&logoColor=white&style=for-the-badge" width="100"  height="30"/>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width="100" height="30" />
</div>

## Features
 A user will see a display of all root notes
 A user can pick a root note and see the notes variations
 A user can see a piano layout of the notes to make more sense. 


## Setup Instructions
1. Fork the Repo from [ChordMaster](https://github.com/AndrewCerveny/ChordMaster)
2. Clone the repo
   ```sh
   git clone  git@github.com:AndrewCerveny/ChordMaster.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run npm start
   ```sh
   npm start
   ```
5. Use the Link that is given in the Terminal & Open in Browser
   ```sh
   Example: http://localhost:3000/
   ```

## API Reference
GET Only:  [Piano Chords](https://rapidapi.com/jsdisco/api/piano-chords)

## Contributors

solo project

Andrew Cerveny: [Cerveny GitHub](https://github.com/AndrewCerveny)

6 months Turing Curriculum 


## Future extension
- A user can have a login page
- A user can save a chord progression and it would be displayed in an area called my current song.
- Have the website embed sound.  

## Challenges 

Dynamic routing was tricky because in music there are '#' symbols connected to some of the notes. THe '#' key is a special character in URLs finding a way to manipulate the data and account for that was an unexpected challenge. 


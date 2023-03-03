describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET','https://piano-chords.p.rapidapi.com/chords',{
      fixture:"rootnote.json"
    })
    cy.visit('http://localhost:3000/')

  })

  it('Should have a title', function() {
    cy.get('.title').should('contain','Chord Master')
  })
  it('Should have a logo', function(){
    cy.get('.title-wrap > img').should('be.visible')
  })
  it('Should have Two navigation buttons', function() {
    cy.get('.nav-btn').should('have.length',2)
  })
  it('Should show a root note card', function() {
    cy.get(".note-intro-display").should('be.visible')
  })
  it('Should navigate to a new page when a card is click',function(){
    cy.get('.note-intro-display').click()
    cy.url().should('eq','http://localhost:3000/Root/C' )
  })
  it('Should show a specified Note card once a card had been clicked', function(){
     cy.get('.note-intro-display').click()
     cy.url().should('eq','http://localhost:3000/Root/C')
     cy.get('.card-view').should('be.visible')
  })
  it('Should have a form visible for user input', function(){
     cy.get('.note-intro-display').click()
     cy.url().should('eq','http://localhost:3000/Root/C')
     cy.get('.form').should('be.visible')
  })
  it('If a user does not select a value, submit in the form is disabled', function(){
    cy.get('.note-intro-display').click()
    cy.url().should('eq','http://localhost:3000/Root/C')
    cy.get('input[name=chordSelect]').should('have.value','')
    cy.get('.form-btn').should('be.disabled')
  })
  it('Should allow a user to type into or pick from drop down', function(){
    cy.get('.note-intro-display').click()
    cy.url().should('eq','http://localhost:3000/Root/C')
    cy.get('.form')
      .within(()=>{
        cy.get('input[name=chordSelect]')
        .type('major')
        cy.get('.form-btn')
          .click()    
      }) 
      cy.intercept('GET','https://piano-chords.p.rapidapi.com/chords/c/major',{
        fixture:'majorChord'
      })   
      cy.get('.chosen-chord > h4').should('contain', 'major')
      cy.get('.note-area').should('contain','G')
      cy.get('.interval-area').should('contain','5') 
  })
  it ('Should clear a users input on clear button submission', function(){
    cy.get('.note-intro-display').click()
    cy.url().should('eq','http://localhost:3000/Root/C')
    cy.get('.form')
      .within(()=>{
        cy.get('input[name=chordSelect]')
        .type('major')
        cy.get('.form-btn')
          .click()
        cy.get('.form-btn-c')
          .click()   
        cy.get('input[name=chordSelect]').should('have.value','') 
      }) 
  })

  it('Should have a button to link the user to a button', function(){
    cy.get('.note-intro-display').click()
    cy.url().should('eq','http://localhost:3000/Root/C')
    cy.get('.piano-btn').click()
    cy.url().should('eq','http://localhost:3000/piano')
  })
  


})
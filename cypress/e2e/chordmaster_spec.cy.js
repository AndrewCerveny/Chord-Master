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
  it.only('Should show a specified Note card once a card had been clicked', function(){
     cy.get('.note-intro-display').click()
     cy.url().should('eq','http://localhost:3000/Root/C')
     cy.get('.card-view').should('be.visible')
  })
  it('Should have a form visible for user input', function(){
     cy.get('.note-intro-display').click()
     cy.url().should('eq','http://localhost:3000/Root/C')
  })

})
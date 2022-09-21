describe('empty spec', () => {
  it('passes', () => {
    cy.task('connectDB','SELECT NOW()').then((res)=>{
      cy.log(res[0].now);
    })
  })
})
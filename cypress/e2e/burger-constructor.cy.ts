describe('check burger-constructor passes', () => {

  it('отображение в модальном окне данных ингредиента', () => {
    cy.visit('/')
    cy.get('[alt="Краторная булка N-200i"]').click("center")
    cy.location().should((location) => expect(location.pathname).to.eq('/ingredients/643d69a5c3f7b9001cfa093c'))
    cy.get('[data-testId="details-image"]').should('exist')
    cy.get('[data-test="close_modal_details_icon"]').click('center')
  })

  it('check do the order', () => {
    const email: string = 'milakina.ad@yandex.ru'
    const password: string = '123456789'
    cy.visit('/')
    cy.get('[data-test="profile_btn"]').click("center")
    cy.get('[data-test="email_login_input"]').type(`${email}{enter}`)
    cy.get('[data-test="password_login_input"]').type(`${password}{enter}`)
    cy.get('[data-test="constructor_btn"]').click("center")

    const dataTransfer = new DataTransfer()
    cy.get('[data-test="constructor_section"]').as('constructor')
    cy.get('[data-test="643d69a5c3f7b9001cfa093c"]').as('bun_ingredient')
    cy.get('[data-test="643d69a5c3f7b9001cfa0942"]').as('sauce_ingredient')

    cy.get('@bun_ingredient').trigger('dragstart', {dataTransfer})
    cy.get('@constructor').trigger('drop',{dataTransfer})

    cy.get('@sauce_ingredient').trigger('dragstart', {dataTransfer})
    cy.get('@constructor').trigger('drop',{dataTransfer})
    cy.get('[data-test="get-order-request"]').click('center')
    cy.get('[data-test="modal_order_info"]').should('exist');
    cy.wait(20000).get('[data-test="true-order-success"]').should('exist')
    cy.get('[data-test="close_modal_details_icon"]').click('center')
  })

})

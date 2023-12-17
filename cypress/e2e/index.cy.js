/// <reference types="cypress" />

describe('index page', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Index.html');
  });

  it('check title', () => {
    cy.title().should('include', 'Third Hand');
  });

  it('renders correctly', () => {
    cy.contains('Товары');
  });

  it('displays five menu items', () => {
    const expectedMenuItems = [
      'Мужчинам',
      'Женщинам',
      'Детям',
      'Трейд-ин',
      'О нас',
    ];

    cy.get('.navigate .menu li')
      .should('have.length', 5)
      .each(($el, index, $list) => {
        expect($el.text()).to.equal(expectedMenuItems[index]);
      });
  });

  it('displays nine card items by default', () => {
    const cardItems = cy.get('.section .card');
    cardItems.should('have.length', 9);
    cardItems.get('.title').first().should('have.text', 'Пальто демисезонное');
    cardItems.get('.title').last().should('have.text', 'Сарафан женский');
  });

  it('displays show more button by default', () => {
    cy.get('.main .BTN_block .button')
      .should('have.text', 'Показать еще')
      .and('have.class', 'disabled')
      .and('be.disabled')
      .and('be.visible');
  });
});

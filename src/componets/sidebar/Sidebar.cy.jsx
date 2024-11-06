import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  beforeEach(() => {
    cy.mountWithProviders(<Sidebar />);
  });

  it('renders menu items correctly', () => {
    cy.getByDataCy('menu-item').should('have.length', 3);
  });

  it('updates search query when typing', () => {
    const searchQuery = 'Test search';
    cy.getByDataCy('search-input').type(searchQuery);
    cy.getByDataCy('search-input').should('have.value', searchQuery);
  });
});

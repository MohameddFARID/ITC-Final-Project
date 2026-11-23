# Outstock – React multi-page store

Design copied from the "Outstock" ThemeForest template.

## Run
    npm install
    npm run dev

## Structure
- src/components: Navbar, Footer, ProductCard, Button, PageHeader, SectionTitle
- src/pages: Home, Shop, ProductDetails (useParams), About, Contact, Cart, NotFound
- src/context/CartContext.jsx: cart state (useState) saved to localStorage (useEffect)
- src/data.js: products, slides, testimonials, team, blog posts (put photo paths in `image`)

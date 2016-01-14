# E-Market Platform for your personal e-commerce store

Basic Functionalities:
    Preface:
      You are company looking for expansion to the online marker field. Don't worry we are the answer to your everlasting questions:
        How?
        When?
        Who?
      Use our platform, which provides the fuctionality to manage all the categries, products and your personal company info. 
      In this way your valuable customers will have the opportunity to reach you in the fastest possible way. 
      The idea is: EXPAND YOUR BUSSINESS WITHOUT FEAR.
    
    Views:
      Admin Panel:
        * About You
            - personalized view for your about you page
            - manage about you information
        * Categories
            - personalized grid with all the categories
            - page for adding new category
            - page for management each of the categories
        * Products
            - personalized grid with all the products
            - page for adding new product
            - page for management each of the products
      Client Panel:
        *Login and Register
            - Login Page with validation
            - Register Page with validations
        * About the company
            - page displaying the company information
        * Home Page
            - page displaying the latest 10 products
        * Categories
            - page displaying all the created categories
        * Products
            - page displaying all the products
            - page displaying all products in a category
            - page displaying ditails of a product
            (The user is able to filter all the products by name from all pages displaying the products)
            (The user is able to sort all the product for a category by date and by price)
        * Logged in functionality
            - All logged users will be able to change their passowrds
        *Chat
            - All visiters are able to post messages and comunicate with each other
    
    Controllers:
        *AboutController
            - getAbout
            - getAboutAuthenticated (for the admin)
            - getEdit (for the admin)
            - edit (for the admin)
            - uploadImage (for the admin)
        *CategoriesController
            - get
            - getAuthenticated (for the admin)
            - getAddCategory (for the admin)
            - create (for the admin)
            - remove (for the admin)
            - getUpdateForm (for the admin)
            - update (for the admin)
        *ChateController
            - get
        *HomeController
            - getHomePage (for the 10 latest products)
        *ProductsController
            - get
            - getAuthenticated (for the admin)
            - add (for the admin)
            - getAddForm (for the admin)
            - remove (for the admin)
            - getById
            - update (for the admin)
            - getUpdateForm (for the admin)
            - getProductsByCategoryId
        *UsersController
            - getRegister
            - postRegister
            - getLogin
            - getProfile
            - updateProfile
    
    Services
        *about
            - getByName
            - update
            - uploadImage
            - getCompanyImageUrl
        *categories
            - getAll
            - create
            - removeById
            - getProductsByCategoryId
            - update
            - getById
        *products
            - getAll
            - create
            - removeById
            - getById
            - update
            - getLatestTen
        
    

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
            
    Routers
        *about-router
            - get('/')
            - in all other cases not-found
        *account
            - get('/register', usersController.getRegister)
            - post('/register', usersController.postRegister)
            - get('/login', usersController.getLogin)
            - post('/login', auth.login)
            - get('/logout', auth.logout)
            - get('/profile', usersController.getProfile)
            - post('/profile', usersController.updateProfile)
            - get('/')
            - in all other cases not-found
        *admin
            - get('/')
            - get('/categories', controllers.categories.getAuthenticated)
            - get('/categories/add', controllers.categories.getAddCategory)
            - post('/categories/add', controllers.categories.create)
            - delete('/categories/remove', controllers.categories.remove)
            - get('/categories/manage', controllers.categories.getManage)
            - get('/categories/edit/:id', controllers.categories.getUpdateForm)
            - post('/categories/edit/:id', controllers.categories.update)
            - get('/about', controllers.about.getAboutAuthenticated)
            - get('/about/edit', controllers.about.getEdit)
            - post('/about', controllers.about.edit)
            - post('/about/uploadImage', controllers.about.uploadImage)
            - get('/products', controllers.products.getAuthenticated)
            - get('/products/remove/:id', controllers.products.remove)
            - post('/products/add', upload.single('productImage'), controllers.products.add)
            - get('/products/add', controllers.products.getAddForm)
            - get('/products/edit/:id', controllers.products.getUpdateForm)
            - post('/products/edit/:id', upload.single('productImage'), controllers.products.update)
            - in the cases when there is no logged user - redirects to login-page
            - in case when user is logged, but he/she is not admin - unauthorized
        *categories-router
            - get('/', controllers.categories.get)
            - in all other cases not-found
        *chat-router
            - get('/', controllers.chat.get)
            - in all other cases not-found
        *home-router
            - get('/',controllers.home.getHomePage)
            - in all other cases not-found
        *products-router
            - get('/', controllers.products.get)
            - get('/bycategory/:id', controllers.products.getProductsByCategoryId)
            - get('/:id', controllers.products.getById)
            - in all other cases not-found
    
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
    
    Models
        *about
            - create
            - findOne
            - update
        *categories
            - create
            - all
            - getById
            - update
            - getProductsByCategoryId
        *products
            - create
            - all
            - getById
            - remove
            - update
            - getLatestTen
        *users
            - create
            - update
    Mongo Collections
        *Category
        *Product
        *Common
        *Users
    

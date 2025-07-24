# ShopStack

A fully functional Single Page Application (SPA) for product management built with React and JSON Server. ShopStack allows users to perform complete CRUD operations on products with advanced search and filtering capabilities.

## 🌐 Live Demo

- **Frontend**: [https://your-frontend-url.vercel.app]
- **Backend** : [https://shop-stack.onrender.com]


## 🚀 Features

- **Complete CRUD Operations**: Create, read, update, and delete products
- **Advanced Search & Filter**: Search products by name and filter by category
- **Responsive Design**: Mobile-friendly interface that works across all devices
- **Real-time Updates**: UI updates immediately after successful operations
- **Loading & Error Handling**: User-friendly feedback for all operations

##  Tech Stack

- **Frontend**: React 18 with Vite
- **Backend**: JSON Server (simulated REST API)
- **Routing**: React Router v6
- **Styling**: CSS3 with modular stylesheets (Navbar.css, AboutModule.css, App.css, index.css)
- **State Management**: React Hooks (useState, useEffect)

##  Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

## ⚡ Quick Setup

### Option 1: Use Live Demo
Simply visit the [live application](https://your-frontend-url.vercel.app) to start using ShopStack immediately!

### Option 2: Local Development

#### 1. Clone the Repository
```bash
git clone git@github.com:LydiaNeema/LMTR.git
cd shopstack
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Environment Setup
Create a `.env` file in the root directory:
```env
Render_API_URL=https://shop-stack.onrender.com
# For local development, use: http://localhost:3000
```

#### 4. Start JSON Server (Backend) - Local Only
```bash
# In one terminal (only if running locally)
npm run server
```
This starts the JSON Server on `http://localhost:3000`

#### 5. Start React App (Frontend)
```bash
# In another terminal
npm run dev
```
This starts the React app on `http://localhost:5173`

## 📁 Project Structure

```
shopstack/
├── src/
│   ├── components/
│   │   ├── AddProductForm.jsx   # Form for adding new products
│   │   ├── CategoryFilter.jsx   # Filter products by category
│   │   ├── CategoryList.jsx     # Display category options
│   │   ├── EditForm.jsx         # Form for editing products
│   │   ├── ImageSlide.jsx       # Image carousel component
│   │   ├── Navbar.jsx           # Navigation component
│   │   ├── Navbar.css           # Navigation styles
│   │   ├── ProductCard.jsx      # Individual product display
│   │   └── ProductList.jsx      # Display all products
│   ├── pages/
│   │   ├── Home.jsx            # Main products page
│   │   ├── Category.jsx        # Category-specific products
│   │   ├── About.jsx           # About page
│   │   ├── Contacts.jsx        # Contact information page
│   │   └── AboutModule.css     # About page styles
│   ├── routes/
│   │   └── routes.jsx          # Route configuration
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global app styles
│   ├── index.css               # Root styles
│   └── main.jsx               # App entry point
├── db.json                    # JSON Server database
└── package.json              # Project dependencies
```

## 🗺️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Display all products with search/filter/sort |
| `/category` | Category | Browse products by specific categories |
| `/about` | About | About page information |
| `/contacts` | Contacts | Contact information and details |

## 🔧 API Endpoints

The backend API provides the following RESTful endpoints:

**Base URL**: `https://shop-stack.onrender.com` (Production) | `http://localhost:3000` (Local)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Fetch all products |
| GET | `/products/:id` | Fetch single product |
| POST | `/products` | Create new product |
| PATCH | `/products/:id` | Update existing product |
| DELETE | `/products/:id` | Delete product |

## 📊 Product Data Structure

Each product contains the following fields:

```json
{
  "id": 1,
  "name": "Product Name",
  "price": 199.99,
  "category": "Electronics",
  "image": "https://example.com/image.jpg"
}
```

**Field Requirements:**
- `id`: Auto-generated unique identifier
- `name`: String, required
- `price`: Number, must be positive
- `category`: String, required
- `image`: String (valid URL), required

## 🎯 Core Functionalities

### CRUD Operations
- ✅ **Create**: Add new products using controlled forms
- ✅ **Read**: Display products in responsive card layout
- ✅ **Update**: Edit existing product information
- ✅ **Delete**: Remove products with confirmation

### Search & Filter
- 🔍 **Search**: Find products by name (real-time)
- 🏷️ **Category Filter**: Advanced filtering with CategoryFilter component
- 📋 **Category List**: Browse products by category sections
- 🖼️ **Image Gallery**: Interactive image slideshow for products

### User Experience
-  **Loading States**: Visual feedback during API calls
-  **Error Handling**: User-friendly error messages
-  **Responsive**: Works on mobile, tablet, and desktop


## 🌐 Deployment

### Frontend Deployment
The frontend is deployed on **Render** and automatically builds from the main branch.

### Backend Deployment  
The backend is deployed on **Render** and serves the JSON Server API.

## 🤝 Contributing

This project follows a collaborative GitHub workflow:

1. **Fork** the repository
2. Create a **feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request**

### Branch Naming Convention
- `feature/feature-name` - New features
- `bugfix/bug-description` - Bug fixes
- `hotfix/urgent-fix` - Critical fixes

## Development Workflow

1. **Setup**: Clone repo and install dependencies
2. **Development**: Create feature branches for new work
3. **Testing**: Test functionality before committing
4. **Review**: Submit pull requests for code review
5. **Deploy**: Merge approved changes to main branch

##  Team Responsibilities

- **UI/UX Design**: Component structure and responsive styling
- **JSON Server Management**: API setup and endpoint management
- **React Logic & State**: Component logic, hooks, and state management
- **GitHub Workflow**: Repository management, PR reviews, and collaboration

##  Known Issues

- Images must be valid URLs (no local file support yet)
- Categories are case-sensitive in filtering
- No pagination implemented for large product lists

##  Future Enhancements

- [ ] Add user authentication
- [ ] Implement image upload functionality
- [ ] Add product reviews and ratings
- [ ] Include inventory management
- [ ] Add shopping cart functionality
- [ ] sort items by price
- [ ] Continue to upgrade and provide secure and diverse payment options, including the integration of digital wallets

## 📄 License

This project is licensed under the MIT License 

## 👥 Authors

- **Lydia,Hassan,Reggan,Terry** 


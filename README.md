# CRM Dashboard

A modern, feature-rich Customer Relationship Management (CRM) dashboard built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive solution for managing customers, tracking analytics, scheduling events, and organizing tasks with a beautiful, responsive interface.

## 🚀 Features

- **📊 Dashboard Overview** - Comprehensive analytics and key metrics at a glance
- **👥 Customer Management** - Complete customer database with advanced filtering and search
- **📅 Calendar Integration** - Full-featured calendar with event scheduling and management
- **📋 Kanban Board** - Task management with drag-and-drop functionality
- **📈 Analytics** - Detailed charts and reports for business insights
- **⚙️ Settings** - Customizable application preferences
- **🌙 Dark/Light Theme** - Toggle between dark and light modes
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - Modern React with latest features
- **TypeScript 4.9.5** - Type-safe development
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Framer Motion 12.19.2** - Smooth animations and transitions

### State Management

- **Redux Toolkit 2.8.2** - Predictable state container
- **React Redux 9.2.0** - Official React bindings for Redux
- **TanStack React Query 5.81.4** - Server state management

### UI Components & Libraries

- **Lucide React 0.525.0** - Beautiful icons
- **React Hook Form 7.58.1** - Performant forms with easy validation
- **React Hot Toast 2.5.2** - Elegant toast notifications
- **Recharts 3.0.2** - Composable charting library
- **React Beautiful DnD 13.1.1** - Drag and drop functionality

### Calendar & Scheduling

- **FullCalendar 6.1.17** - Full-featured calendar component
- **@fullcalendar/react** - React wrapper for FullCalendar
- **@fullcalendar/daygrid** - Month view plugin
- **@fullcalendar/timegrid** - Week/day view plugin
- **@fullcalendar/interaction** - Event interaction plugin

### Data Management

- **TanStack React Table 8.21.3** - Headless table building
- **Yup 1.6.1** - Schema validation
- **AJV 8.17.1** - JSON schema validator

### Development & Testing

- **React Testing Library** - Simple and complete testing utilities
- **Jest** - JavaScript testing framework
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kumarsatyam444/crm-dashboard.git
   cd crm-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm build`** - Builds the app for production
- **`npm test`** - Launches the test runner
- **`npm run eject`** - Ejects from Create React App (⚠️ irreversible)

## 🎨 Styling & Theming

The application uses a sophisticated theming system with CSS custom properties:

### Color Scheme

- **Light Theme** - Clean, professional appearance
- **Dark Theme** - Easy on the eyes for extended use
- **Custom Properties** - Easily customizable color variables

### Key Design Features

- Custom scrollbars for better UX
- Smooth animations and transitions
- Focus-visible accessibility support
- Print-friendly styles
- Responsive design patterns

## 📱 Browser Support

### Production

- Modern browsers with >0.2% usage
- Excludes dead browsers and Opera Mini

### Development

- Latest Chrome, Firefox, and Safari versions

## 🔧 Project Structure

```
crm-dashboard/
├── public/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── header.tsx
│   │       ├── sidebar.tsx
│   │       └── theme-provider.tsx
│   ├── pages/
│   │   ├── dashboard.tsx
│   │   ├── customers.tsx
│   │   ├── calendar.tsx
│   │   ├── kanban.tsx
│   │   ├── analytics.tsx
│   │   └── settings.tsx
│   ├── store/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── index.tsx
├── package.json
└── README.md
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options
- **Netlify** - Connect your GitHub repository for automatic deployments
- **Vercel** - Zero-configuration deployment platform
- **GitHub Pages** - Free hosting for static sites
- **AWS S3** - Scalable cloud hosting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Kumar Satyam**
- GitHub: [@kumarsatyam444](https://github.com/kumarsatyam444)
- LinkedIn: (https://www.linkedin.com/in/kumar--satyam/)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- All the open-source contributors whose libraries make this project possible

---

**Built with ❤️ using React and TypeScript**

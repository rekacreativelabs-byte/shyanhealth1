# Shyan Health - Ayurvedic Wellness Website

A modern, responsive website for Shyan Health - an Ayurvedic wellness brand focused on natural weight management and women's health.

## Project Structure

```
potfolio/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # All styling and animations
├── js/
│   └── script.js        # JavaScript functionality
├── assets/              # For images, icons, and other resources
└── README.md            # Project documentation
```

## Features

### 1. **Hero Section**
- Eye-catching 3D gradient background with grid and particle animations
- Clear value proposition with call-to-action buttons
- Key statistics display

### 2. **Products Section**
- Dynamic product grid with 6 Ayurvedic products
- Product cards with images, badges, and pricing
- WhatsApp integration for easy ordering

### 3. **BMI Calculator**
- Interactive BMI calculation tool
- Personalized recommendations based on BMI category
- PDF report download functionality

### 4. **Wellness Report**
- Personalized health assessment form
- Custom report generation based on health goals
- PDF download with diet and lifestyle recommendations

### 5. **Blog Section**
- Blog post grid with 6 featured articles
- Author and read time information
- Interactive blog cards

### 6. **Trust Section**
- Four key benefits displayed with icons
- Natural, science-backed, expert-formulated messaging

### 7. **Footer**
- Comprehensive navigation links
- Social media integration
- Brand information

### 8. **Floating WhatsApp Button**
- Fixed position WhatsApp contact button
- Pulsing animation effect

## Color Scheme

- **Saffron**: `#E8A820` - Primary accent color
- **Deep Green**: `#1A3D2B` - Primary dark color
- **Cream**: `#FDF6E9` - Light background
- **Warm White**: `#FEFAF3` - Main background
- **Sage**: `#6B8F71` - Secondary accent

## Typography

- **Headings**: Playfair Display (Serif)
- **Body Text**: DM Sans (Sans-serif)
- **Monospace**: Space Mono (for special elements)

## Interactive Features

1. **BMI Calculator** - Real-time calculation with category determination
2. **PDF Report Generation** - Download personalized wellness reports
3. **Product Ordering** - Direct WhatsApp integration for purchases
4. **Smooth Animations** - Grid shifts, particle effects, and button transitions
5. **Responsive Design** - Mobile-friendly layout

## Responsive Breakpoints

- **Desktop**: Full layout with all features
- **Tablet (900px)**: Adjusted grid columns and hidden navigation
- **Mobile (540px)**: Single column layout with optimized spacing

## How to Use

1. Open `index.html` in a web browser
2. Navigate through sections using the header navigation
3. Calculate BMI and download reports
4. Click product cards to order via WhatsApp
5. Read blog articles for wellness tips

## JavaScript Functions

- `renderProducts()` - Dynamically render product grid
- `renderBlog()` - Dynamically render blog posts
- `calculateBMI()` - Calculate BMI and show results
- `downloadBMIReport()` - Generate and download BMI PDF
- `generateWellnessReport()` - Create personalized wellness report
- `whatsappProduct()` - Open WhatsApp with product inquiry
- `openBlog()` - Display blog post details

## External Dependencies

- **Google Fonts** - Playfair Display, DM Sans, Space Mono
- **HTML2PDF** - For PDF report generation
- **WhatsApp Web API** - For direct messaging integration

## Customization

### Colors
Edit the CSS variables in `:root` selector in `css/styles.css`

### Products
Edit the `products` array in `js/script.js`

### Blog Posts
Edit the `blogs` array in `js/script.js`

### Contact Information
Replace phone numbers (+918802916080) throughout the project

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- Backend integration for report storage
- User authentication system
- E-commerce integration
- Blog CMS
- Customer testimonials database
- Live chat support
- Email notification system

## Contact

Phone: +91 88029 16080
Email: (Add your email)
Website: www.shyanhealth.com

---

**© 2025 Shyan Health. All rights reserved.**

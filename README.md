# 📱 Facebook Home Page Clone

A pixel-perfect React Native clone of the Facebook mobile app's home page interface. This project recreates the authentic Facebook user experience with scrollable stories, create post functionality, and a dynamic news feed.

## ✨ Features

- **Authentic Facebook UI**: Pixel-perfect recreation of Facebook's mobile interface
- **Scrollable Stories**: Horizontal scrolling stories section that disappears when scrolling down
- **Create Post Section**: Interactive "What's on your mind?" section that scrolls away with content
- **Dynamic News Feed**: Scrollable posts with user avatars, images, and interaction buttons
- **Fixed Navigation**: Persistent header and navigation tabs
- **Real User Data**: Sample posts with actual profile pictures and content
- **Responsive Design**: Optimized for mobile devices

## 🚀 Demo

![Facebook Clone Demo](file:///F:/Downloads/facebook%20Home%20Page.jpg)


## 🛠️ Technologies Used

- **React Native**: Mobile app development framework
- **TypeScript**: Type-safe JavaScript
- **React Native Vector Icons**: For UI icons
- **StyleSheet**: React Native styling

## 📱 Components

- **FacebookHome**: Main component containing the entire home page
- **PostItem**: Individual post component with user info, content, and interactions
- **CreatePostSection**: "What's on your mind?" input section
- **StoriesSection**: Horizontal scrolling stories

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- React Native development environment
- Android Studio (for Android) or Xcode (for iOS)
- Physical device or emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/facebook.git
   cd facebook
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the application**
   
   For Android:
   ```bash
   npx react-native run-android
   ```
   
   For iOS:
   ```bash
   npx react-native run-ios
   ```

## 📁 Project Structure

```
├── README.md
└── facebook
    ├── .gitignore
    ├── App.js
    ├── app.json
    ├── assets
        ├── adaptive-icon.png
        ├── favicon.png
        ├── icon.png
        └── splash-icon.png
    ├── index.js
    ├── package-lock.json
    └── package.json
```

## 🎨 UI/UX Features

- **Authentic Color Scheme**: Facebook's signature blue (#1877f2) and clean whites
- **Smooth Scrolling**: Natural scroll behavior matching the original app
- **Interactive Elements**: Touchable posts, buttons, and navigation
- **Profile Integration**: Real profile pictures and user data
- **Responsive Layout**: Adapts to different screen sizes

## 📊 Sample Data

The app includes sample posts with:
- User profiles with real avatars
- Text and image posts
- Like, comment, and share counts
- Timestamps and user interactions

## 🔮 Future Enhancements

- [ ] Pull-to-refresh functionality
- [ ] Infinite scroll for posts
- [ ] Post creation modal
- [ ] Story viewing interface
- [ ] Dark mode support
- [ ] Push notifications
- [ ] Real-time updates
- [ ] Backend integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **Star this repo if you found it helpful!** ⭐

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

![Facebook Clone Demo](https://scontent.fdac14-1.fna.fbcdn.net/v/t1.15752-9/525926474_24654561254162099_883079590717313639_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG7VOZAzwMnHgGhrCVj64mqBL3hYWepBskEveFhZ6kGySGZ4lKT8zFguzPXJI0FOuybMff67VggdM8DfPEKDiyX&_nc_ohc=kPuZ7EN3pFcQ7kNvwGmJI6d&_nc_oc=AdlbmAscrxUgLAQGDIEFM0wmTkP-KO8238XRELq4JdAsDLZ08YRVflfNplxDVKemg9g&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&oh=03_Q7cD3AEiYNwQF2H10C6hYpAm2kIgrgiV-CpHRaoLQrTvHCWx7Q&oe=68B733B9)


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
   git clone https://github.com/yourusername/facebook-home-clone.git
   cd facebook-home-clone
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
facebook/
├── src/
│   ├── components/
│   │   └── FacebookHome.tsx
│   ├── types/
│   │   └── Post.ts
│   └── assets/
├── android/
├── ios/
├── package.json
└── README.md
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

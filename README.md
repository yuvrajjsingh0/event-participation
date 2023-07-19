# College Event Participation Application (Ionic + Firebase)

Welcome to our College Event Participation Application! This app is built using the Ionic framework and Firebase for real-time data storage. It allows students to explore and participate in various college events, making event management and participation seamless and efficient.

## Features

- **Event Listing:** View a list of all upcoming college events along with their details and descriptions.

- **Event Details:** Get more information about each event, such as date, time, location, and any specific requirements.

- **Participation Registration:** Register and indicate your interest in participating in specific events.

- **Real-time Updates:** All event information is updated in real-time, ensuring you receive the latest event details. (Developing)

- **Certification:** Automatically generates certificate upon completion of the event.

- **User Authentication:** Students can sign up and login securely to access the app's features.

## Getting Started

To run the application locally or on a device, follow these steps:

1. Clone the repository:
~~~
git clone https://github.com/your-username/college-event-app.git
cd college-event-app
~~~
2. Install dependencies:
~~~
npm install
~~~
3. Configure Firebase:

- Create a new project on [Firebase](https://firebase.google.com/) if you haven't already.
- Add an iOS and Android app in the Firebase Console and download the configuration files (google-services.json for Android and GoogleService-Info.plist for iOS).
- Place these configuration files in the respective platform folders (e.g., `platforms/android/app` for Android and `platforms/ios/AppName` for iOS).

4. Run the app:

- For a web version during development, use:

  ```
  ionic serve
  ```

- For testing on Android or iOS devices, use:

  ```
  ionic capacitor run android
  ```

  or

  ```
  ionic capacitor run ios
  ```

## Firebase Configuration

Ensure that your Firebase project is set up correctly with the following configuration:

- Authentication: Enable Email/Password sign-in method.

- Firestore Database: Create a collection named "events" to store event details, and another collection named "users" to manage user data and event participation.

- Security Rules: Set appropriate security rules to protect your data and prevent unauthorized access.

## Contributing

We welcome contributions to improve and enhance our college event application! If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch:
~~~
git checkout -b feature/your-feature-name
~~~
3. Make your changes and test thoroughly.
4. Commit your changes:
5. Push to the branch:
~~~
git push origin feature/your-feature-name
~~~

6. Create a Pull Request to merge your changes into the main repository.

## Issues and Support

If you encounter any issues or have questions about the app, feel free to open an issue on our GitHub repository. We'll be happy to assist you!

## License

This College Event Participation Application is open-source and available under the [MIT License](LICENSE.md).

## Acknowledgments

Thank you for using our College Event Participation Application! We hope you have a fantastic experience exploring and participating in college events through this app.

Happy Eventing! 🎉



## DEMO VIDEO: https://youtu.be/GH9nhIRdFFY
## Android Screenshots
![alt text](https://raw.githubusercontent.com/yuvrajjsingh0/event-participation/master/android1.png)
![alt text](https://raw.githubusercontent.com/yuvrajjsingh0/event-participation/master/android2.png)
![alt text](https://raw.githubusercontent.com/yuvrajjsingh0/event-participation/master/android3.png)
![alt text](https://raw.githubusercontent.com/yuvrajjsingh0/event-participation/master/android4.png)

## iOS Screenshots
![alt text](https://raw.githubusercontent.com/yuvrajjsingh0/event-participation/master/ios1.png)
![alt text](https://raw.githubusercontent.com/yuvrajjsingh0/event-participation/master/ios2.png)
![alt text](https://raw.githubusercontent.com/yuvrajjsingh0/event-participation/master/ios3.png)
![alt text](https://raw.githubusercontent.com/yuvrajjsingh0/event-participation/master/ios4.png)

# [Finance App - APK Download](https://drive.google.com/file/d/1Uroz-UbrOqK5rwImhObCLdFRy7XGga9-/view?usp=sharing)

# Video Demo - Working + Code Explaination in detail


https://github.com/user-attachments/assets/fe3c965f-b561-4ffd-bcdb-4514832c93c7



A comprehensive finance management application built using React Native and Expo, designed to help users manage their finances efficiently. This app features real-time statistics, card management, QR code scanning, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Building the APK](#building-the-apk)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Features

- **Home Screen**: Overview of financial accounts and recent transactions.
- **Statistics Screen**: Visual representation of financial data over time.
- **QR Code Scanner**: Quickly scan and process QR codes for payments or information retrieval.
- **Card Management**: Add, view, and manage your financial cards.
- **Secure and Efficient**: Uses industry-standard encryption and secure storage practices.

## Details

### 1. Onboarding Screen
- **Overview**:
  - Introduces the app and its functionalities to the user.
  - Designed to scale dynamically based on the screen size, providing a smooth experience across devices.
- **Technical Details**:
  - Components are placed using absolute positioning and transformed using axes to create a visually appealing introduction.
  - The animations and scaling are handled by React Native's animation library to ensure a responsive layout.

![Screenshot 2024-08-01 135740](https://github.com/user-attachments/assets/94463b29-85ba-47e7-99f0-3cb6f3e45494)
![Screenshot 2024-08-01 135752](https://github.com/user-attachments/assets/1911ba5a-d70d-4ae4-b5b2-399f72344b16)

### 2. Home Screen
- **Overview**:
  - Displays financial accounts and recent transactions.
  - Allows users to initiate transfers and manage their transactions.
- **Functionalities**:
  - **Account Cards**: Shows a summary of all accounts, with details like currency, balance, account number, and validity.
  - **Transaction List**: Scrollable list of transactions that persists data using AsyncStorage.
  - **Transfer**: Users can initiate a transfer by entering details in a bottom sheet, which then updates the transaction list.
  - **Data Persistence**: Uses AsyncStorage to save transaction data locally, ensuring that data persists even after the app is closed.

![Screenshot 2024-08-01 135806](https://github.com/user-attachments/assets/8b44dd82-e7f2-40e4-834a-575b4374c2f2)
![Screenshot 2024-08-01 135759](https://github.com/user-attachments/assets/d85ea97c-7460-4504-a4be-91d0cda320f8)

### 3. Statistics Screen
- **Overview**:
  - Provides a graphical representation of the user's financial data.
  - Allows users to switch between different months to view statistics.
- **Functionalities**:
  - **Monthly Selector**: Users can switch between different months to view transaction data.
  - **Graph**: Displays a line chart of daily earnings for the selected month using React Native Charts.
  - **Responsive Design**: The chart and layout are designed to be responsive, adjusting to different screen sizes.

### 4. QR Code Scanner Screen
- **Overview**:
  - Allows users to scan QR codes and view the data contained within them.
- **Functionalities**:
  - **QR Code Scanning**: Uses Expo’s BarCodeScanner to scan QR codes and display the scanned data.
  - **Scan Again**: Users can easily scan another QR code by pressing a button, which resets the scanner.

![Screenshot 2024-08-01 135821](https://github.com/user-attachments/assets/1f56d4d5-2138-4512-b92f-9473162323c2)

### 5. Add New Card Screen
- **Overview**:
  - Allows users to add new financial cards to their account list.
- **Functionalities**:
  - **Card Details Input**: Users can input details such as currency, balance, account number, validity, and background color.
  - **Data Persistence**: The new card is saved to AsyncStorage and displayed both on the Add New Card screen and the Home Screen.
  - **Bottom Sheet**: The add card functionality is implemented using a bottom sheet for a smooth user experience.

![Screenshot 2024-08-01 135833](https://github.com/user-attachments/assets/707cfede-7d1b-47c5-bb26-bf95609ac7ff)
![Screenshot 2024-08-01 135849](https://github.com/user-attachments/assets/5dc4300c-1e8a-45f4-b833-b40b1785efc1)
![Screenshot 2024-08-01 135838](https://github.com/user-attachments/assets/4d2554a9-cd95-4f34-85a3-c65d83c6532d)


### 6. Navigation
- **Fixed Bottom Navigation**:
  - A consistent bottom navigation bar is provided across all screens for easy access to different parts of the app.
  - **Icons**:
    - **Home Icon**: Takes the user back to the Home Screen.
    - **Statistics Icon**: Directs the user to the Statistics screen.
    - **Card Icon**: Opens the Add New Card screen.
    - **QR Icon**: Opens the QR Scanner screen.

## Technical Details

- **Local Storage**: AsyncStorage is used extensively to ensure that all user data is preserved across sessions.
- **Animations and Responsiveness**: React Native’s animation libraries and responsive design techniques ensure a smooth and adaptable user experience.
- **Barcode Scanning**: Expo’s BarCodeScanner is used for QR code functionality, making it easy to integrate and use.

## Additional Information

- **React Native Version**: The app uses the latest stable version of React Native at the time of development.
- **Expo**: The project is built with Expo, making it easy to manage and deploy.
- **React Navigation**: Used for managing navigation between screens.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/finance-app.git
    cd finance-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Setup environment variables:**

    - Create an `.env` file in the root directory.
    - Add necessary environment variables.

4. **Install Expo CLI (if not already installed):**

    ```bash
    npm install -g expo-cli
    ```

## Running the App

1. **Start the Expo development server:**

    ```bash
    expo start
    ```

2. **Open the app in Expo Go:**

    - Scan the QR code with your Expo Go app to run the app on your physical device.
    - Or, use an emulator/simulator to test the app.

## Building the APK

To build the APK for Android:

1. **Install EAS CLI:**

    ```bash
    npm install -g eas-cli
    ```

2. **Build the APK:**

    ```bash
    eas build -p android --profile preview
    ```

3. **Download and install the APK on your device.**

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For an optimized React Native development experience.
- **TailwindCSS**: For styling the components.
- **Lucide Icons**: For vector icons used in the app.
- **Expo Router**: For navigation between screens.
- **React Native Barcode Scanner**: For QR code scanning functionality.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

---

Certainly! Here’s a structured GitHub README based on your description of the app:

---

Make sure to replace placeholder text such as `https://your-username/finance-app.git`, `your-image-url.com`, and other URLs with actual content relevant to your project. The README file should be placed in the root of your GitHub repository.

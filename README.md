# eGradeBookPlus
A mobile application for recording students grade in public schools in the Philippines

# Installing dependencies
You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

Node, JDK
We recommend installing Node via Chocolatey, a popular package manager for Windows.

It is recommended to use an LTS version of Node. If you want to be able to switch between different versions, you might want to install Node via nvm-windows, a Node version manager for Windows.

React Native also requires Java SE Development Kit (JDK), which can be installed using Chocolatey as well.

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:
`choco install -y nodejs-lts openjdk11`

#Android development environment
Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.
1. Install Android Studio
Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

Android SDK
Android SDK Platform
Android Virtual Device
If you are not already using Hyper-V: Performance (Intel ® HAXM) (See here for AMD or Hyper-V)
Then, click "Next" to install all of these components.

2. Install the Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 12 (S) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".


Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 12 (S) entry, then make sure the following items are checked:

Android SDK Platform 31
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 31.0.0 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

3. Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again
Click on Change my environment variables
Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:

# App installation
`git clone git@github.com:johnmarkcabusog/eGradeBookPlus.git`
`npm install`

# Android  Phone Setup
1. Go to Software information and click it 5 more times, this should activate the developer settings
2. Uncheck Verify apps
3. Turn on Developer Mode
4. Connect your phone to USB port 
5. Run `npx react-native run-android`

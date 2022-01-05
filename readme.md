# Detox Test App

This is a simple detox demo for testing ios and android apps. Tests are working in both platforms + github actions.

## Demo
![demo](https://github.com/pedro-rivas/detox-test-app/blob/master/src/img/demo.gif)
## How to run the project
1. Download or clone the repo `https://github.com/pedro-rivas/detox-test-app.git`.
2. Setup your environment as described [here](https://wix.github.io/Detox/docs/introduction/getting-started), if you want to run android tests, make sure you have [java installed](https://wix.github.io/Detox/docs/introduction/android-dev-env).
3. Run the project as you narmally do `yarn android` or `yarn ios`.
## How to run the tests
First you need to build the app and then run the tests:

iOS
```
yarn build:ios-debug
yarn e2e:ios-debug
```
Android
```
yarn build:android-debug
yarn e2e:android-debug
```
## Github Actions
Both actions (android and ios) are working, to see them click [here](https://github.com/pedro-rivas/detox-test-app/actions).
The android test is failing, but the important here is that the tests/actions works fine.
## More?

If you want to learn more visit the [detox](https://wix.github.io/Detox/) website. Also this [post](https://morioh.com/p/a51ceaf75b3d) in morioh
has a more complex test implementation, so check it out.

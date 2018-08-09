#   NativeScript connection status app

This is a sample app made to display device's online status. Changes in device's connectivity status are pushed to observers from the Internet Connection service. 

## How to use

### Clone the repo

``` sh
$ git clone https://github.com/arakutska/nativescript-connection-status.git

$ cd nativescript-connection-status
$ npm install

$ tns run android
or
$ tns run ios
```

### Usage
Inject `InternectConnectionService` in you component's constructor. 
You can than subscribe to changes via the `connectionStatus$` Observable (like inside `home.component.ts`) or use it directly in your template file with async pipe like in `app.component.html`. 

### App Images

|iOS|Android|
|:---:|:---:|
|<img alt="iOS screenshot" src="https://media.giphy.com/media/26rliKTl2fImRR99W4/giphy.gif" height="375px" width="auto">|<img alt="Android screenshot" src="https://media.giphy.com/media/tITuxFLZhPXVF7hG87/giphy.gif" height="375px" width="auto">|
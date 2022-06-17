# Unreal WebView Bridge

## Table of Contents
+ [About](#about)
+ [Getting Started](#getting_started)
+ [Usage](#usage)

## About <a name="about"></a>
This is a Javascript API for communication between WebView and Unreal Engine.

## Getting Started <a name="getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

```
npm
```

### Installing


Clone the `ue-webview-bridge` repository and move into the directory

```
git clone git@github.com:KL-Engineering/ue-webview-bridge.git && cd ue-webview-bridge
```

Install the dependencies using `npm`

```
npm install
```

Build the library

```
npm run build
```

## Usage <a name = "usage"></a>

This library can be installed from the KidsLoop `npm` repository.

```
npm install @kl-engineering/ue-webview-bridge
```

Then import the API.

```
import { Utility } from "@kl-engineering/ue-webview-bridge";
```

Example of using the API.

```
console.log(Utility.IsUnrealWebViewBridgeInstalled() ? `Unreal WebView Bridge Installed` : `Not Installed`);
```
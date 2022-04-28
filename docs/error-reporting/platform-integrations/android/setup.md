---
id: setup
title: Setting Up Backtrace for Android
sidebar_label: Setup
description: Add Backtrace to your Android project.
---
Add Backtrace to your Android project to automatically detect and report handled and unhandled Java exceptions that occur in your apps written in Java or Kotlin.

After you've completed the steps on this page, the Backtrace client will be installed and setup with the default configuration settings.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Features
* Light-weight Java client library that quickly submits exceptions and crashes to your Backtrace dashboard. Can include callstack, system metadata, custom metadata, and file attachments if needed.
* Supports a wide range of Android SDKs.
* Supports offline database for error report storage and re-submission in case of network outage.
* Fully customizable and extendable event handlers and base classes for custom implementations.
* Supports detection of Application Not Responding errors (ANRs).
* Supports monitoring the blocking of manually created threads by providing watchdog.
* Supports native (JNI/NDK) exceptions and crashes.
* Supports Proguard obfuscated crashes.
* Supports breadcrumbs.

## Supported SDKs
* Minimum SDK version 16 (Android 4.1.x or higher)
* Target SDK version 30 (Android 11.0)
* Minimum NDK version 16b
* Maximum NDK version 22

:::note
The ability to capture the battery status when a device is in power saving mode is available from API version 21.
:::

## Supported Platforms
* arm32/arm64
* x86_64

## What You'll Need
* A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
* Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
* A Backtrace project and a submission token.

:::tip Generate a Submission Token
   1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
   1. Select **+**.
:::


## Install the SDK
Use Gradle or Maven to install the reporting library.

<Tabs>
<TabItem value="gradle" label="Gradle">

```
dependencies {
    implementation 'com.github.backtrace-labs.backtrace-android:backtrace-library:3.6.0'
  }
```

</TabItem>
<TabItem value="maven" label="Maven">

```
<dependency>
  <groupId>com.github.backtrace-labs.backtrace-android</groupId>
  <artifactId>backtrace-library</artifactId>
  <version>3.6.0</version>
  <type>aar</type>
</dependency>
```

</TabItem>
</Tabs>


## Configure Permissions
In your app's `AndroidManifest.xml` file, add the following permissions:
*  To send errors to the server instance:
  ```xml
  <uses-permission android:name="android.permission.INTERNET" />
  ```
* To send file attachments from external storage to the server instance:
  ```xml
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  ```

## Initialize the Backtrace Client
To initialize the Backtrace Client, create a `BacktraceCredentials` instance with your Backtrace endpoint URL (e.g. https://xxx.sp.backtrace.io:6098) and submission token, and supply it as a parameter in the `BacktraceClient` constructor:
<Tabs>
<TabItem value="java" label="Java">

```java
// replace with your endpoint URL and submission token
BacktraceCredentials credentials = new BacktraceCredentials("https://<yourInstance>.sp.backtrace.io:6098/", "<submissionToken>");
BacktraceClient backtraceClient = new BacktraceClient(getApplicationContext(), credentials);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// replace with your endpoint URL and submission token
val backtraceCredentials = BacktraceCredentials("https://<yourInstance>.sp.backtrace.io:6098/", "<submissionToken>")
val backtraceClient = BacktraceClient(applicationContext, backtraceCredentials)
```

</TabItem>
</Tabs>

Another option for creating a `BacktraceCredentials` object is to use the endpoint URL to which the report is to be sent, and pass the URL string as parameter to `BacktraceCredentials` constructor:
<Tabs>
<TabItem value="java" label="Java">

```java
// provide your Backtrace instance and submission token
BacktraceCredentials credentials = new BacktraceCredentials("https://submit.backtrace.io/{your-instance}/{submission-token}/json");
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// provide the name of your instance and submission token for BacktraceCredentials
val backtraceCredentials = BacktraceCredentials("https://submit.backtrace.io/{your-instance}/{submission-token}/json")
```

</TabItem>
</Tabs>


## Verify the Setup
At this point, you've installed and setup the Backtrace client to automatically capture errors and crashes in your Android app.

To test the integration, send a crash report to your Backtrace instance.
<Tabs>
<TabItem value="java" label="Java">

```java
try {
// throw exception here
} catch (Exception exception) {
backtraceClient.send(new BacktraceReport(e));
}
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
try {
// throw exception here
}
catch (e: Exception) {
backtraceClient.send(BacktraceReport(e))
}
```
</TabItem>
</Tabs>
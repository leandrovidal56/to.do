import React from 'react';
import { StatusBar, Button,View, Alert } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
import * as Sentry from "@sentry/react-native";

import { Home } from './src/pages/Home';
// import { SENTRY } from 'dotenv';
import * as TesteSentry from 'react-native-dotenv';

const { SENTRY } = process.env;



export default function App() {
  // React.useEffect(() => {
    //   crashlytics().log('App mounted.');
    // }, [])
    
    Sentry.init({
      // dsn: "https://6a33e0ecfae64b7487305a0989fc3ad0@o295577.ingest.sentry.io/6201052",
      // dsn: process.env.SENTRY,
      tracesSampleRate: 1.0,
    });
    // console.log(SENTRY, 'testee')
    // console.log(process.env.SENTRY, 'testee')
    // console.log(TesteSentry, 'testee')
    // console.log(${SENTRY}, 'testee')
    console.log(SENTRY, 'testee')
    // Sentry.nativeCrash();
    
    return (
      <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
        />

      {/* <Button
        title="Crash"
        onPress={() => crashlytics().crash()}
      />
       <Button
        title="Press me"
        // Logs in the firebase analytics console as "select_content" event
        // only accepts the two object properties which accept strings.
        onPress={async () =>
          await analytics().logSelectContent({
            content_type: 'clothing',
            item_id: 'abcd',
          })
        }
      /> */}
      <Home />
    </>
  );
}
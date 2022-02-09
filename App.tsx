import React from 'react';
import { StatusBar, Button,View, Alert } from 'react-native';
// import crashlytics from '@react-native-firebase/crashlytics';
// import analytics from '@react-native-firebase/analytics';

import { Home } from './src/pages/Home';

export default function App() {
  // React.useEffect(() => {
  //   crashlytics().log('App mounted.');
  // }, [])

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

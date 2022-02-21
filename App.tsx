import React from 'react';
import { StatusBar } from 'react-native';
import * as Sentry from "@sentry/react-native";

import { Home } from './src/pages/Home';




export default function App() {
    Sentry.init({
      dsn: process.env.SENTRY,
      tracesSampleRate: 1.0,
    });
    
    return (
      <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
        />
      <Home />
    </>
  );
}
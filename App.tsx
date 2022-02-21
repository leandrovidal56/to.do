import React from 'react';
import { StatusBar } from 'react-native';
import * as Sentry from "@sentry/react-native";

import * as TesteSentry from 'react-native-dotenv';

const { SENTRY } = process.env;

import { Home } from './src/pages/Home';


export default function App() {
  Sentry.init({
    dsn: process.env.SENTRY,
    tracesSampleRate: 1.0,
  });
  console.log('PEGAR LOG', process.env.SENTRY)
  
    
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









    
    
    
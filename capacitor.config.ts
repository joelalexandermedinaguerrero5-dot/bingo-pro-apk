import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.reinos018.bingopro',
  appName: 'Bingo PRO',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      backgroundColor: '#0f0f1a',
      androidScaleType: 'CENTER_CROP'
    }
  }
};

export default config;

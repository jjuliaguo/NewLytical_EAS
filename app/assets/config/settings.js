import { Constants } from "expo-constants";

const setting = {
  dev: {
    //
    //apiUrl: 'http://192.168.1.193:9000/api',
    apiUrl: "https://newslytical.onrender.com/api",
  },
  staging: {
    apiUrl: "https://newslytical.onrender.com/api",
  },

  prod: {
    apiUrl: "https://newslytical.onrender.com/api",
  },
};

const getCurrentSetting = () => {
  if (__DEV__) return setting.dev;
  if (Constants.manifest.releaseChannel === "staging") return setting.staging;
  return setting.prod;
};

export default getCurrentSetting();

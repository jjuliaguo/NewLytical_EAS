import { useEffect } from "react";
//rimport { Notifications } from "expo";
//import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();
    if (notificationListener)
      Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotification = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
      console.log(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};

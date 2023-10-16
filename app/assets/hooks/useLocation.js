import { useEffect, useState } from "react";
import * as Location from "expo-location";

const use_Location = () => {

  const [location, setLocation] = useState(null);
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status == "granted") {
        const { granted } = await Location.requestBackgroundPermissionsAsync();

        if (!granted) return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
    useEffect(() => {
      getLocation();
    }, []);
    return location;
  };
};

export default use_Location;

/*


import { useEffect, useState } from "react";
import * as Location from "expo-location";

const use_Location = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const { status,granted } = await Location.requestForegroundPermissionsAsync();
      console.log("==========="+status)
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
    useEffect(() => {
      getLocation();
    }, []);
    return location;
  };
};

export default use_Location;








*/

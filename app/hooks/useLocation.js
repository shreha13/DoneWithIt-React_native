import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
const useLocation = () => {
    const [location, setLocation] = useState()
    const getLocationPermission = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access location was denied');
                return;
            }

            const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
            setLocation({ latitude, longitude })
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getLocationPermission();
    }, []);

    return location;
}

export default useLocation
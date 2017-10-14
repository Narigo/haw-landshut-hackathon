import { Location } from "../components/Appointment/Appointment";

export function loadCurrentPosition(): Promise<Location> {
  return Promise.resolve({
    lat: 48.5597873,
    lng: 12.2007026
  });
}

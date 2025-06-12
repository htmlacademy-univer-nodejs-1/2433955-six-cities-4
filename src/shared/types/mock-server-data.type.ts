import { Amenity } from './amenity.type.js';
import { ApartmentType } from './apartment-type.enum.js';
import { Coordinates } from './coordinates.type.js';
import { TownType } from './town-type.enum.js';
import { User } from './user.type.js';

export type MockServerData = {
  title: string[];
  description: string[];
  houseImages: string[];
  city: TownType[];
  rating: number[];
  name: string[];
  email: string[];
  avatarImage: string[];
  apartmentType: ApartmentType[];
  roomCount: number[];
  guestCount: number[];
  cost: number[];
  amenities: Array<Amenity[]>;
  authors: User[];
  commentCount: number[];
  coordinates: Coordinates[];
};

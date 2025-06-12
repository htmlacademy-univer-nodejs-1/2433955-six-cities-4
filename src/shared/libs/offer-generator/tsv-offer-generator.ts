import { getRandomItem } from '../../helpers/common.js';
import { MockServerData } from '../../types/mock-server-data.type.js';
import { OfferGenerator } from '../../types/offer-generator.interface.js';

export class TSVOfferGenerator implements OfferGenerator{
  constructor(private readonly mockData: MockServerData){}

  public generate(): string {
    const title = getRandomItem(this.mockData.title);
    const description = getRandomItem(this.mockData.description);
    const date = new Date().toISOString();
    const town = getRandomItem(this.mockData.city);
    const image = getRandomItem(this.mockData.houseImages);
    const gallery = [image]; // или используйте gallery из mockData
    const isPremium = getRandomItem([true, false]);
    const isFavorite = getRandomItem([true, false]);
    const rating = getRandomItem(this.mockData.rating);
    const apartmentType = getRandomItem(this.mockData.apartmentType);
    const roomCount = getRandomItem(this.mockData.roomCount);
    const guestCount = getRandomItem(this.mockData.guestCount);
    const cost = getRandomItem(this.mockData.cost);
    const amenity = getRandomItem(this.mockData.amenities);
    const author = {
      name: getRandomItem(this.mockData.name),
      mail: getRandomItem(this.mockData.email),
      avatar: getRandomItem(this.mockData.avatarImage),
      status: getRandomItem(['default', 'pro'])
    };
    const commentCount = getRandomItem(this.mockData.commentCount);
    const coordinates = getRandomItem(this.mockData.coordinates);

    return [
      title,
      description,
      date,
      town,
      image,
      JSON.stringify(gallery),
      String(isPremium),
      String(isFavorite),
      rating,
      apartmentType,
      roomCount,
      guestCount,
      cost,
      JSON.stringify(amenity),
      JSON.stringify(author),
      commentCount,
      JSON.stringify(coordinates)
    ].join('\t');
  }
}

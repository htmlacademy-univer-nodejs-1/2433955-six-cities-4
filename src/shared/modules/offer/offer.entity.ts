import {
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from '@typegoose/typegoose';
import { TownType } from '../../types/town-type.enum.js';
import { ApartmentType } from '../../types/index.js';
import { Amenity } from '../../types/amenity.type.js';
import { UserEntity } from '../user/user.entity.js';
import { Coordinates } from '../../types/coordinates.type.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
  },
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true, type: () => String })
  public title!: string;

  @prop({ trim: true, type: () => String })
  public description!: string;

  @prop({ type: () => String })
  public image!: string;

  @prop({ type: () => Date })
  public date!: Date;

  @prop({ type: () => Number })
  public cost!: number;

  @prop({
    type: () => String,
    enum: TownType,
  })
  public town!: TownType;

  @prop({ type: () => [String] })
  public gallery!: string[];

  @prop({ type: () => Boolean })
  public isPremium!: boolean;

  @prop({ type: () => Boolean })
  public isFavorite!: boolean;

  @prop({ type: () => Number })
  public rating!: number;

  @prop({
    type: () => String,
    enum: ApartmentType,
  })
  public apartmentType!: ApartmentType;

  @prop({ type: () => Number })
  public roomCount!: number;

  @prop({ type: () => Number })
  public guestCount!: number;

  @prop({ type: () => [String] })
  public amenities!: Amenity[];

  @prop({ type: () => Number })
  public commentCount!: number;

  @prop({ type: () => Object })
  public coordinates!: Coordinates;

  @prop({
    ref: UserEntity,
    required: true,
  })
  public userId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);

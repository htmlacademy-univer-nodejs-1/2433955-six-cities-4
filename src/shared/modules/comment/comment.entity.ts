import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments',
  },
})
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, trim: true, type: () => String })
  public text!: string;

  @prop({ type: () => Number })
  public rating!: number;

  @prop({ type: () => String })
  public author!: string;

  @prop({ type: () => String })
  public offerId!: string;

  @prop({ type: () => Date })
  public date!: Date;
}

export const CommentModel = getModelForClass(CommentEntity);

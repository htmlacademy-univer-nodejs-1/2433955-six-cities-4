import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { User, UserType } from '../../types/index.js';
import { createSHA256 } from '../../helpers/hash.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
  },
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({ unique: true, required: true, type: () => String }) // <-- Явный тип
  public mail: string;

  @prop({ required: false, default: '', type: () => String })
  public avatar: string | null;

  @prop({ required: true, default: '', type: () => String })
  public name: string;

  @prop({ required: true, default: '', type: () => String })
  private password?: string;

  @prop({ required: true, default: UserType.Default, type: () => String })
  public type: UserType;

  constructor(userData: User) {
    super();

    this.name = userData.name;
    this.mail = userData.mail;
    this.avatar = userData.avatar;
    this.type = userData.type;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public verifyPassword(password: string, salt: string) {
    const hashPassword = createSHA256(password, salt);
    return hashPassword === this.password;
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);

import { IsNotEmpty, Length, IsEmail } from "class-validator";
import { User } from "../entity/User";

export class CreateUserDto {
  public realName: string;
  public email: string;

  public toEntity(): User {
    const {realName, email} = this;
    
    const user = new User(1);
    user.realName = realName;
    user.email = email;

    return user;
  }
}

export class ResponseUserDto {
  public realName: string;
  public email: string;
}

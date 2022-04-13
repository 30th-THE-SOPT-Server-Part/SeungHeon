import { IsNotEmpty, Length, IsEmail } from "class-validator";
import { User } from "../entity/User";

export class CreateUserDto {
  public realName: string;
  public email: string;
  public password: string;

  public toEntity(): User {
    const {realName, email, password } = this;
    
    const user = new User();
    user.realName = realName;
    user.email = email;
    user.password = password;

    return user;
  }
}

export class ResponseUserDto {
  public realName: string;
  public email: string;
}

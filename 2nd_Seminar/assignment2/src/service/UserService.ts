import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { CreateUserDto } from "../dto/UserDto";
import { User } from "../entity/User";

@Service()
export class UserService {
    constructor (
        //@InjectRepository() private userRepository: UserRepository
    ) {}

    /**
     * 사용자 생성
     */
    public async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = createUserDto.toEntity();
        console.log(user);

        return user;
    }

    /**
     * 사용자 조회
     */
    public async getUserById(id: Number): Promise<User> {
        const user = new User(id);

        return user;
    }
}
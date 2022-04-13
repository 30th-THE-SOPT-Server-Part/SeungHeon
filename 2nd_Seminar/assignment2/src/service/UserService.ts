import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { CreateUserDto } from "../dto/UserDto";
import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";

@Service()
export class UserService {
    constructor (
        @InjectRepository() private userRepository: UserRepository
    ) {}

    /**
     * 사용자 생성
     */
    public async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = createUserDto.toEntity();
        const newUser = await this.userRepository.save(user);

        return newUser;
    }

    /**
     * 사용자 조회
     */
    public async getUserById(id: Number): Promise<User> {
        return new User();
    }
}
import { Member } from "./interface/Member";
import { Dinner } from "./interface/Dinner";

const dinner: Dinner = {
    member: [
        {
            name: '이승헌',
            group: 'OB'
        },
        {
            name: '이현우',
            group: 'YB'
        },
        {
            name: '이서우',
            group: 'YB'
        },
        {
            name: '장서희',
            group: 'YB'
        }
    ],
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array) {
        let suffleMember = this.shuffle(array);

        let memberOB: Member = { // memberOB: Member; 라고만 선언하면 Variable 'memberOB' is used before being assigned. 에러 발생
            name: '아무개',
            group: '미정'
        }
        let memberYB: Member = {
            name: '아무개',
            group: '미정'
        }

        for (let i = 0; i < suffleMember.length; i++) {
            console.log(suffleMember[i].group);
            if (suffleMember[i].group === 'OB') {
                memberOB = suffleMember[i];
            }

            if (suffleMember[i].group === 'YB') {
                memberYB = suffleMember[i];
            }
        }
        
        console.log(`오늘의 저녁 식사 멤버는 ${memberOB.name}, ${memberYB.name}`)
    },
};

dinner.organize(dinner.member);

export default dinner;
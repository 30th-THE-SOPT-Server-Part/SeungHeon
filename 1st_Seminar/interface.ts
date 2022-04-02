interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti: string[];
}

const serverPart: ServerPart = {
    name: '김소령',
    age: 5,
    group: 'YB',    
    mbti: ['ENFJ', 'ANGEL']
}

const serverMembers: ServerPart[] = [
    {
        name: '김소령',
        age: 5,
        group: 'YB',    
        mbti: ['ENFJ', 'ANGEL']
    },
    {
        name: '김소령',
        age: 5,
        group: 'YB',    
        mbti: ['ENFJ', 'ANGEL']
    }
];

console.log(serverMembers);

interface Closet {
    name: string;
    shirt: number;
    pants: number;
    hat?: number;
    sunglassess?: number;
}

const closet: Closet[] = [
    {
        name: '이승헌',
        shirt: 10,
        pants: 10,
        hat: 4,
        sunglassess: 3
    }
]
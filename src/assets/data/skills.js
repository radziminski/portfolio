function Skill(name, percentage, type, featured = false) {
    return {
        name,
        percentage,
        type,
        featured,
    };
}

const skills = [
    Skill('Javascript', '80%', 'web', true),
    Skill('CSS', '90%', 'web', true),
    Skill('HTML', '90%', 'web', true),
    Skill('SASS', '90%', 'web', true),
    Skill('NodeJS', '70%', 'web', true),
    Skill('ReactJS', '70%', 'web', true),
    Skill('MongoDB', '60%', 'web', true),
    Skill('Firebase', '60%', 'web', true),
    Skill('C', '30%', 'other'),
    Skill('Shell', '30%', 'other'),
    Skill('C++', '50%', 'other'),
    Skill('x86 assembly', '40%', 'other'),
    Skill('MIPS assembly', '40%', 'other'),
    Skill('Matlab', '40%', 'other'),
    Skill('Adobe After Effects', '60%', 'design'),
    Skill('Adobe Photoshop', '30%', 'design'),
];

export default skills;

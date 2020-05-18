function Skill(name, percentage, type, featured = false) {
    return {
        name,
        percentage,
        type,
        featured,
    };
}

const skills = [
    Skill('HTML + CSS/SCSS', '90', 'web', true),
    Skill('Javascript', '85', 'web', true),
    //Skill('HTML', '90', 'web', true),
    //Skill('SASS', '90', 'web', true),
    Skill('React + Redux', '75', 'web', true),
    Skill('Node + MongoDB', '65', 'web', true),
    //Skill('MongoDB', '60', 'web', true),
    Skill('Firebase', '70', 'web', true),
    Skill('C, C++', '55', 'other'),
    //Skill('C++', '50', 'other'),
    Skill('x86 & MIPS assembly', '50', 'other'),
    Skill('Python', '55', 'other'),
    Skill('Shell', '30', 'other'),
    //Skill('MIPS assembly', '40', 'other'),
    //Skill('Matlab', '40', 'other'),
];

export default skills;

import react from 'react';
import SkillCard from './skillsCard';

function Skill(){

    const levelSkill = {
        l1 : 'Basico',
        l2 : 'Intermedio',
        l3 : 'Avanzado',
        l4 : 'Experto'
    }

    const {l1, l2, l3, l4} = levelSkill;

    return (
        <div className='mt-5'>
            <h2 className='text-center text-3xl font-bold text-teal-500'>Habilidades</h2>
            <div className='flex pt-2 pt-10 justify-around'>
                <div className='w-58 '>
                    <h3 className='text-2xl text-teal-700 font-semibold'>Tech</h3>
                    <SkillCard text = 'Javascript' level = {l3}/>
                    <SkillCard text = 'React' level = {l3}/>
                    <SkillCard text = 'Html' level = {l4}/>
                    <SkillCard text = 'Git / GitHub' level = {l3}/>
                    <SkillCard text = 'Css / tailwindui / Sass / Styled-component' level = {l3}/>
                    <SkillCard text = 'Json' level = {l3}/>
                    <SkillCard text = 'Php' level = {l2}/>
                    <SkillCard text = 'TypeScript' level = {l3}/>
                    <SkillCard text = 'MySql' level = {l3}/>
                    <SkillCard text = 'NodeJs / Express' level = {l3}/>
                    <SkillCard text = 'Python' level = {l1}/>
                    <SkillCard text = 'Vite / Webpack / Vercel' level = {l3}/>
                </div >
                <div className='w-58 pr-32'>
                    <h3 className='text-2xl text-teal-700 font-semibold'>Diseño Grafico</h3>
                    <SkillCard text = 'Adobe Premier' level = {l3}/>
                    <SkillCard text = 'Adobe Photoshop' level = {l4}/>
                    <SkillCard text = 'Adobe Illustrator' level = {l3}/>
                    <SkillCard text = 'Adobe Effect' level = {l3}/>
                    <SkillCard text = 'Fotografo' level = {l2}/>
                </div>
                <div className='w-58'>
                    <h3 className='text-2xl text-teal-700 font-semibold'>Marketing Digital</h3>
                    <SkillCard text = 'Seo' level = {l3}/>
                    <SkillCard text = 'Copywriter' level = {l3}/>
                    <SkillCard text = 'Cta' level = {l3}/>
                </div>
            </div>
        </div>
    )
}

export default Skill;

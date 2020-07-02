import { FaGraduationCap, FaJs, FaExchangeAlt, FaFileExcel } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

interface Courses {
    title: string,
    institution: string,
    date: string,
    description: string,
    tecnologies: string[],
    icon: IconType
}

const courses: Courses[] = [
    {
        title: 'Sistemas para Internet',
        institution: 'Faculdade ALFA',
        date: '2019 - 2021',
        description: 'Desenvolvimento WEB e Mobile.',
        tecnologies: [
            'PHP', 
            'Javascript', 
            'MySQL', 
            'MongoDB', 
            'HTML', 
            'CSS', 
            'Bootstrap',
        ],
        icon: FaGraduationCap
    },

    {
        title: 'Next Level Week #1',
        institution: 'Rocketseat',
        date: 'Junho - 2020',
        description: 'Desenvolvimento da aplicação Ecoleta; sistema para encontro de pontos de coleta reciclável.',
        tecnologies: [
            'Javascript',
            'NodeJS',
            'ReactJS',
            'React Native',
            'SQLite'
        ],
        icon: FaJs
    },
    {
        title: 'Introdução à API, Rest e RESTful',
        institution: 'Rocketseat',
        date: 'Maio - 2020',
        description: 'Estudo de introdução conceitual e prática de API e padrões Rest e RESTful.',
        tecnologies: [
            'Javascript',
            'NodeJS'
        ],
        icon: FaExchangeAlt
    },
    {
        title: 'Aprenda Excel Online',
        institution: 'AprendaExcelOnline.com',
        date: 'Julho - 2018',
        description: 'Domínio de criação e manipulação de dados em planilhas Excel (Básico ao Avançado).',
        tecnologies: [
            'Excel'
        ],
        icon: FaFileExcel
    }
    
]

export default courses
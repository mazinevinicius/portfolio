import { FaCalculator, FaCode } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

interface Experiences {
    company: string,
    location: string,
    office: string,
    date: string,
    description:string,
    icon: IconType
}

const experiences: Experiences[] = [
    {
        company: 'Grupo Gazin',
        location: 'Douradina - PR',
        office: 'Aux. Administrativo | Desenvolvedor WEB',
        date: '2018 - presente',
        description: 'Desenvolvimento de aplicações WEB; tabulação e análise de dados de pesquisas de mercado; criação e amostragem de apresentações empresariais.',
        icon: FaCode
    },
    {
        company: 'Escritório Lider',
        location: 'Icaraíma - PR',
        office: 'Aux. Contábil',
        date: '2010 - 2015',
        description: 'Contabilidade de empresas de pequeno porte; lançamento de notas fiscais.',
        icon: FaCalculator
    }

]

export default experiences
import { ContainerCardAdvertiser } from './style'
import InitialsName from '../InicialsName/InicialsName'
import Name from '../Name/Name'
import { StyledButton } from '../../styles/buttons'

interface IMockUser {
    name: string
    isSeller: boolean
    description: string,
}

export const mockUser: IMockUser = {
    name: 'Samuel Leão',
    isSeller: true,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
}

export const CardAdvertiser = (): JSX.Element => {



    return (
        <ContainerCardAdvertiser>
            <InitialsName width='104' height='104' fontSize='36px' name={mockUser.name} />
            <Name fontSize='20px' name={mockUser.name}  />
            <div className='container-description'>
                <span>{mockUser.description}</span>
            </div>
            <StyledButton className='big grey1'>Ver todos anúncios</StyledButton>
        </ContainerCardAdvertiser>
    )
}
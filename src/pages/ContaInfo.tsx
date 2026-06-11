import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../components/AppContext"

const ContaInfo = () => { 

    const { user } = useContext(AppContext)

    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    Conta
                </Text>
            </Link>
            <a href='/conta/1'>
                Link com tag a
            </a>
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
        </>
    )
}

export default ContaInfo

import { gql, useMutation } from "@apollo/client";
import { Box, HStack} from "@chakra-ui/react";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

import './User.css';

const CREATE_SUBSCRIBER_MUTATION = gql `
    mutation createSubscriber ($name: String!, $email:String!){
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}

`

export function User() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION);

   async function handleSubscriber(event: FormEvent) {
        event.preventDefault();
        await createSubscriber({
            variables: {
                name,
                email      
            }
        })
        navigate('/Event');
    }
    return (
        <Box w='full' h='99.9vh' bgColor="#121214">
            <HStack alignItems='center' justifyContent='center' w='full' h='full'>
                <Box w='45vw' h='full' my='30mm' alignItems='center' justifyContent='start'>
                    <Logo />
                    <h2 >
                    Construa uma <span>aplicação completa</span>, do zero, <span>com React</span>
                    </h2>
                </Box>
                <form onSubmit={handleSubscriber}>
                    <input placeholder='Digite seu Nome' type='text'
                    onChange={event => setName(event.target.value)}
                    />
                <input placeholder='Digite seu Email' type='email'
                onChange={event => setEmail(event.target.value)}
                />
                <button type="submit">Garantir Minha Vaga</button>
                </form>
            </HStack>
        </Box>
    );
}
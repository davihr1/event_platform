import { gql, useQuery } from "@apollo/client";
import { Avatar, Box, Button, Center, HStack, Text } from '@chakra-ui/react';


import { Logo } from "./Logo";
import { Discord } from "./Discord";

const GET_LESSONS_API = gql `
  query {
  lessons {
    title,
    updatedAt,
    videoId,
    lessonType,
    description
  }
  teachers {
    name,
    avatarURL
  }
}
`
interface lessons {
    title: string;
    lessonType: 'class' | 'live';
    name: string;
    avatarURL: string;
    description: string;
}

export function Event() {
    const { data } = useQuery<{lessons: lessons[], teachers: lessons[]}>(GET_LESSONS_API)
    
    return (
        <Box w='full' h='full' backgroundColor='#121214' py={4}>
            <Box w='full' h='5rem' backgroundColor='#29292E' py={6} marginTop={-4}>
                <Center h='5rem'>
                    <Logo />
                </Center>
            </Box>
            <HStack>
                <Box w="70vw" h='full'>
                    <Box w='98.7vw' h='25rem' alignItems='center' justifyContent='center'>
                        <Center h='25rem'>
                        <iframe width="760" height="415" src="https://www.youtube.com/embed/pvrKHpXGO8E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </Center>
                    </Box>

                    <Box w='full' h='full'>
                        <HStack w='97vw' h='full' margin='1rem'>
                            <Box mr="10rem" >
                                <Text fontSize='3rem' color='white' fontFamily='Open Sans' fontWeight={700}>{data?.lessons[0].title}</Text>
                                <Text fontSize='1.2rem' color='white' fontFamily='Open Sans' fontWeight={400} w='60vw' opacity="0.6">
                                    {data?.lessons[0].description}
                                </Text>
                            </Box>
                            <Box>
                            <Button w='18rem' h='3rem' leftIcon={<Discord />} backgroundColor="#00875F" textAlign='center' mb={29}
                             borderColor='none' border='none' borderRadius='2%' _hover={{ backgroundColor:"#0B5345" }}>
                                <Text fontSize='1rem' color='white' fontFamily='Open Sans' fontWeight={400}>DISCORD</Text>
                            </Button>
                            <Button w='18rem' h='3rem' backgroundColor="#00000000" textAlign='center'
                             border='solid 2px' borderColor='#00873F' borderRadius="2%" _hover={{ backgroundColor:"#00873F" }}>
                                <Text fontSize='1rem' color='white' fontFamily='Open Sans' fontWeight={400}>DESAFIOS</Text>
                            </Button>
                            </Box>
                        </HStack>
                        <HStack m={10}>
                            <Avatar name='Dan Abrahmov' src={data?.teachers[1].avatarURL} w='5rem' borderRadius='50%'/>
                            <Text color="white" fontFamily='Open Sans' fontWeight={400} fontSize='1.2rem' >{data?.teachers[1].name}</Text>
                        </HStack>
                    </Box>
                </Box>
                
            </HStack>
        </Box>
    );
}


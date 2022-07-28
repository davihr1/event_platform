import { Button } from "@chakra-ui/react";

interface teacherP {
    name: 'live' | 'class';
    color: string;
}

export function Buttons(props: teacherP) {
    return (
        <Button bg={props.name === "live" ? 'red' : 'blue'} color={props.color}>
            {props.name === "live" ? 'ROCKETSEAT' : 'DISCOVER'}
        </Button>
    );
}
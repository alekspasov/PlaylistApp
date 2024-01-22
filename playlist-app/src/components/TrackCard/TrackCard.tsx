import { Button, Card,CardBody, Heading, Image, Text } from "@chakra-ui/react"

const TrackCard = ({track}) => {

    return (
        <Card   direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
            <Image alt="album cover" objectFit="cover" margin="3vh" />
            <CardBody>
                <Heading>{track.name}</Heading>
                <Text>{track.artist}</Text>
                <Text>{track.album}</Text>
            </CardBody>
            <Button marginTop="50px">+</Button>
           
        </Card>
    )
}

export default TrackCard;
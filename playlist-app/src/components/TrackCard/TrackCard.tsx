import { Button, Card,CardBody, Heading, Image, Text } from "@chakra-ui/react"

const TrackCard = () => {

    return (
        <Card   direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
            <Image alt="album cover" objectFit="cover" margin="3vh" />
            <CardBody>
                <Heading>Track name</Heading>
                <Text>artist name</Text>
                <Text>album name</Text>
            </CardBody>
            <Button marginTop="50px">+</Button>
           
        </Card>
    )
}

export default TrackCard;
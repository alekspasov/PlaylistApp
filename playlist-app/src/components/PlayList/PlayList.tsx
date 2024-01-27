import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"

const PlayList = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
 

  return (
    <>
     
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement = 'right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default PlayList;
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function AddDeleteBox() {
  return (
    <Box
      borderRadius="25px"
      padding="3rem"
      marginLeft="8rem"
      marginTop="10rem"
      bg="teal"
      w="400px"
      h="650px"
      p={4}
      color="white"
    >
      <FormLabel fontSize="40px">Hello User!</FormLabel>
      <FormControl marginTop="50px" id="firstName">
        <FormLabel marginLeft="140px">First Name</FormLabel>
        <Input placeholder="Enter your first name" name="First Name" />
      </FormControl>
      <FormControl marginTop="50px" id="lastName">
        <FormLabel marginLeft="140px">Last Name</FormLabel>
        <Input placeholder="Enter your last name" name="Last Name" />
      </FormControl>
      <FormControl marginTop="50px" id="department">
        <FormLabel marginLeft="140px">Department</FormLabel>
        <Input placeholder="Enter your department name" name="Department" />
      </FormControl>
      <div>
        <Button marginTop="50px" marginLeft="121px" colorScheme="teal">
          Add Employee
        </Button>
      </div>
    </Box>
  );
}
export default AddDeleteBox;

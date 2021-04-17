import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";

const Dashboard = () => {
  return (
    <VStack>
      <Text>Account Details</Text>
      <Heading>Welcome!</Heading>
      <HStack>
        <Heading>Setup</Heading>
        <Divider />
      </HStack>
      <Box>
        <Heading>Verify your ABN</Heading>
        <ButtonGroup>
          <Button>Verify</Button>
          <Button>Learn More</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading>Register your device as a beacon</Heading>
        <ButtonGroup>
          <Button>Register</Button>
          <Button>Learn More</Button>
        </ButtonGroup>
      </Box>
    </VStack>
  );
};

export default Dashboard;

import { Box, Flex, Heading, Text, Spacer, Container, Image, Button } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Header */}
      <Box as="header" bg="blue.500" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Image src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHAlMjBsb2dvfGVufDB8fHx8MTcxMjg2NjkxMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" boxSize="50px" mr={4} />
            <Heading as="h1" size="xl" color="white">
              Prompt Manager
            </Heading>
            <Spacer />
            <Button leftIcon={<FaSignInAlt />} colorScheme="white" variant="outline" mr={4}>
              Login
            </Button>
            <Button leftIcon={<FaUserPlus />} colorScheme="white" variant="solid">
              Register
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container as="main" maxW="container.lg" py={8} flex={1}>
        <Heading as="h2" size="2xl" mb={4}>
          Welcome to Prompt Manager
        </Heading>
        <Text fontSize="xl">Manage and organize your prompts efficiently with our user-friendly app. Register now to get started!</Text>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.100" py={4}>
        <Container maxW="container.lg">
          <Text textAlign="center">&copy; {new Date().getFullYear()} Prompt Manager. All rights reserved.</Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Index;

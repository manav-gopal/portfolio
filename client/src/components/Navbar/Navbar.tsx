import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";

interface NavLinkProps {
  children: ReactNode;
}

const Links: string[] = ["About", "Projects", "Skills", "Contact"];

const NavLink: React.FC<NavLinkProps> = ({ children }) => (
  <a
    // as={Link}

    href={`#${(children as string).toLowerCase()}`}
    className="px-2 py-1 transition-all duration-500 border border-none rounded-2xl hover:border-solid hover:border-primary-100 hover:text-primary-100"
    // sx={{ border: "1px solid transparent", paddingX: "1rem" }}
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    // <Box id="nav" className="sticky top-0 z-50 px-4 backdrop-blur-sm">
    <Box id="nav" className="sticky top-0 z-50 px-4">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Site name on the left */}
        <Box color="white" fontWeight="bold" fontSize="2xl" px={4}>
        <span className="text-primary-400">{'My '}</span>Portfolio
        </Box>

        {/* menu for mobile screens */}
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="transparent"
          _hover={{ bg: "gray.700" }}
        />

        {/* Nav links on the right for larger screens */}
        <HStack
          spacing={8}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </Flex>

      {/* Mobile menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;

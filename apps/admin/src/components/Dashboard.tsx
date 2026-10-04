import { BoxIcon, ExitIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  DropdownMenu,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../data/middleware/auth";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = useContext(userContext);
  return (
    <Grid columns="250px 1fr" style={{ height: "100vh", width: "100vw" }}>
      <Box p="4" style={{ borderRight: "1px solid var(--gray-5)" }}>
        <Flex direction="column" gap="4">
          <Heading size="4" mb="4">
            Inventory App
          </Heading>
          <Flex align="center" gap="2" style={{ cursor: "pointer" }}>
            <HomeIcon /> Dashboard
          </Flex>
          <Flex align="center" gap="2" style={{ cursor: "pointer" }}>
            <BoxIcon />{" "}
            <NavLink to="/" end>
              Stores
            </NavLink>
          </Flex>
          <Flex align="center" gap="2" style={{ cursor: "pointer" }}>
            <BoxIcon />{" "}
            <NavLink to="/products" end>
              Products
            </NavLink>
          </Flex>
          <Flex align="center" gap="2" style={{ cursor: "pointer" }}>
            <GearIcon /> Settings
          </Flex>
        </Flex>
      </Box>

      <Box style={{ backgroundColor: "var(--gray-2)", width: "100%" }}>
        <Box p="6" style={{ display: "flex", justifyContent: "flex-end" }}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Text>
                <Avatar
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453..."
                  fallback="JD"
                  radius="full"
                  size="2"
                  style={{ cursor: "pointer" }}
                />
              </Text>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content variant="soft" align="end">
              <DropdownMenu.Label>My Account</DropdownMenu.Label>
              <DropdownMenu.Item shortcut="⌘ P">
                {/* <UserIcon /> Profile */} Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ ,">
                <GearIcon /> Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red">
                <ExitIcon /> Log Out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
        <Box p="6" pt="0">
          {children}
        </Box>
      </Box>
    </Grid>
  );
}

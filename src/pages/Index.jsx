import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Input, Grid, GridItem, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaSearch, FaGavel } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling bluetooth headphones",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MHx8fHwxNzExMDYzNDM2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    currentBid: 59.99,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Fitness tracker with heart rate monitor",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNofGVufDB8fHx8MTcxMTA2MzQzN3ww&ixlib=rb-4.0.3&q=80&w=1080",
    currentBid: 129.99,
  },
  {
    id: 3,
    name: "Vintage Leather Backpack",
    description: "Handcrafted genuine leather backpack",
    image: "https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFja3BhY2t8ZW58MHx8fHwxNzExMDYzNDM3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    currentBid: 89.99,
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Perform search logic here
    console.log("Searching for:", searchQuery);
  };

  const handleBid = (productId, bidAmount) => {
    // Perform bidding logic here
    console.log(`Placing bid of $${bidAmount} for product ${productId}`);
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Bidding Website
        </Heading>
        <HStack>
          <Input placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Button leftIcon={<FaSearch />} onClick={handleSearch}>
            Search
          </Button>
        </HStack>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {products.map((product) => (
            <GridItem key={product.id}>
              <Box borderWidth={1} borderRadius="lg" p={4}>
                <Image src={product.image} alt={product.name} mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <HStack>
                  <Text fontWeight="bold">Current Bid: ${product.currentBid}</Text>
                  <Spacer />
                  <Button leftIcon={<FaGavel />} onClick={() => handleBid(product.id, product.currentBid + 10)}>
                    Place Bid
                  </Button>
                </HStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Index;

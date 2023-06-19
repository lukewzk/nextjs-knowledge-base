"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Colors from "./colors/colors";
import Searchbar from "./components/Searchbar";
import CategoryCard from "./components/CategoryCard";

export default function Home() {
  return (
    <main>
      <Box sx={{ paddingTop: "3.5rem", paddingBottom: "2.5rem" }}>
        <Typography
          sx={{
            fontWeight: "700",
            color: Colors.black,
            textAlign: "center",
            lineHeight: "2.5rem",
            marginBottom: "0.5rem",
          }}
          variant="h4"
        >
          Knowledge base does not have to be boring
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            color: Colors.black,
            textAlign: "center",
            lineHeight: "1.5rem",
          }}
          variant="h6"
        >
          Everything you need to manage your messaging
        </Typography>
      </Box>
      <Searchbar />
      <Box
        sx={{
          backgroundColor: Colors.secondaryGrey,
          paddingTop: "3.75rem",
          paddingBottom: "6.25rem",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gridTemplateRows: "auto auto",
          rowGap: "1.25rem",
        }}
      >
        <CategoryCard />
      </Box>
    </main>
  );
}

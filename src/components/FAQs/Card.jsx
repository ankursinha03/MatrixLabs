import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

export default function MyCard({ data }) {
  const [expand, setExpand] = useState();

  return (
    <Box
      key={String(Math.random())}
      sx={{
        height: "max-content",
        width: "100%",
        maxWidth: { xs: "500px", sm: "80%", md: "max( 40% , 475px)" },
        mx: { xs: "auto", md: 3 },
        display: "flex",
        flexDirection: "column",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        justifyContent: "space-around",
        backgroundColor: "#3c3c3c80",
        borderRadius: "20px",
        p: { xs: "auto", sm: 2.5 },
        py: { xs: 2 },
        my: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: { xs: 1, sm: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => setExpand(!expand)}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              color: "white",
              whiteSpace: expand ? "normal" : "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {data.question}
          </Typography>
          <Box flexGrow={1} />
          <ArrowDropDownIcon
            sx={{
              color: "white",
            }}
          />
        </Box>
        <Collapse in={expand}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              color: "#c2c2c2",
              fontSize: { xs: "0.8rem", sm: "0.95rem" },
              ml: "8px",
              mt: 1,
            }}
          >
            {data.answer}
          </Typography>
        </Collapse>
      </Box>
    </Box>
  );
}

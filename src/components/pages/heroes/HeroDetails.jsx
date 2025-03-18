import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    Box,
    Container,
    LinearProgress,
    Divider,
    Paper,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    CircularProgress
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import HeightIcon from "@mui/icons-material/Height";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function HeroDetails() {
    const { id } = useParams();
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const response = await fetch(`https://www.superheroapi.com/api.php/7b85261e5c06bfbc1cb085ff657641dd/${id}`);

                if (!response.ok) throw new Error("Error en la API");

                const data = await response.json();
                setHero(data);
            } catch (error) {
                console.error("Error fetching hero data:", error);
                alert("No se pudo obtener el héroe.");
            } finally {
                setLoading(false);
            }
        };

        fetchHero();
    }, [id]);

    if (loading) return <Typography textAlign="center">Cargando...</Typography>;
    if (!hero || hero.response === "error") return <Typography textAlign="center">No se encontró el héroe.</Typography>;

    const getStatColor = (value) => {
        const numValue = parseInt(value);
        if (numValue >= 80) return "success";
        if (numValue >= 50) return "info";
        if (numValue >= 30) return "warning";
        return "error";
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Card elevation={4}>
                {/* Hero Header with Better Contrast */}
                <Box sx={{ position: "relative" }}>
                    {/* Semi-transparent overlay for the entire image area */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(255, 255, 255, 0.69)",
                            zIndex: -1
                        }}
                    />
                    
                    {/* Hero Image */}
                    <CardMedia
                        component="img"
                        height="600"
                        image={hero.image?.url}
                        alt={hero.name}
                        sx={{
                            objectFit: 'contain'
                        }}
                    />
                    
                    {/* Hero Information Overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            p: 3,
                            color: "white",
                            zIndex: 2
                        }}
                    >
                        <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
                            {hero.name}
                        </Typography>
                        <Typography variant="h6">
                            {hero.biography["full-name"]}
                            {hero.biography.alignment && (
                                <Chip
                                    label={hero.biography.alignment.toUpperCase()}
                                    color={hero.biography.alignment === "good" ? "success" :
                                        hero.biography.alignment === "bad" ? "error" : "warning"}
                                    size="small"
                                    sx={{ ml: 2, textTransform: "capitalize" }}
                                />
                            )}
                        </Typography>
                        <Typography variant="body2">
                            Publisher: {hero.biography.publisher || "Unknown"}
                        </Typography>
                    </Box>
                </Box>

                <CardContent>
                    <Grid container spacing={3}>
                        <Grid size={{xs: 12, md: 6}}>
                            {/* Powerstats */}
                            <Accordion defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="powerstats-content"
                                    id="powerstats-header"
                                    sx={{ bgcolor: "#f5f5f5" }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <FitnessCenterIcon sx={{ mr: 1 }} />
                                        <Typography variant="h6">Powerstats</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        {Object.entries(hero.powerstats).map(([key, value]) => (
                                            <Grid size={{xs:12}} key={key}>
                                                <Typography variant="body2" sx={{ textTransform: "capitalize", mb: 0.5 }}>
                                                    {key} ({value || "?"})
                                                </Typography>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={parseInt(value) || 0}
                                                    color={getStatColor(value)}
                                                    sx={{ height: 8, borderRadius: 5 }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

                            {/* Biography */}
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="biography-content"
                                    id="biography-header"
                                    sx={{ bgcolor: "#f5f5f5" }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <PersonIcon sx={{ mr: 1 }} />
                                        <Typography variant="h6">Biography</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List dense>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <PublicIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Place of Birth"
                                                secondary={hero.biography["place-of-birth"] || "Unknown"}
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <SchoolIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="First Appearance"
                                                secondary={hero.biography["first-appearance"] || "Unknown"}
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <PersonIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Alter Egos"
                                                secondary={hero.biography["alter-egos"] || "None"}
                                            />
                                        </ListItem>
                                    </List>

                                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>Aliases:</Typography>
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                        {hero.biography.aliases && hero.biography.aliases.map((alias, index) => (
                                            alias ? (
                                                <Chip key={index} label={alias} size="small" variant="outlined" />
                                            ) : null
                                        ))}
                                        {(!hero.biography.aliases || hero.biography.aliases.length === 0) && (
                                            <Typography variant="body2">No known aliases</Typography>
                                        )}
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>

                        <Grid size={{xs: 12, md: 6}}>
                            {/* Appearance */}
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="appearance-content"
                                    id="appearance-header"
                                    sx={{ bgcolor: "#f5f5f5" }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <VisibilityIcon sx={{ mr: 1 }} />
                                        <Typography variant="h6">Appearance</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        <Grid size={{xs:6}}>
                                            <Typography variant="body2" color="textSecondary">Gender:</Typography>
                                            <Typography variant="body1">{hero.appearance.gender || "Unknown"}</Typography>
                                        </Grid>
                                        <Grid size={{xs:6}}>
                                            <Typography variant="body2" color="textSecondary">Race:</Typography>
                                            <Typography variant="body1">{hero.appearance.race || "Unknown"}</Typography>
                                        </Grid>
                                        <Grid size={{xs:6}}>
                                            <Typography variant="body2" color="textSecondary">Height:</Typography>
                                            <Typography variant="body1">
                                                {hero.appearance.height?.[1] || hero.appearance.height?.[0] || "Unknown"}
                                            </Typography>
                                        </Grid>
                                        <Grid size={{xs:6}}>
                                            <Typography variant="body2" color="textSecondary">Weight:</Typography>
                                            <Typography variant="body1">
                                                {hero.appearance.weight?.[1] || hero.appearance.weight?.[0] || "Unknown"}
                                            </Typography>
                                        </Grid>
                                        <Grid size={{xs:6}}>
                                            <Typography variant="body2" color="textSecondary">Eye Color:</Typography>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Box
                                                    sx={{
                                                        width: 16,
                                                        height: 16,
                                                        borderRadius: "50%",
                                                        bgcolor: hero.appearance["eye-color"]?.toLowerCase() || "gray",
                                                        mr: 1,
                                                        border: "1px solid #ddd"
                                                    }}
                                                />
                                                <Typography variant="body1">
                                                    {hero.appearance["eye-color"] || "Unknown"}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid size={{xs:6}}>
                                            <Typography variant="body2" color="textSecondary">Hair Color:</Typography>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Box
                                                    sx={{
                                                        width: 16,
                                                        height: 16,
                                                        borderRadius: "50%",
                                                        bgcolor: hero.appearance["hair-color"]?.toLowerCase() || "gray",
                                                        mr: 1,
                                                        border: "1px solid #ddd"
                                                    }}
                                                />
                                                <Typography variant="body1">
                                                    {hero.appearance["hair-color"] || "Unknown"}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

                            {/* Work */}
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="work-content"
                                    id="work-header"
                                    sx={{ bgcolor: "#f5f5f5" }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <WorkIcon sx={{ mr: 1 }} />
                                        <Typography variant="h6">Work</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="subtitle1">Occupation:</Typography>
                                    <Typography variant="body2" paragraph>
                                        {hero.work.occupation || "Unknown"}
                                    </Typography>
                                    <Typography variant="subtitle1">Base:</Typography>
                                    <Typography variant="body2">
                                        {hero.work.base || "Unknown"}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* Connections */}
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="connections-content"
                                    id="connections-header"
                                    sx={{ bgcolor: "#f5f5f5" }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <GroupIcon sx={{ mr: 1 }} />
                                        <Typography variant="h6">Connections</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="subtitle1">Group Affiliation:</Typography>
                                    <Typography variant="body2" paragraph>
                                        {hero.connections["group-affiliation"] || "None"}
                                    </Typography>
                                    <Typography variant="subtitle1">Relatives:</Typography>
                                    <Typography variant="body2">
                                        {hero.connections.relatives || "None known"}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

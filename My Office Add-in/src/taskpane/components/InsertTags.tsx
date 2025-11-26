import React, { useState } from "react";
import { Button, Box, Typography, IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';

const InsertTags: React.FC = () => {
    const fields = [
        { label: "Timestamp" },
        { label: "Contact Email" },
        { label: "Contact First Name" },
        { label: "Contact Last Name" },
        { label: "Contact New User Demo Video Embed Code" },
        { label: "Contact Phone Number" },
        { label: "Deal Amount" },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchToggle = () => setShowSearch(!showSearch);

    const filteredFields = fields.filter((field) =>
        field.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Main Wrapper */}
            <Box
                sx={{
                    width: "100%",
                    minHeight: "100vh",
                    overflowX: "hidden",
                    boxSizing: "border-box",
                }}
            >
                {/* Header Box */}
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={1}
                    sx={{
                        padding: "10px",
                        borderRadius: "12px",
                        backgroundColor: "transparent",
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                        border: "none",
                        maxWidth: "100%",
                    }}
                >
                    <Typography
                        variant="h5"
                        color="primary"
                        sx={{
                            fontWeight: 600,
                            textDecoration: "none",
                            cursor: "pointer",
                            flex: 1,
                            fontSize: "18px",
                            fontFamily: "'Poppins', sans-serif"
                        }}
                    >
                        HubSpot
                    </Typography>
                    <Box display="flex" alignItems="center" >
                        <IconButton
                            size="small"
                            color="primary"
                            onClick={handleSearchToggle}
                            sx={{
                                transition: "0.3s ease",
                                '&:hover': { transform: 'scale(1.1)' },
                            }}
                        >
                            <SearchIcon fontSize="medium" />
                        </IconButton>
                        <IconButton
                            size="small"
                            color="primary"
                            sx={{
                                transition: "0.3s ease",
                                '&:hover': { transform: 'scale(1.1)' },
                            }}
                        >
                            <SettingsOutlinedIcon fontSize="medium" />
                        </IconButton>
                        <IconButton
                            size="small"
                            color="primary"
                            sx={{
                                transition: "0.3s ease",
                                '&:hover': { transform: 'scale(1.1)' },
                            }}
                        >
                            <LoopOutlinedIcon fontSize="medium" />
                        </IconButton>
                    </Box>
                </Box>

                {/* Search Field */}
                {showSearch && (
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        mb={1}
                        sx={{
                            padding: "10px 20px",
                            borderRadius: "8px",
                            backgroundColor: "#ffffff",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            border: "none",
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            size="small"
                            variant="outlined"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search Contacts"
                            sx={{
                                width: "100%",
                                marginRight: "16px",
                                backgroundColor: "#f7f7f7",
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: "12px",
                                },
                            }}
                        />
                    </Box>
                )}

                {/* Fields List */}
                <div
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        padding: "20px",
                        width: "100%",
                        maxWidth: "700px",
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                        marginBottom: "30px",
                        overflowY: "auto",
                        maxHeight: "70vh",
                        boxSizing: "border-box",
                        scrollbarWidth: "none",
                    }}
                >
                    {filteredFields.map((field, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "18px",
                                paddingBottom: "12px",
                                borderBottom: index !== filteredFields.length - 1 ? "1px solid #e0e0e0ff" : "none",
                            }}
                        >
                            <Typography
                                variant="body1"
                                style={{
                                    fontSize: "14px",
                                    color: "#333",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    flex: 1,
                                }}
                            >
                                {field.label}
                            </Typography>
                            <Button
                                variant="contained"
                                size="small"
                                startIcon={<AddIcon sx={{ fontSize: "16px" }} />}
                                sx={{
                                    textTransform: "none",
                                    backgroundColor: "#1976d2",
                                    color: "#fff",
                                    fontSize: "14px",
                                    height: "36px",
                                    minWidth: "100px",
                                    borderRadius: "8px",
                                    padding: "6px 12px",
                                    '&:hover': {
                                        backgroundColor: "#115293",
                                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    },
                                }}
                            >
                                Insert
                            </Button>
                        </div>
                    ))}
                </div>
            </Box>
        </>
    );
};

export default InsertTags;

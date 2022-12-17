import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import { Grid, TextField ,Button} from "@mui/material";

function onSubmit(){

}

const RecipeForm = () => (
    <>
    <h1>Submit a new recipe below:</h1>
    <Box>
        <Grid container spacing={2}>
            <Grid container item sx={12}>
                <TextField 
                    sx={{ margin: "auto",
                    width: "50%"}}
                    required
                    margin="normal"
                    id="outlined-title-input"
                    label="Title"
                    onChange={(e) => setTitle(e.target.value)}
                
                />
            </Grid>
            <Grid container item sx={12}>
                <TextField 
                    sx={{ margin: "auto",
                    width: "50%"}}
                    required
                    margin="normal"
                    id="outlined-description-input"
                    label="Description"
                />
            </Grid>
            <Grid container item sx={12}>
                <TextField 
                    sx={{ margin: "auto",
                    width: "50%"}}
                    required
                    type="number"
                    margin="normal"
                    id="outlined-servings-input"
                    label="Servings"
                />
            </Grid>
            <Grid container item sx={12}>
                <TextField 
                    sx={{ margin: "auto",
                    width: "50%"}}
                    required
                    multiline
                    maxRows={5}
                    margin="normal"
                    id="outlined-tags-input"
                    label="Tags"
                    helperText="example: Chicken, Beef, Asian, American"
                />
            </Grid>
            <Grid container item sx={12}>
                <TextField 
                    sx={{ margin: "auto",
                    width: "50%"}}
                    required
                    multiline
                    maxRows={5}
                    margin="normal"
                    id="outlined-ingredients-input"
                    label="Ingredients"
                />
            </Grid>
            <Grid container item sx={12}>
                <TextField 
                    sx={{ margin: "auto",
                    width: "50%"}}
                    required
                    multiline
                    maxRows={5}
                    margin="normal"
                    id="outlined-instructions-input"
                    label="Instructions"
                />     
            </Grid>
        </Grid>
        <Button 
        variant="contained"  
        onClick={(e) => {
            console.log(e.target.parentNode());
        }}
    >Submit</Button>
    </Box>
    </>
)

export default RecipeForm
import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import { Grid, TextField ,Button} from "@mui/material";


function RecipeForm(){

    const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")
    const [servings, setServings] = useState(0)
    const [tags, setTags] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")
    const [originalURL, setOriginalURL] = useState("")

    const onSubmit = (data) => {

    }


    return(
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
                    value={title}
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
                    value={discription}
                    onChange={(e) => setDiscription(e.target.value)}
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
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
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
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
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
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
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
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />     
            </Grid>
            <Grid container item sx={12}>
                <TextField 
                    sx={{ margin: "auto",
                    width: "50%"}}
                    required
                    margin="normal"
                    id="outlined-originalURL-input"
                    label="Original URL"
                    value={originalURL}
                    onChange={(e) => setOriginalURL(e.target.value)}
                />     
            </Grid>
        </Grid>
        {/* const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")
    const [servings, setServings] = useState(0)
    const [tags, setTags] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")
    const [originalURL, setOriginalURL] = useState("") */}
        <Button 
        variant="contained"  
        onClick={(e) => {
            onSubmit({"title": title, "discription": discription, "servings": servings, "tags": tags, "ingredients": ingredients, "instructions": instructions, "originalURL": originalURL})
        }}
    >Submit</Button>
    </Box>
    </>
    )
}

export default RecipeForm
import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import { Grid, TextField ,Button} from "@mui/material";


const url = 'http://localhost:3001/api'

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            // ',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }



function RecipeForm(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [servings, setServings] = useState(0)
    const [tags, setTags] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")
    const [originalURL, setOriginalURL] = useState("")

    const onSubmit = (data) => {
        postData(url, data)
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
            onSubmit({"title": title, "description": description, "servings": servings, "tags": tags, "ingredients": ingredients, "instructions": instructions, "originalURL": originalURL})
        }}
    >Submit</Button>
    </Box>
    </>
    )
}

export default RecipeForm
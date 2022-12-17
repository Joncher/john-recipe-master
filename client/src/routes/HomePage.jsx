import React from "react";
import Cardlist from "../components/Cardlist";
import RecipeCards from "../components/RecipeCards"
import RecipeForm from "../components/RecipeForm";

export default function HomePage() {
    return (
      <>
          <h1>Welcome to Recipe Master</h1>
          <h2>Here you will find my favorite recipes I go back to again and again.</h2>
          <Cardlist />
          <RecipeForm />
         
      </>
    );
  }
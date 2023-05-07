
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {recipes.map((recipe, index) => (
          <View key={index} style={styles.recipe}>
            <Image
              style={styles.image}
              source={{ uri: recipe.image }}
            />
            <Text style={styles.title}>{recipe.title}</Text>
            <Text style={styles.description}>{recipe.description}</Text>
            <Text style={styles.ingredients}>{recipe.ingredients}</Text>
            <Text style={styles.instructions}>{recipe.instructions}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipe: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  ingredients: {
    marginBottom: 5,
  },
  instructions: {
    marginBottom: 5,
  },
});

export default App;
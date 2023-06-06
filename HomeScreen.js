import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de home feita por Daniel Assis</Text>
      <Text style={styles.subtitle}>Bem vindo ao meu site de instrumentos!</Text>
      <Text style={styles.subtitle}>aproveite :D!</Text>
      <Image
      source={require('../assets/Fondo Bass Guitarra Guitarra Electrica Instrumento De Cuerda Antecedentes.jpg')}                  
        style={styles.image}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});

export default HomeScreen;

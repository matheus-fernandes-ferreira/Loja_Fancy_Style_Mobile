import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre a FancyStyle</Text>
      <Text style={styles.paragraph}>
        A FancyStyle nasceu da paixão por moda e do desejo de criar peças que celebram a beleza, a força e a individualidade da mulher moderna. Desde o seu início, nossa missão tem sido oferecer roupas elegantes, confortáveis e que reflitam as últimas tendências, sem abrir mão da qualidade.
      </Text>
      <Text style={styles.paragraph}>
        Ao longo dos anos, a FancyStyle cresceu e se tornou referência no mercado de moda feminina, sempre buscando inovar e trazer o que há de melhor para suas clientes. Cada coleção é pensada para atender a diferentes estilos e momentos da vida, garantindo que cada mulher se sinta única e confiante.
      </Text>
      <Text style={styles.paragraph}>
        A marca se orgulha de suas raízes, sempre valorizando o trabalho artesanal e o cuidado em cada detalhe. Hoje, a FancyStyle continua a expandir sua presença no mundo da moda, conquistando o coração de mulheres de todas as idades e estilos.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#666',
    textAlign: 'justify',
  },
});

export default AboutScreen;

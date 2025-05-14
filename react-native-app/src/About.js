import React from 'react';
import { StyleSheet, View, Text, Linking, ScrollView } from 'react-native';
// import Header from '../components/Home/Header';
// import HomeButton from './components/HomeButton';

const About = () => {
  return (
    <View style={styles.container}>
      {/* About Container */}
      {/* <Header /> */}
      <View style={styles.aboutContainer}>
        {/* Heading */}
        <Text style={styles.heading}>About - MeriShiksha.com</Text>

        {/* Scrollable Content */}
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.paragraph}>
            Welcome to{' '}
            <Text 
              style={styles.link} 
              onPress={() => Linking.openURL('http://www.merishiksha.com')}
            >
              www.merishiksha.com
            </Text>
            , a cutting-edge educational platform powered by Google AI. Developed by{' '}
            <Text style={styles.boldText}>Parth Gopani</Text>, a third-year Computer Science Engineering student at{' '}
            <Text style={styles.boldText}>The Maharaja Sayajirao University of Baroda</Text>, this portal redefines career development and academic excellence for students worldwide.
          </Text>

          <Text style={styles.paragraph}>
            Through its advanced AI-driven tools, MeriShiksha.com empowers users to:
          </Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>- Build careers tailored to their skills and aspirations.</Text>
            <Text style={styles.listItem}>- Excel academically with personalized learning resources.</Text>
            <Text style={styles.listItem}>- Achieve their goals through strategic guidance and support.</Text>
          </View>

          {/* Acknowledgments */}
          <Text style={styles.subHeading}>Acknowledgments</Text>
          <Text style={styles.paragraph}>
            This project was brought to life under the expert guidance and technical mentorship of{' '}
            <Text style={styles.boldText}>Mr. Rajiv Shah</Text>, a seasoned AI and IT consultant.
          </Text>
          <Text style={styles.paragraph}>
            We extend our heartfelt gratitude to{' '}
            <Text style={styles.boldText}>Upasna Charitable Trust</Text> and its trustees for their invaluable financial support during the initial stages of development.
          </Text>
          <Text style={styles.paragraph}>
            Finally, we thank all our well-wishers for their unwavering encouragement and contributions to this mission.
          </Text>
        </ScrollView>

        {/* Home Button */}
        <View style={styles.buttonContainer}>
          {/* <HomeButton /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
  },
  aboutContainer: {
    backgroundColor: '#333',
    borderRadius: 16,
    padding: 10,
    marginTop: 20,
    width: '100%',
    maxWidth: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    margin: 20,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    maxHeight: 'auto',
    padding: 15,
    backgroundColor: '#444',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  paragraph: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
  link: {
    color: '#0f0',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  listContainer: {
    marginTop: 5,
    marginLeft: 10,
  },
  listItem: {
    color: '#bbb',
    fontSize: 16,
    lineHeight: 22,
  },
  subHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default About;

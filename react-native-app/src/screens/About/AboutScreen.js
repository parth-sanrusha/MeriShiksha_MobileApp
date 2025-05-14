import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  StatusBar,
  Animated,
} from 'react-native';
import LinearGradient from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS, SHADOWS } from '../../styles/theme';

const AboutScreen = ({ navigation }) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const cardFadeAnim = useRef(new Animated.Value(0)).current;
  const cardSlideAnim = useRef(new Animated.Value(30)).current;

  // Start animations when component mounts
  useEffect(() => {
    // Sequence animations for a more polished feel
    Animated.sequence([
      // First animate the header
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      // Then animate the content card
      Animated.parallel([
        Animated.timing(cardFadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(cardSlideAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A29" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#4F46E5', '#14B8A6']} // Purple to teal gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerContainer}
        >
          <Animated.View
            style={[
              styles.headerContent,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <Text style={styles.headerTitle}>About MeriShiksha</Text>
            <Text style={styles.headerSubtitle}>Empowering Education with AI</Text>
          </Animated.View>
        </LinearGradient>

        <Animated.View
          style={[
            styles.contentWrapper,
            {
              opacity: cardFadeAnim,
              transform: [{ translateY: cardSlideAnim }],
            },
          ]}
        >
          <View style={styles.contentContainer}>
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
              <View style={styles.listItemContainer}>
                <View style={styles.bulletPoint} />
                <Text style={styles.listItem}>Build careers tailored to their skills and aspirations.</Text>
              </View>
              <View style={styles.listItemContainer}>
                <View style={styles.bulletPoint} />
                <Text style={styles.listItem}>Excel academically with personalized learning resources.</Text>
              </View>
              <View style={styles.listItemContainer}>
                <View style={styles.bulletPoint} />
                <Text style={styles.listItem}>Achieve their goals through strategic guidance and support.</Text>
              </View>
            </View>

            <LinearGradient
              colors={['rgba(79, 70, 229, 0.2)', 'rgba(20, 184, 166, 0.2)']} // Subtle gradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.sectionTitleContainer}
            >
              <Text style={styles.sectionTitle}>Acknowledgments</Text>
            </LinearGradient>
            
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
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => navigation.navigate('Home')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A29', // Dark blue background
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    ...FONTS.bold,
    fontSize: 32,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    ...FONTS.regular,
    fontSize: SIZES.lg,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  contentWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  contentContainer: {
    backgroundColor: '#0F0F3D', // Dark blue card background
    borderRadius: 16,
    padding: 20,
    ...SHADOWS.medium,
  },
  paragraph: {
    ...FONTS.regular,
    fontSize: SIZES.md,
    color: '#A0A0B0', // Light gray text
    marginBottom: 15,
    lineHeight: 22,
  },
  link: {
    ...FONTS.medium,
    color: '#14B8A6', // Teal color
    textDecorationLine: 'underline',
  },
  boldText: {
    ...FONTS.bold,
    color: COLORS.white,
  },
  listContainer: {
    marginBottom: 20,
    paddingLeft: 5,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#14B8A6', // Teal bullet point
    marginTop: 7,
    marginRight: 10,
  },
  listItem: {
    ...FONTS.regular,
    fontSize: SIZES.md,
    color: '#A0A0B0', // Light gray text
    flex: 1,
    lineHeight: 22,
  },
  sectionTitleContainer: {
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    ...FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.white,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  homeButton: {
    backgroundColor: '#14B8A6', // Teal button
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50, // Rounded button
    ...SHADOWS.medium,
  },
  buttonText: {
    ...FONTS.bold,
    color: COLORS.white,
    fontSize: SIZES.md,
  },
});

export default AboutScreen;

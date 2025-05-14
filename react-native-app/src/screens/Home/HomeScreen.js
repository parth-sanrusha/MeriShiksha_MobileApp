import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS, SHADOWS } from '../../styles/theme';

// Placeholder for the image - replace with actual image path
const GEMINI_IMAGE = require('../../../assets/icon.png');

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollViewRef = useRef(null);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  // Start animations when component mounts
  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  
  // Animation ends here

  // Array of service pages (same as in your React JS app)
  const pages = [
    {
      title: "Unlock AI Careers in India",
      description: "Plan your career in AI industry",
      path: "AICareerCounselling",
      category: "Career Crafting",
      subcategory: "AI Career in India",
    },
    {
      title: "Career Counselling",
      description: "Get personalized career advice",
      path: "CareerCounselling",
      category: "Career Crafting",
      subcategory: "Career Counselling",
    },
    {
      title: "Job Hunt",
      description: "Find the perfect job for you",
      path: "JobHunt",
      category: "Career Crafting",
      subcategory: "Job Hunt",
    },
    {
      title: "Language Learning",
      description: "Master new languages efficiently",
      path: "LanguageLearning",
      category: "Career Crafting",
      subcategory: "Language Learning",
    },
    {
      title: "Language Accelerator",
      description: "Upgrade you Vocabulary with AI talk",
      path: "LanguageAccelerator",
      category: "Career Crafting",
      subcategory: "Language Learning",
    },
    {
      title: "AI Mock Interview",
      description: "Practice and perfect your interview skills",
      path: "MockInterview",
      category: "Career Crafting",
      subcategory: "Mock Interview",
    },
    {
      title: "Knowledge Gap",
      description: "Identify and address knowledge gaps",
      path: "KnowledgeGap",
      category: "Empowering Learner",
    },
    {
      title: "Topic Learning",
      description: "Explore and expand your knowledge",
      path: "TopicLearning",
      category: "Empowering Learner",
    },
    {
      title: "DotPoint Summary",
      description: "Summarize and organize your knowledge",
      path: "DotPointSummary",
      category: "Empowering Learner",
    },
    {
      title: "Lesson Planning",
      description: "Create effective lesson plans with AI",
      path: "LessonPlan",
      category: "Empowering Tutor",
    },
    {
      title: "MCQ Generator",
      description: "Generate customized MCQs",
      path: "MCQGenerator",
      category: "Empowering Tutor",
    },
    {
      title: "AI Q and A",
      description: "AI support for classroom management",
      path: "QAndA",
      category: "Empowering Tutor",
    },
  ];

  // Categories
  const categories = [
    {
      id: "Career Crafting",
      title: "Career Crafting",
      description: "Plan your career path with AI-powered guidance and tools",
      icon: "📊",
    },
    {
      id: "Empowering Learner",
      title: "Empowering Learner",
      description: "Enhance your learning experience with personalized AI tools",
      icon: "📚",
    },
    {
      id: "Empowering Tutor",
      title: "Empowering Tutor",
      description: "Improve your teaching methods with AI-powered assistance",
      icon: "👨‍🏫",
    },
  ];

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    if (categoryId === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  // Filter pages by category
  const getFilteredPages = (categoryId) => {
    return pages.filter(page => page.category === categoryId);
  };

  // Render hero section
  const renderHeroSection = () => (
    <LinearGradient
      colors={['#4F46E5', '#14B8A6']} // Purple to teal gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.heroContainer}
    >
      <Animated.View
        style={[
          styles.heroContent,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={styles.heroTitle}>
          Empowering{"\n"}Learners & Tutors
        </Text>
        <Text style={styles.heroSubtitle}>
          Discover the power of adaptive learning with AI to enhance your knowledge and teaching efficiency.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({ y: 400, animated: true });
              }
            }}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('About')}
          >
            <Text style={styles.secondaryButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </LinearGradient>
  );

  // Render category section
  const renderCategorySection = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Explore Categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => {
          // Determine if this category is selected
          const isSelected = selectedCategory === category.id;
          
          // Choose the appropriate background color based on selection
          const cardStyle = isSelected ? 
            (category.id === 'Empowering Learner' ? styles.selectedLearnerCard : styles.categoryCard) : 
            styles.categoryCard;
          
          return (
            <TouchableOpacity
              key={category.id}
              style={[
                cardStyle,
                isSelected && styles.selectedCategoryCard,
              ]}
              onPress={() => handleCategorySelect(category.id)}
              activeOpacity={0.8}
            >
              <View style={styles.categoryHeader}>
                <View style={styles.iconContainer}>
                  <LinearGradient
                    colors={category.id === 'Career Crafting' ? ['#3949AB', '#1E88E5'] : 
                           category.id === 'Empowering Learner' ? ['#7B1FA2', '#9C27B0'] : 
                           ['#D84315', '#F4511E']}
                    style={styles.iconBackground}
                  >
                    <Text style={styles.iconText}>{category.icon}</Text>
                  </LinearGradient>
                </View>
                <Text style={[styles.categoryTitle, isSelected && styles.selectedCategoryTitle]}>
                  {category.title}
                </Text>
              </View>
              <Text style={styles.categoryDescription}>{category.description}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  // Render services section
  const renderServicesSection = () => {
    if (!selectedCategory) return null;

    const filteredPages = getFilteredPages(selectedCategory);

    // Define gradient colors based on category
    const getGradientColors = (category, index) => {
      if (category === 'Empowering Learner') {
        return ['#4527A0', '#7B1FA2']; // Deep purple to purple
      } else if (category === 'Career Crafting') {
        return ['#1A237E', '#283593']; // Deep blue to indigo
      } else {
        return ['#1565C0', '#0277BD']; // Blue to light blue
      }
    };

    return (
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTitle}>{selectedCategory} Services</Text>
        <View style={styles.servicesGrid}>
          {filteredPages.map((page, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceCard}
              onPress={() => navigation.navigate('PlaceholderScreen', { title: page.title })}
              activeOpacity={0.9}
            >
              <LinearGradient
                colors={getGradientColors(selectedCategory, index)}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.serviceCardGradient}
              >
                <Text style={styles.serviceTitle}>{page.title}</Text>
                <Text style={styles.serviceDescription}>{page.description}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  // Render chatbot button
  const renderChatbotButton = () => (
    <TouchableOpacity
      style={styles.chatbotButton}
      onPress={() => navigation.navigate('PlaceholderScreen', { title: 'AI Chatbot' })}
    >
      <Image source={GEMINI_IMAGE} style={styles.chatbotImage} />
      <View style={styles.chatbotIndicator} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {renderHeroSection()}
        {renderCategorySection()}
        {renderServicesSection()}
      </ScrollView>
      {renderChatbotButton()}
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Icon styles
  iconContainer: {
    marginRight: 12,
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  iconText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#0A0A29', // Dark blue/black background as shown in screenshots
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  heroContainer: {
    width: '100%',
    height: 450, // Taller hero section as in screenshot
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  heroTitle: {
    ...FONTS.bold,
    fontSize: 32, // Larger font as in screenshot
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  heroSubtitle: {
    ...FONTS.regular,
    fontSize: SIZES.lg,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 30,
    opacity: 0.9,
    lineHeight: 24,
    maxWidth: '90%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  primaryButton: {
    backgroundColor: '#14B8A6', // Teal color from screenshot
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50, // More rounded buttons as shown in screenshot
    marginRight: 15,
    ...SHADOWS.medium,
  },
  buttonText: {
    ...FONTS.bold,
    color: COLORS.white,
    fontSize: SIZES.md,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white as shown in screenshot
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50, // More rounded buttons
    borderWidth: 0, // No border in screenshot
  },
  secondaryButtonText: {
    ...FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.md,
  },
  sectionContainer: {
    padding: 20,
    backgroundColor: '#0A0A29', // Dark background as in screenshot
  },
  sectionTitle: {
    ...FONTS.bold,
    fontSize: SIZES.h2,
    color: COLORS.white,
    marginBottom: 20,
    marginLeft: 5,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: '#0F0F3D', // Dark blue card background as in screenshot
    borderRadius: 16, // More rounded corners as in screenshot
    padding: 20,
    marginBottom: 15,
    ...SHADOWS.small,
  },
  selectedCategoryCard: {
    borderColor: '#14B8A6', // Teal border for selected card
    borderWidth: 2,
    ...SHADOWS.medium,
  },
  selectedLearnerCard: {
    backgroundColor: '#0F0F3D', // Dark blue card background
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    borderColor: '#14B8A6', // Teal border for selected card
    borderWidth: 2,
    ...SHADOWS.medium,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  categoryTitle: {
    ...FONTS.bold,
    fontSize: SIZES.lg,
    color: COLORS.white,
  },
  selectedCategoryTitle: {
    color: '#14B8A6', // Teal text for selected category
  },
  categoryDescription: {
    ...FONTS.regular,
    fontSize: SIZES.md,
    color: '#A0A0B0', // Light gray text as in screenshot
    lineHeight: 22,
  },
  servicesContainer: {
    padding: 20,
    backgroundColor: '#0A0A29', // Dark background
  },
  servicesTitle: {
    ...FONTS.bold,
    fontSize: SIZES.h3,
    color: '#14B8A6', // Teal color as in screenshot
    marginBottom: 20,
    marginLeft: 5,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: (width - 50) / 2,
    marginBottom: 15,
    borderRadius: 16, // More rounded corners as in screenshot
    overflow: 'hidden',
    ...SHADOWS.medium,
    height: 140, // Fixed height for consistency
  },
  serviceCardGradient: {
    padding: 18,
    height: '100%',
    justifyContent: 'space-between',
  },
  serviceTitle: {
    ...FONTS.bold,
    fontSize: SIZES.md,
    color: COLORS.white,
    marginBottom: 8,
  },
  serviceDescription: {
    ...FONTS.regular,
    fontSize: SIZES.sm,
    color: 'rgba(255, 255, 255, 0.7)', // Slightly transparent white as in screenshot
    lineHeight: 18,
  },
  chatbotButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF', // White button as in screenshot
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.large,
  },
  chatbotImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatbotIndicator: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#14B8A6', // Teal indicator
    borderWidth: 2,
    borderColor: COLORS.white,
  },
});

export default HomeScreen;

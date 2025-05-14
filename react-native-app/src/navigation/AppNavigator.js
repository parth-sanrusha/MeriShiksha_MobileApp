import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import HomeScreen from '../screens/Home/HomeScreen';
import AboutScreen from '../screens/About/AboutScreen';

// Create stack navigator
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0A0A29', // Primary black
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Merishiksha',
            headerShown: false, // Hide header on home screen
          }} 
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ title: 'About Us' }} 
        />
        
        {/* Career Crafting Screens */}
        <Stack.Screen name="AICareerCounselling" component={PlaceholderScreen} options={{ title: 'AI Career Counselling' }} />
        <Stack.Screen name="CareerCounselling" component={PlaceholderScreen} options={{ title: 'Career Counselling' }} />
        <Stack.Screen name="JobHunt" component={PlaceholderScreen} options={{ title: 'Job Hunt' }} />
        <Stack.Screen name="LanguageLearning" component={PlaceholderScreen} options={{ title: 'Language Learning' }} />
        <Stack.Screen name="LanguageAccelerator" component={PlaceholderScreen} options={{ title: 'Language Accelerator' }} />
        <Stack.Screen name="MockInterview" component={PlaceholderScreen} options={{ title: 'Mock Interview' }} />
        
        {/* Empowering Learner Screens */}
        <Stack.Screen name="KnowledgeGap" component={PlaceholderScreen} options={{ title: 'Knowledge Gap' }} />
        <Stack.Screen name="TopicLearning" component={PlaceholderScreen} options={{ title: 'Topic Learning' }} />
        <Stack.Screen name="DotPointSummary" component={PlaceholderScreen} options={{ title: 'DotPoint Summary' }} />
        
        {/* Empowering Tutor Screens */}
        <Stack.Screen name="LessonPlan" component={PlaceholderScreen} options={{ title: 'Lesson Plan' }} />
        <Stack.Screen name="MCQGenerator" component={PlaceholderScreen} options={{ title: 'MCQ Generator' }} />
        <Stack.Screen name="QAndA" component={PlaceholderScreen} options={{ title: 'Q&A' }} />
        
        {/* Other Screens */}
        <Stack.Screen name="Chatbot" component={PlaceholderScreen} options={{ title: 'AI Assistant' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Placeholder component for screens that are not yet implemented
const PlaceholderScreen = ({ route, navigation }) => {
  const { title } = route.params || { title: route.name };
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0A0A29',
      padding: 20
    }}>
      <View style={{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(20, 184, 166, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
      }}>
        <Text style={{ fontSize: 30 }}>🚧</Text>
      </View>
      <Text style={{
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
      }}>
        Coming Soon
      </Text>
      <Text style={{
        color: '#A0A0B0',
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
        maxWidth: '80%'
      }}>
        The {title} feature is currently under development and will be available soon.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#14B8A6',
          paddingVertical: 14,
          paddingHorizontal: 30,
          borderRadius: 50,
          elevation: 4
        }}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppNavigator;

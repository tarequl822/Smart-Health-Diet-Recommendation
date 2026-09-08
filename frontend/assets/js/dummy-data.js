/* ==========================================================================
   Smart Health & Diet Recommendation System - Local Storage Dummy Data Store
   ========================================================================== */

(function () {
  'use strict';

  const KEYS = {
    CURRENT_USER: 'shd_current_user',
    USERS: 'shd_users',
    DIETITIANS: 'shd_dietitians',
    MEALS: 'shd_logged_meals',
    WATER: 'shd_water_intake',
    SLEEP: 'shd_sleep_log',
    WEIGHT: 'shd_weight_progress',
    RECIPES: 'shd_recipes',
    MEAL_PLANS: 'shd_meal_plans',
    CHAT_MESSAGES: 'shd_chat_messages',
    FOOD_DATABASE: 'shd_food_database'
  };

  const defaultFoods = [
    { id: 'f1', name: 'Berry Oatmeal', category: 'Breakfast', calories: 350, protein: 12, carbs: 55, fat: 6, portion: '1 bowl (250g)' },
    { id: 'f2', name: 'Scrambled Eggs with Avocado', category: 'Breakfast', calories: 420, protein: 18, carbs: 10, fat: 28, portion: '2 eggs + 1/2 avocado' },
    { id: 'f3', name: 'Grilled Chicken Salad', category: 'Lunch', calories: 480, protein: 42, carbs: 15, fat: 18, portion: '1 bowl (300g)' },
    { id: 'f4', name: 'Quinoa & Veggie Bowl', category: 'Lunch', calories: 410, protein: 14, carbs: 62, fat: 12, portion: '1 bowl' },
    { id: 'f5', name: 'Grilled Salmon with Asparagus', category: 'Dinner', calories: 550, protein: 46, carbs: 12, fat: 26, portion: '200g fillet' },
    { id: 'f6', name: 'Brown Rice & Lentil Curry', category: 'Dinner', calories: 490, protein: 19, carbs: 75, fat: 9, portion: '1 plate' },
    { id: 'f7', name: 'Mixed Roasted Nuts', category: 'Snacks', calories: 180, protein: 6, carbs: 8, fat: 15, portion: 'Handful (30g)' },
    { id: 'f8', name: 'Greek Yogurt with Honey', category: 'Snacks', calories: 210, protein: 15, carbs: 22, fat: 4, portion: '150g' }
  ];

  const defaultDietitians = [
    {
      id: 'd1',
      name: 'Dr. Sarah Jenkins',
      email: 'sarah.j@smarthealth.com',
      specialty: 'Clinical Nutrition & Weight Loss',
      experience: '8 Years',
      status: 'Approved',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1594824813566-78a933f2c38f?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 'd2',
      name: 'Dr. Michael Chen',
      email: 'michael.c@smarthealth.com',
      specialty: 'Sports Nutrition & Muscle Gain',
      experience: '6 Years',
      status: 'Approved',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 'd3',
      name: 'Dr. Emily Vance',
      email: 'emily.v@smarthealth.com',
      specialty: 'Diabetic & Renal Diets',
      experience: '5 Years',
      status: 'Pending',
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80'
    }
  ];

  const defaultUsers = [
    {
      id: 'u1',
      name: 'Fatema Rifa',
      email: 'user@example.com',
      role: 'user',
      age: 24,
      gender: 'Female',
      height: 165,
      weight: 64.5,
      targetWeight: 60.0,
      goal: 'Weight Loss & Healthy Living',
      dailyCalorieLimit: 2000,
      waterTarget: 2.5,
      sleepTarget: 8,
      joinedDate: '2026-01-15'
    },
    {
      id: 'u2',
      name: 'Tanvir Ahmed',
      email: 'tanvir@example.com',
      role: 'user',
      age: 28,
      gender: 'Male',
      height: 178,
      weight: 76.0,
      targetWeight: 80.0,
      goal: 'Muscle Building',
      dailyCalorieLimit: 2500,
      waterTarget: 3.0,
      sleepTarget: 8,
      joinedDate: '2026-02-10'
    }
  ];

  const defaultLoggedMeals = [
    { id: 'm1', userId: 'u1', date: new Date().toISOString().split('T')[0], category: 'Breakfast', name: 'Berry Oatmeal', calories: 350, loggedAt: '08:30 AM' },
    { id: 'm2', userId: 'u1', date: new Date().toISOString().split('T')[0], category: 'Lunch', name: 'Grilled Chicken Salad', calories: 480, loggedAt: '01:15 PM' },
    { id: 'm3', userId: 'u1', date: new Date().toISOString().split('T')[0], category: 'Snacks', name: 'Mixed Roasted Nuts', calories: 180, loggedAt: '04:45 PM' }
  ];

  const defaultWaterLog = { userId: 'u1', currentAmount: 1.8, targetAmount: 2.5 };
  const defaultSleepLog = { userId: 'u1', durationHours: 7.5, qualityScore: 88, bedtime: '11:00 PM', wakeTime: '06:30 AM' };
  const defaultWeightHistory = [
    { date: '1 MAY', weight: 67.5 },
    { date: '7 MAY', weight: 66.8 },
    { date: '14 MAY', weight: 66.2 },
    { date: '21 MAY', weight: 65.5 },
    { date: '28 MAY', weight: 64.9 },
    { date: 'TODAY', weight: 64.5 }
  ];

  const defaultChats = [
    { id: 'c1', sender: 'Dr. Sarah Jenkins', text: 'Hello Fatema! How is your new breakfast diet plan working for you?', time: '10:15 AM', isDietitian: true },
    { id: 'c2', sender: 'Fatema Rifa', text: 'Hi Dr. Sarah! I feel much more energetic. I logged my oatmeal today!', time: '10:18 AM', isDietitian: false },
    { id: 'c3', sender: 'Dr. Sarah Jenkins', text: 'That is wonderful news! Keep up the good water intake today as well.', time: '10:20 AM', isDietitian: true }
  ];

  const defaultRecipes = [
    { id: 'r1', title: 'High-Protein Avocado Chicken Bowl', category: 'Lunch', calories: 450, prepTime: '20 mins', author: 'Dr. Sarah Jenkins', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop&q=80' },
    { id: 'r2', title: 'Berry Chia Protein Smoothie', category: 'Breakfast', calories: 280, prepTime: '10 mins', author: 'Dr. Michael Chen', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&auto=format&fit=crop&q=80' }
  ];

  window.SHD_Data = {
    init: function () {
      if (!localStorage.getItem(KEYS.FOOD_DATABASE)) localStorage.setItem(KEYS.FOOD_DATABASE, JSON.stringify(defaultFoods));
      if (!localStorage.getItem(KEYS.DIETITIANS)) localStorage.setItem(KEYS.DIETITIANS, JSON.stringify(defaultDietitians));
      if (!localStorage.getItem(KEYS.USERS)) localStorage.setItem(KEYS.USERS, JSON.stringify(defaultUsers));
      if (!localStorage.getItem(KEYS.MEALS)) localStorage.setItem(KEYS.MEALS, JSON.stringify(defaultLoggedMeals));
      if (!localStorage.getItem(KEYS.WATER)) localStorage.setItem(KEYS.WATER, JSON.stringify(defaultWaterLog));
      if (!localStorage.getItem(KEYS.SLEEP)) localStorage.setItem(KEYS.SLEEP, JSON.stringify(defaultSleepLog));
      if (!localStorage.getItem(KEYS.WEIGHT)) localStorage.setItem(KEYS.WEIGHT, JSON.stringify(defaultWeightHistory));
      if (!localStorage.getItem(KEYS.CHAT_MESSAGES)) localStorage.setItem(KEYS.CHAT_MESSAGES, JSON.stringify(defaultChats));
      if (!localStorage.getItem(KEYS.RECIPES)) localStorage.setItem(KEYS.RECIPES, JSON.stringify(defaultRecipes));
      if (!localStorage.getItem(KEYS.CURRENT_USER)) localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify({ name: 'Fatema Rifa', email: 'user@example.com', role: 'user' }));
    },

    getFoodDatabase: () => JSON.parse(localStorage.getItem(KEYS.FOOD_DATABASE)) || [],
    getDietitians: () => JSON.parse(localStorage.getItem(KEYS.DIETITIANS)) || [],
    getUsers: () => JSON.parse(localStorage.getItem(KEYS.USERS)) || [],
    getLoggedMeals: () => JSON.parse(localStorage.getItem(KEYS.MEALS)) || [],
    getWaterLog: () => JSON.parse(localStorage.getItem(KEYS.WATER)) || defaultWaterLog,
    getSleepLog: () => JSON.parse(localStorage.getItem(KEYS.SLEEP)) || defaultSleepLog,
    getWeightHistory: () => JSON.parse(localStorage.getItem(KEYS.WEIGHT)) || defaultWeightHistory,
    getChats: () => JSON.parse(localStorage.getItem(KEYS.CHAT_MESSAGES)) || [],
    getRecipes: () => JSON.parse(localStorage.getItem(KEYS.RECIPES)) || [],
    getCurrentUser: () => JSON.parse(localStorage.getItem(KEYS.CURRENT_USER)),

    setCurrentUser: (userObj) => localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(userObj)),

    addMeal: function (meal) {
      const meals = this.getLoggedMeals();
      meal.id = 'm_' + Date.now();
      meal.loggedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      meals.push(meal);
      localStorage.setItem(KEYS.MEALS, JSON.stringify(meals));
      return meals;
    },

    addWater: function (amount) {
      const water = this.getWaterLog();
      water.currentAmount = parseFloat((water.currentAmount + amount).toFixed(1));
      localStorage.setItem(KEYS.WATER, JSON.stringify(water));
      return water;
    },

    addWeight: function (newWeight) {
      const history = this.getWeightHistory();
      history.push({ date: 'TODAY', weight: parseFloat(newWeight) });
      localStorage.setItem(KEYS.WEIGHT, JSON.stringify(history));
      return history;
    },

    addChatMessage: function (text, isDietitian = false, senderName = 'Fatema Rifa') {
      const chats = this.getChats();
      const msg = { id: 'c_' + Date.now(), sender: senderName, text: text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), isDietitian: isDietitian };
      chats.push(msg);
      localStorage.setItem(KEYS.CHAT_MESSAGES, JSON.stringify(chats));
      return chats;
    },

    approveDietitian: function (id) {
      const dietitians = this.getDietitians();
      const d = dietitians.find(item => item.id === id);
      if (d) d.status = 'Approved';
      localStorage.setItem(KEYS.DIETITIANS, JSON.stringify(dietitians));
      return dietitians;
    }
  };

  window.SHD_Data.init();
})();

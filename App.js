import { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [enteredText, setEnteredText] = useState('')
  const [courseGoals, setCourseGoals] = useState('')

  function goalInputHandler(enteredText) {
      setEnteredText(enteredText)
  }

  function addGoalHandler() {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals, 
        enteredText,
      ]);
  }


  return (
    <View style={styles.AppContainer}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.textInput} 
          placeholder='Your Course Goal' 
          onChangeText={goalInputHandler}
          />
          <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
        <View style={styles.goalsContainer}>
        <ScrollView>
          { courseGoals && courseGoals.map((goal) => (
              <View style={styles.goalItem} key={goal} >
                   <Text style={styles.goalText} >{goal}</Text>
              </View>
              ))}
        </ScrollView>
        </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  AppContainer: {
   flex: 1,
   paddingTop: 50,
   paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc '
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',   
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: 'white',
  }
});
